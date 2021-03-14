import React from "react";
import FlightCard from "./FlightCard";
import { useSelector } from "react-redux";
import Moment from "moment";

import { Body, Container, Title } from "native-base";
import { View, Text } from "react-native";

const ReturnFlights = ({ navigation }) => {
  const returnFlights = useSelector(
    (state) => state.flightReducer.returnFlights
  );
  console.log("return flight", returnFlights);
  const bookings = useSelector((state) => state.bookingReducer.bookings);

  if (returnFlights.length === 0) navigation.replace("FlightReview");
  // console.log("BOOKING", bookings);
  // const minTime =
  //   Date.parse([bookings[0].arrivalDate, bookings[0].arrivalTime].join(" ")) +
  //   7200000;
  // console.log("TIIIMEEEE", minTime);

  // const availableFlights = returnFlights.filter(
  //   (flight) =>
  //     Date.parse([flight.departureDate, flight.departureTime].join(" ")) >=
  //     minTime
  // );

  return (
    <Container>
      <Title>Return Flight</Title>
      {returnFlights.map((flight) => (
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
