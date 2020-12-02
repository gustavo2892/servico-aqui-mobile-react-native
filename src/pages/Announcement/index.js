import React, {useRef, useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '~/components/Background';

import {
  Container,
  Title,
  Form,
  FormInput,
  SubmitButton,
  LogoutButton,
} from './styles';
import {updateProfileRequest} from '~/store/modules/user/actions';
import {signOut} from '~/store/modules/auth/actions';

export default function Annoucement() {
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();
  const emailRef = useRef();

  const token = useSelector(state => state.auth.token)

  const [title, setTitle] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [description, setDescription] = useState('');
 
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit() {
    dispatch(
      updateProfileRequest({
        name,
        email,
        oldPassword,
        password,
        confirmPassword,
      }),
    );
  }

  function handleLogout() {
    dispatch(signOut());
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

          <SubmitButton loading={loading} onPress={handleSubmit}>
            Criar Serviço
          </SubmitButton>
          <LogoutButton loading={loading} onPress={handleLogout}>
            Deletar
          </LogoutButton>
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
