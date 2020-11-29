import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const ProvidersList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  numColumns: 2,
})`
  margin-top: 60px;
  padding: 0 20px;
`;

export const Provider = styled(RectButton)`
  background: #fff;
  border-radius: 4px;
  padding: 20px;
  flex: 1;
  align-items: center;
  margin: 0 10px 20px;
`;

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

export const Profile = styled(RectButton)`
  flex-direction: row;
  background: #fff;
  align-items: center;
  border-radius: 4px;
  padding: 20px;
  flex: 1;
`;

export const ProfileInfo = styled.View`
  margin-left: 16px;
`;

export const Name = styled.Text`
  color: #32264d;
  font-size: 20px;
`;

export const Subject = styled.Text`
  color: #6a6180;
  font-size: 12px;
  margin-top: 4px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #fff;
  font-family: 'RobotoSlab-Medium';
  max-width: 160;
  margin-vertical: 40px;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #fff;
  font-size: 16px;
  border-color: black;
  font-family: 'RobotoSlab-Regular';
`;


