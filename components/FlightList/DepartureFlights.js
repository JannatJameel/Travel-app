import React from "react";
import FlightCard from "./FlightCard";
import { useSelector } from "react-redux";

import { Body, Container, Title } from "native-base";
import { View, Text } from "react-native";

const DepartureFlights = ({ navigation }) => {
  const departureFlights = useSelector(
    (state) => state.flightReducer.departureFlights
  );
  return (
    <Container>
      {departureFlights.map((flight) => (
        <FlightCard flight={flight} key={flight.id} navigation={navigation} />
      ))}
    </Container>
  );
};

export default DepartureFlights;
