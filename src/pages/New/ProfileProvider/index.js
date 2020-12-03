import React, { useState, useEffect } from 'react';
import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AvatarTest from '../../../assets/avatar.png';

import api from '../../../services/api';

import Background from '../../../components/Background';

import { Container,
   ProfileInfo,
    Avatar, 
    Name,
    Subject, 
    Provider, 
    Footer, 
    ButtonsContainer, 
    ContactButton, 
    ContactButtonText, 
    AvatarContainer, 
    Text,
    ReportButtom} from './styles';

export default function ProfileProvider({ navigation }) {
  const [date, setDate] = useState(new Date());
  const [hours, setHours] = useState([]);

  const provider = navigation.getParam('provider');

  useEffect(() => {
    async function loadAvailable() {
      const response = await api.get(`providers/${provider.id}/available`, {
        params: {
          date: date.getTime(),
        },
      });

      setHours(response.data);
    }

    loadAvailable();
  }, [date, provider.id]);

  function handleSelectDateTime(time) {
    navigation.navigate('SelectDateTime', {
      provider,
      time,
    });
  }

  return (
    <Background>
      <Container>
      <Provider
              // onPress={() =>
              //   navigation.navigate('SelectDateTime', { provider })
              // }
            >
              {/* {
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
              } */}
            <AvatarContainer>
            <Avatar
              source={AvatarTest}
              />
            </AvatarContainer>
            
              
             
              <ProfileInfo>
              <Name>{provider.name}</Name>
              {
                provider.category ? 
                <View>
              <Subject>Categoria</Subject>
              <Text>{provider.category}</Text>
                </View> : null
              }
               {
                provider.description ? 
                <View>
              <Subject>Descrição do prestador</Subject>
              <Text>{provider.description}</Text>
                </View> : null
              }
              
              {
                provider.price ? 
                <View>
              <Subject>Categoria</Subject>
              <Text>{provider.price}</Text>
                </View> : null
              }
            
             
             
              </ProfileInfo>
              <Footer>
              <ButtonsContainer
             
              >
                <ContactButton
                onPress={() =>
                  navigation.navigate('SelectDateTime', { provider })
                }>

                <ContactButtonText
  
                >Horários</ContactButtonText>
                </ContactButton>
              </ButtonsContainer>
             </Footer>

            </Provider>
           
      </Container>
      
    </Background>
  );
}

ProfileProvider.navigationOptions = ({ navigation }) => ({
  title: 'Perfil do Usuário',
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Icon name="arrow-back" size={24} color="#fff" />
    </TouchableOpacity>
  ),
}
);
