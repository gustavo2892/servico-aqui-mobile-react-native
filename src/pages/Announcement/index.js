import React, {useRef, useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '~/components/Background';
import { Alert } from 'react-native';

import api from '../../services/api';
import {
  Container,
  Title,
  Form,
  FormInput,
  SubmitButton,
  LogoutButton,
} from './styles';

export default function Annoucement() {
  const emailRef = useRef();

  const [title, setTitle] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [description, setDescription] = useState('');
  const [visibleButton, setVisibleButton] = useState(false);

  useEffect(() => {
    async function loadAnnouncement() {
      const response = await api.get('announcements');

      const data = response.data;

      if (data !== null) {
        setVisibleButton(true);
        setTitle(data.title);
        setWhatsapp(data.whatsapp);
        setDescription(data.description);
      }
    }

    loadAnnouncement();
  }, []);

  async function handleSubmit() {
    const response = await api.post('announcements', {
      title,
      whatsapp,
      description
    });

    Alert.alert(
      'Sucesso',
      'O anúncio foi criado com sucesso.',
    );

    setVisibleButton(true);
  }

  async function handleDelete() {
    await api.delete('announcements');

    Alert.alert(
      'Sucesso',
      'O anúncio foi deletado com sucesso.',
    );

    setVisibleButton(false);
    setTitle('');
    setWhatsapp('');
    setDescription('');
  }

  return (
    <Background>
      <Container>
        <Title>Solicite seu serviço</Title>
        <Form>
          <FormInput
            icon="work"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite a categoria do serviço"
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
            value={title}
            onChangeText={setTitle}
          />

          <FormInput
            icon="phone-in-talk"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu whatsapp"
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
            value={whatsapp}
            onChangeText={setWhatsapp}
          />
          <FormInput
            icon="sort"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite a descrição do serviço"
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
            value={description}
            onChangeText={setDescription}
          />
          {
            !visibleButton &&
            <SubmitButton onPress={() => handleSubmit()}>
              Criar Serviço
            </SubmitButton>
          }
          {
            visibleButton &&
            <LogoutButton onPress={() => handleDelete()} >
              Deletar
            </LogoutButton>
          }
        </Form>
      </Container>
    </Background>
  );
}

Annoucement.navigationOptions = {
  tabBarLabel: 'Solicitar Serviço',
  tabBarIcon: ({tintColor}) => (
    <Icon name="add-circle-outline" size={20} color={tintColor} />
  ),
};
