import React, { useState, useEffect } from "react";
import FlightCard from "./FlightCard";
import { useSelector } from "react-redux";
import { AuthButton, AuthButtonText } from "./styles";

//styling
import { Container, Content } from "native-base";
import { Text } from "react-native";

const DepartureFlights = ({ navigation }) => {
  const departureFlights = useSelector(
    (state) => state.flightReducer.departureFlights
  );

  return (
    <>
      <Container>
        <Content>
          {departureFlights.map((flight) => (
            <FlightCard
              flight={flight}
              key={flight.id}
              isReturnFlight={false}
              navigation={navigation}
            />
          ))}
        </Content>
        <AuthButton onPress={() => navigation.navigate("FilterSearch")}>
          <AuthButtonText>filter</AuthButtonText>
        </AuthButton>
      </Container>
    </>
  );
};

export default DepartureFlights;
