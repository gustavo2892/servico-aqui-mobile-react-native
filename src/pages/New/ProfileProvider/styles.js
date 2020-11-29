import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const HourList = styled.FlatList.attrs({
  numColumns: 2,
  showsVerticalScrollIndicator: false,
})`
  padding: 0 20px;
`;

export const Hour = styled(RectButton)`
  background: #fff;
  border-radius: 4px;
  padding: 20px;
  flex: 1;
  opacity: ${props => (props.enabled ? 1 : 0.6)};
  align-items: center;
  margin: 0 10px 20px;
`;

export const Title = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #333;
`;

export const Profile = styled(RectButton)`
  flex-direction: row;
  background: #fff;
  border-radius: 4px;
  padding: 20px;
  margin: 60px 10px 20px;
`;

export const ProfileInfo = styled.View`
  margin-left: 16px;
  flex:1;
`;

export const ProfileContainer = styled.View`
  margin-left: 16px;
  flex:1;
  flex-direction: row;
`;

export const Name = styled.Text`
  color: black;
  font-size: 26px;
  font-weight: bold;

`;

export const Subject = styled.Text`
  color: black;
  font-size: 18px;
  font-weight: bold;
  margin-top: 4px;
`;

export const Text = styled.Text`
  color: black;
  font-size: 16px;
  margin-top: 4px;
`;


export const Footer = styled.View`
  margin-top: 14px;
  align-items: center;
  bottom: 0px;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  margin-top: 16px;
`;

export const ContactButton = styled(RectButton)`
  height: 56px;
  background-color: #04d361;
  border-radius: 8px;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`;

export const ReportButton = styled(RectButton)`
  height: 56px;
  background-color: red;
  border-radius: 8px;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`;

export const ContactButtonText = styled.Text`
  color: #fff;
  font-family: 'RobotoSlab-Medium';
  font-size: 16px;
  margin-left: 16px;
`;

export const Provider = styled.View`
  background: #fff;
  border-radius: 4px;
  padding: 20px;
  flex: 1;
  margin: 60px 10px 20px;
`;

export const AvatarContainer = styled.View`
  background: #fff;
  border-radius: 4px;
  padding: 20px;
  margin: 0 10px 20px;
  align-items: center;
`;

export const Avatar = styled.Image`
width: 64px;
height: 64px;
border-radius: 25px;
background-color: #eee;
flex-direction: row;

`;
