import React from "react";
import { useSelector } from "react-redux";

// Styles
import {
  Container,
  Content,
  Form,
  Input,
  Item,
  Label,
  Title,
} from "native-base";
import { EditButton, EditButtonText } from "./styles";

const UserDetails = ({ navigation }) => {
  const profile = useSelector((state) => state.authReducer.profile);

  return (
    <Container>
      <Content>
        <Title>My Profile</Title>
        <Form>
          <Item stackedLabel>
            <Label>First Name</Label>
            <Input value={profile.firstName} disabled />
          </Item>
          <Item stackedLabel>
            <Label>Last Name</Label>
            <Input value={profile.lastName} disabled />
          </Item>
          <Item stackedLabel>
            <Label>User Name</Label>
            <Input value={profile.username} disabled />
          </Item>
          <Item stackedLabel>
            <Label>Email</Label>
            <Input value={profile.email} disabled />
          </Item>
        </Form>
      </Content>
      <EditButton onPress={() => navigation.navigate("UserForm")}>
        <EditButtonText>Edit Profile</EditButtonText>
      </EditButton>
      <EditButton onPress={() => navigation.navigate("FlightHistory")}>
        <EditButtonText>FlightHistory</EditButtonText>
      </EditButton>
    </Container>
  );
};

export default UserDetails;
