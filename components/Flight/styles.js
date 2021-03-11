import styled from "styled-components/native";
import { Container, Header, Content, Form, Item, Picker } from "native-base";

export const AuthContainer = styled.View`
  flex: 1;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  background-color: #fefafb;
  padding-right: 60px;
  padding-left: 60px;
`;

export const AuthOther = styled.Text`
  color: black;
  margin-top: 15px;
`;

export const AuthTextInput = styled.TextInput`
  align-self: stretch;
  text-align: left;
  height: 40px;
  margin-bottom: 30px;
  color: black;
  border-bottom-color: black;
  border-bottom-width: 1px;
`;

export const PickerStyled = styled(Picker)`
  align-self: stretch;
  text-align: left;
  height: 40px;
  margin-bottom: 30px;
  color: black;
  border-bottom-color: black;
  border-bottom-width: 1px;
`;

export const AuthTitle = styled.Text`
  color: black;
  font-size: 24px;
  margin-bottom: 20px;
  border-bottom-color: black;
`;

export const AuthButton = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 20px;
  background-color: #6cb6c4;
  margin-top: 30px;
`;

export const AuthButtonText = styled.Text`
  color: black;
  font-weight: bold;
  font-size: 18px;
`;
export const TripButton = styled.Button`
marginLeft: 15,
marginRight: 15,
background: #3897f1,
borderRadius: 5,
height: 45,
marginTop: 10,
`;
