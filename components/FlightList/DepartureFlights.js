import React, { useState, useEffect } from "react";
import FlightCard from "./FlightCard";
import { useSelector } from "react-redux";

//styling
import { Container } from "native-base";
import { Text } from "react-native";

const DepartureFlights = ({ navigation }) => {
  const departureFlights = useSelector(
    (state) => state.flightReducer.departureFlights
  );

  // if (departureFlights.length === 0) {
  //   Alert.alert("No flights found try another search.");
  //   // navigation.replace("Home");
  // }
  return (
    <Container>
      <Text>Departure Flights</Text>
      {departureFlights.map((flight) => (
        <FlightCard
          flight={flight}
          key={flight.id}
          isReturnFlight={false}
          navigation={navigation}
        />
      ))}
    </Container>
  );
};

export default DepartureFlights;
