import React from "react";
import { useSelector } from "react-redux";

//Styling
import {
  Card,
  CardItem,
  Text,
  Right,
  Left,
  Title,
  Container,
  Body,
} from "native-base";

const ReviewCard = ({ flight, navigation }) => {
  const flightClass = useSelector((state) => state.flightReducer.flightClass);
  const passengers = useSelector((state) => state.flightReducer.passengers);
  console.log("------", flight);
  return (
    <CardItem>
      <Left>
        <Text>
          {flight.departureAirport.location} - {flight.arrivalAirport.location}{" "}
        </Text>
      </Left>
      <Body>
        <Text>{flight.departureDate}</Text>
      </Body>
      <Right>
        <Text>
          BD{" "}
          {flightClass === "economy"
            ? flight.priceEconomy
            : flight.priceBusiness}
        </Text>
      </Right>
    </CardItem>
  );
};

export default ReviewCard;
