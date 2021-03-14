import React from "react";
import FlightCard from "./FlightCard";
import { useSelector } from "react-redux";

//styling
import { Container, Title } from "native-base";
import { Text } from "react-native";

const DepartureFlights = ({ navigation }) => {
  const departureFlights = useSelector(
    (state) => state.flightReducer.departureFlights
  );
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
