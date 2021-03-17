import React from "react";
import { useDispatch, useSelector } from "react-redux";

// Store
import { addFlight } from "../../store/actions/bookingActions";

// Styling
import { Card, CardItem, Body, Text, Right, Left } from "native-base";
import { Button } from "react-native";

const FlightCard = ({ flight, navigation, isReturnFlight }) => {
  const dispatch = useDispatch();

  const flightClass = useSelector((state) => state.flightReducer.flightClass);

  const handleAddFlight = () => {
    const newFlight = { flightId: flight.id };
    dispatch(addFlight(flight));
    isReturnFlight
      ? navigation.push("FlightReview")
      : navigation.push("ReturnFlights");
  };

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
        <Body>
          {/* Will need to make the card clickable */}
          <Button onPress={handleAddFlight} title="CLICKKK" />
        </Body>
        <Right>
          <Text>
            BD{" "}
            {flightClass === "economy"
              ? flight.priceEconomy
              : flight.priceBusiness}
            {"\n"}
            Per Traveller
          </Text>
        </Right>
      </CardItem>
    </Card>
  );
};

export default FlightCard;
