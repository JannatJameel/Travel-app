import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Store
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
  const bookings = useSelector((state) => state.bookingReducer.bookings);
  // const passenger = useSelector((state) => state.flightReducer.passengers);
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = () => {
    dispatch(signin(user, navigation));
    bookings.length > 0
      ? navigation.replace("TravellersForm")
      : navigation.replace("Home");
  };

  return (
    <AuthContainer>
      <AuthTitle>Sign in</AuthTitle>
      <AuthTextInput
        placeholder="Username"
        placeholderTextColor="black"
        autoCapitalize="none"
        onChangeText={(username) => setUser({ ...user, username: username })}
      />
      <AuthTextInput
        placeholder="Password"
        placeholderTextColor="black"
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
