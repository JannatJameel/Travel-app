import React from "react";
import { useSelector } from "react-redux";
import ReviewCard from "./ReviewCard";
//Styling
import { Container, Content } from "native-base";
import { Button, Alert } from "react-native";
import { AuthButton, AuthButtonText } from "./styles";

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
      <Content>
        {bookings.map((flight) => (
          <ReviewCard flight={flight} key={flight.id} navigation={navigation} />
        ))}
      </Content>
      {user ? (
        <AuthButton onPress={() => navigation.navigate("TravellersForm")}>
          <AuthButtonText>Book a flight</AuthButtonText>
        </AuthButton>
      ) : (
        <AuthButton onPress={alertfunction}>
          <AuthButtonText>Book a flight</AuthButtonText>
        </AuthButton>
      )}
    </Container>
  );
};

export default FlightReview;
