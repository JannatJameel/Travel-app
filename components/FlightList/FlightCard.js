import React from "react";
import {
  Container,
  Content,
  Card,
  CardItem,
  Body,
  Text,
  Right,
  Left,
  TouchableOpacity,
} from "native-base";
import { Button } from "react-native";
const FlightCard = ({ flight, navigation }) => {
  console.log("FlightCard page", flight);

  //   const handelLink = () => {
  //     navigation.push("FlightSearch");
  //   };
  return (
    <Container>
      <Content>
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
              <Button
                onPress={() => navigation.navigate("ReturnFlights")}
                title="CLICKKK"
              />
            </Body>
            <Right>
              <Text>
                BD {flight.price} {"\n"}
                Per Traveller
              </Text>
            </Right>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
};

export default FlightCard;
