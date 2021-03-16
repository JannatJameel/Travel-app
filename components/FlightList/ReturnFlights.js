import React from "react";
import FlightCard from "./FlightCard";
import { useSelector } from "react-redux";

import { Body, Container, Title } from "native-base";
import { View, Text } from "react-native";

const ReturnFlights = ({ navigation }) => {
  const returnFlights = useSelector(
    (state) => state.flightReducer.returnFlights
  );
  const bookings = useSelector((state) => state.bookingReducer.bookings);

  if (returnFlights.length === 0) navigation.replace("FlightReview");
  const minTime =
    new Date(
      [bookings[0].arrivalDate, bookings[0].arrivalTime].join("T")
    ).valueOf() + 7200000;

  console.log(
    "TIIIMEEEE",
    new Date([bookings[0].arrivalDate, bookings[0].arrivalTime].join("T"))
  );

  const availableFlights = returnFlights.filter(
    (flight) =>
      new Date(
        [flight.departureDate, flight.departureTime].join("T")
      ).valueOf() >= minTime
  );
  console.log("AVAILABLE", availableFlights);

  return (
    <Container>
      <Title>Return Flight</Title>
      {availableFlights.map((flight) => (
        <FlightCard
          flight={flight}
          key={flight.id}
          isReturnFlight={true}
          navigation={navigation}
        />
      ))}
    </Container>
  );
};

export default ReturnFlights;
