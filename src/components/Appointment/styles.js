import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  margin-bottom: 15px;
  padding: 20px;
  border-radius: 4px;
  background: #fff;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  opacity: ${props => (props.past ? 0.6 : 1)};
`;

export const Left = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

export const Info = styled.View`
  margin-left: 15px;
`;

export const Name = styled.Text`
  font-weight: bold;
  font-size: 15px;
  color: #333;
`;

export const Time = styled.Text`
  color: #999;
  font-size: 13px;
  margin-top: 4px;
`;

export const ContactButton = styled(RectButton)`
  height: 28px;
  width: 160px;
  background-color: #04d361;
  border-radius: 8px;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  margin-top: 8px
`;

export const ContactButtonText = styled.Text`
  color: #fff;
  font-family: 'RobotoSlab-Medium';
  font-size: 16px;
  margin-left: 5px;
  margin-bottom: 2px;
`;
