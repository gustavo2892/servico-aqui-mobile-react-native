import React, { useEffect, useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../../services/api';
import Background from '../../../components/Background';

import { Container, ProvidersList, Avatar, Name, Provider, ProfileInfo, CategoryText } from './styles';
import avatar from '../../../assets/avatar.png';

export default function ProfileProvider({ navigation }) {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    async function loadProviders() {
      const response = await api.get('providers');

      setProviders(response.data);
    }

    loadProviders();
  }, []);

console.log('providers',providers)

  return (
    
    <Background>
      <Container>
        <ProvidersList
          data={providers}
          keyExtractor={provider => String(provider.id)}
          renderItem={({ item: provider }) => (
            <Provider
              onPress={() =>
                navigation.navigate('ProfileProvider', { provider })
              }
            >
              {
                provider.avatar ?
                <Avatar
                source={{
                  uri: provider.avatar
                    ? provider.avatar.url
                    : avatar,
                }}
                /> :
                <Avatar
                  source={avatar}
                />
              }
              <Name>{provider.name}</Name>
            <Text>{provider.category}</Text>
            </Provider>
          )}
        />

      </Container>
    </Background>
  );
}

ProfileProvider.navigationOptions = ({ navigation }) => ({
  title: 'Selecione o prestador',
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
      <Icon name="arrow-back" size={24} color="#fff" />
    </TouchableOpacity>
  ),
});

{
  /*

  */
}
