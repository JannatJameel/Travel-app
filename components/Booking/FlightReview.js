import { useSelector } from "react-redux";
import { checkout } from "../../store/actions/bookingActions";
import ReviewCard from "./ReviewCard";
//Styling
import { Container } from "native-base";
import { AuthButton, AuthButtonText } from "./styles";
import React, { useState } from "react";
import { View, StyleSheet, Button, Alert } from "react-native";

const FlightReview = ({ navigation }) => {
  const user = useSelector((state) => state.authReducer.user);
  const bookings = useSelector((state) => state.bookingReducer.bookings);
  const alertfunction = () =>
    Alert.alert("Book a flight", "", [
      {
        text: "Guest",
        onPress: () => navigation.navigate("TravellersForm"),
      },
      { text: "Signin", onPress: () => navigation.navigate("Signin") },
    ]);
  return (
    <Container>
      {bookings.map((flight) => (
        <ReviewCard flight={flight} key={flight.id} navigation={navigation} />
      ))}
      {user ? (
        <Button
          title={"Book a flight"}
          onPress={() => navigation.navigate("TravellersForm")}
        />
      ) : (
        <Button title={"Book a flight"} onPress={alertfunction} />
      )}
    </Container>
  );
};

export default FlightReview;
