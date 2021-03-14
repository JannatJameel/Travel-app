import React from "react";
import { Container, Content, Form, Item, Input } from "native-base";
import { AuthButton, AuthButtonText } from "./styles";

const TravellersForm = ({ navigation }) => {
  return (
    <Container>
      <Content>
        <Form>
          <Item>
            <Input
              placeholder="First Name"
              onChangeText={(firstName) => this.setState({ firstName })}
            />
          </Item>
          <Item>
            <Input
              placeholder="Last Name"
              onChangeText={(lastName) => this.setState({ lastName })}
            />
          </Item>
          <Item>
            <Input
              placeholder="Phone Number"
              onChangeText={(phone) => this.setState({ phone })}
            />
          </Item>
          <Item last>
            <Input
              placeholder="Passport Number"
              onChangeText={(passport) => this.setState({ passport })}
            />
          </Item>
        </Form>
        <AuthButton onPress={() => navigation.navigate("Checkout")}>
          <AuthButtonText>Next</AuthButtonText>
        </AuthButton>
      </Content>
    </Container>
  );
};

export default TravellersForm;
