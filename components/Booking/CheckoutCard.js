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

  return (
    <CardItem>
      <Left>
        <Text>Traveller</Text>
      </Left>
      <Body>
        <Text>
          {flight.departureAirport.location} - {flight.arrivalAirport.location}{" "}
        </Text>
      </Body>
      <Right>
        <Text>
          BD{" "}
          {flightClass === "economy"
            ? flight.priceEconomy
            : flight.priceBusiness}
          {"\n"}
        </Text>
      </Right>
    </CardItem>
  );
};

export default ReviewCard;
