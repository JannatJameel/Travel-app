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

const UserDetails = () => {
  const profile = useSelector((state) => state.userReducer.profile);
  console.log(profile);

  return (
    <Container>
      <Content>
        <Title>My Profile</Title>
        <Form>
          <Item stackedLabel>
            <Label>First Name</Label>
            <Input value="Hajar" disabled />
          </Item>
          <Item stackedLabel>
            <Label>Last Name</Label>
            <Input value="AlGhannami" disabled />
          </Item>
          <Item stackedLabel>
            <Label>User Name</Label>
            <Input value="hajar1" disabled />
          </Item>
          <Item stackedLabel>
            <Label>Email</Label>
            <Input value="hajar@gmail.com" disabled />
          </Item>
        </Form>
      </Content>
      <EditButton>
        <EditButtonText>Edit Profile</EditButtonText>
      </EditButton>
    </Container>
  );
};

export default UserDetails;
