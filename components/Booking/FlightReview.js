import React from "react";
import { useSelector } from "react-redux";

// Components
import ReviewCard from "./ReviewCard";

//Styling
import { Container } from "native-base";
import { Button, Alert } from "react-native";

const FlightReview = ({ navigation }) => {
  const bookings = useSelector((state) => state.bookingReducer.bookings);
  const alertfunction = () =>
    Alert.alert("Alert Title", "My Alert Msg", [
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
      <Button title={"2-Button Alert"} onPress={alertfunction} />
    </Container>
  );
};

export default FlightReview;
