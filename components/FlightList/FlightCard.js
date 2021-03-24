import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFlight } from "../../store/actions/bookingActions";
import { TouchableOpacity } from "react-native";
//Styling
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
    <TouchableOpacity onPress={handleAddFlight}>
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
          {/* <Body>
          <Button onPress={handleAddFlight} title="CLICKKK" />
        </Body> */}
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
    </TouchableOpacity>
  );
};

export default FlightCard;
