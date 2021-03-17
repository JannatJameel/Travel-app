import { CardItem, Text, Title } from "native-base";
import React from "react";
import { useSelector } from "react-redux";
import ReviewCard from "../Booking/ReviewCard";

//Styling

const FlightHistory = ({ navigation }) => {
  const history = useSelector((state) => state.authReducer.history);
  console.log(history);
  const flights = [];
  history.forEach((booking) =>
    booking.flights.forEach((flight) => flights.push(flight))
  );

  return (
    <>
      {flights.map((flight) => (
        <ReviewCard flight={flight} ket={flight.id} />
      ))}
    </>
  );
};

export default FlightHistory;
