import React from "react";
import FlightCard from "./FlightCard";
import { useSelector } from "react-redux";

import { Body, Container, Title } from "native-base";
import { View, Text } from "react-native";

const ReturnFlights = ({ navigation }) => {
  const returnFlights = useSelector(
    (state) => state.flightReducer.returnFlights
  );
  console.log("AY SHEE", returnFlights);
  return (
    <Container>
      <Title>Return Flight</Title>
      {returnFlights.map((flight) => (
        <FlightCard flight={flight} key={flight.id} navigation={navigation} />
      ))}
    </Container>
  );
};

export default ReturnFlights;
