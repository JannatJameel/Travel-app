import React from "react";
import { useSelector } from "react-redux";

//Styling
import { Card, CardItem, Text, Right, Left, Title } from "native-base";

const ReviewCard = ({ flight, navigation }) => {
  const flightClass = useSelector((state) => state.flightReducer.flightClass);

  return (
    <Card>
      <CardItem>
        <Left>
          <Text>
            {flight.departureTime} - {flight.arrivalTime} {"\n"}
            {flight.departureAirport.location} -{" "}
            {flight.arrivalAirport.location} {"\n"}
            {flight.airline.name}
          </Text>
        </Left>
        <Right>
          <Text>
            BD{" "}
            {flightClass === "economy"
              ? flight.priceEconomy
              : flight.priceBusiness}{" "}
            {"\n"}
            Per Traveller
          </Text>
        </Right>
      </CardItem>
    </Card>
  );
};

export default ReviewCard;
