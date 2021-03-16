import React, { useState, useEffect } from "react";
import FlightCard from "./FlightCard";
import { useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

//styling
import { Container } from "native-base";
import { Alert, Text } from "react-native";

const DepartureFlights = ({ navigation }) => {
  const departureFlights = useSelector(
    (state) => state.flightReducer.departureFlights
  );
  const passengers = useSelector((state) => state.flightReducer.passengers);
  const flightClass = useSelector((state) => state.flightReducer.flightClass);
  console.log("PASSENGERS", passengers);
  console.log("CLASSS", flightClass);

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
