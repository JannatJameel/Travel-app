import React, { useState, useEffect } from "react";
import FlightCard from "./FlightCard";
import { useSelector } from "react-redux";
import { AuthButton, AuthButtonText } from "./styles";

//styling
import { Container } from "native-base";
import { Text } from "react-native";
import Filtering from "./Filtering";

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
      {/* <Filtering /> */}
      {departureFlights.map((flight) => (
        <FlightCard
          flight={flight}
          key={flight.id}
          isReturnFlight={false}
          navigation={navigation}
        />
      ))}
      <AuthButton onPress={() => navigation.navigate("FilterSearch")}>
        <AuthButtonText>filter</AuthButtonText>
      </AuthButton>
    </Container>
  );
};

export default DepartureFlights;
