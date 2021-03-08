import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signin } from "../../store/actions/authActions";

// Styling
import {
  AuthButton,
  AuthButtonText,
  AuthContainer,
  AuthOther,
  AuthTextInput,
  AuthTitle,
} from "./styles";

const Signin = ({ navigation }) => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = () => {
    dispatch(signin(user, navigation));
  };

  return (
    <AuthContainer>
      <AuthTitle>Sign in</AuthTitle>
      <AuthTextInput
        placeholder="Username"
        placeholderTextColor="#ff85a2"
        autoCapitalize="none"
        onChangeText={(username) => setUser({ ...user, username: username })}
      />
      <AuthTextInput
        placeholder="Password"
        placeholderTextColor="#ff85a2"
        secureTextEntry={true}
        onChangeText={(password) => setUser({ ...user, password })}
      />
      <AuthButton onPress={handleSubmit}>
        <AuthButtonText>Sign in</AuthButtonText>
      </AuthButton>
      <AuthOther onPress={() => navigation.navigate("Signup")}>
        Press here to create an account
      </AuthOther>
    </AuthContainer>
  );
};

export default Signin;
