import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
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

export default function SelectDateTime({ navigation }) {
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
              onPress={() =>
                navigation.navigate('SelectDateTime', { provider })
              }
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
              <Subject>Categoria</Subject>
              <Text>State da categoria</Text>
              <Subject>Cidade</Subject>
              <Text>State da cidade</Text>
              <Subject>Descrição do usuário</Subject>
              <Text>State da descripton</Text>
              <Subject>Preço</Subject>
              <Text>State do price</Text>
              <Subject>Contato</Subject>
              <Text>State do contact</Text>
             
              </ProfileInfo>
              <Footer>
              <ButtonsContainer>
                <ContactButton>
                <ContactButtonText
                  onPress={() =>
                    navigation.navigate('SelectDateTime', { provider })
                  }
                >Horários</ContactButtonText>
                </ContactButton>
              </ButtonsContainer>
             </Footer>

            </Provider>
           
      </Container>
      
    </Background>
  );
}

SelectDateTime.navigationOptions = ({ navigation }) => ({
  title: 'Perfil do Usuário',
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Icon name="arrow-back" size={24} color="#fff" />
    </TouchableOpacity>
  ),
}
);
