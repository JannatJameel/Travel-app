import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../../store/actions/authActions";

// Styling
import {
  AuthButton,
  AuthButtonText,
  AuthContainer,
  AuthOther,
  AuthTextInput,
  AuthTitle,
} from "./styles";

const Signup = ({ navigation }) => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    firstName: "",
    lastName: "",
  });
  const handleSubmit = () => {
    dispatch(signup(user, navigation));
  };
  return (
    <AuthContainer>
      <AuthTitle>Sign up</AuthTitle>
      <AuthTextInput
        placeholder="Username"
        placeholderTextColor="black"
        autoCapitalize="none"
        onChangeText={(username) => setUser({ ...user, username })}
      />
      <AuthTextInput
        placeholder="Password"
        placeholderTextColor="black"
        secureTextEntry={true}
        onChangeText={(password) => setUser({ ...user, password })}
      />
      <AuthTextInput
        placeholder="Email"
        placeholderTextColor="black"
        autoCapitalize="none"
        onChangeText={(email) => setUser({ ...user, email })}
      />
      <AuthTextInput
        placeholder="First Name"
        placeholderTextColor="black"
        autoCapitalize="none"
        onChangeText={(firstName) => setUser({ ...user, firstName })}
      />
      <AuthTextInput
        placeholder="Last Name"
        placeholderTextColor="black"
        autoCapitalize="none"
        onChangeText={(lastName) => setUser({ ...user, lastName })}
      />
      <AuthButton onPress={handleSubmit}>
        <AuthButtonText>Sign up</AuthButtonText>
      </AuthButton>
      <AuthOther onPress={() => navigation.navigate("Signin")}>
        Already have an account? Sign in!
      </AuthOther>
    </AuthContainer>
  );
};

export default Signup;
