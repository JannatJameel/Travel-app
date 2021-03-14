import React from "react";

//Styling
import { Card, CardItem, Text, Right, Left } from "native-base";

const ReviewCard = ({ flight, navigation }) => {
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
            BD {flight.price} {"\n"}
            Per Traveller
          </Text>
        </Right>
      </CardItem>
    </Card>
  );
};

export default ReviewCard;
