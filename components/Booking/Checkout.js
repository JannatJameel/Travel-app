import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { checkout } from "../../store/actions/bookingActions";
//Styling
import {
  Container,
  Content,
  Text,
  Card,
  CardItem,
  Right,
  Left,
} from "native-base";

import { AuthButton, AuthButtonText } from "./styles";
import { Alert } from "react-native";

const Booking = () => {
  const dispatch = useDispatch();

  const bookings = useSelector((state) => state.bookingReducer.bookings);

  const handleCheckout = () => {
    const cart = [
      {
        flightId: bookings[0].id,
        passengers: localStorage.getItem("passengers"),
      },
      {
        flightId: bookings[1].id,
        passengers: localStorage.getItem("passengers"),
      },
    ];
    dispatch(checkout(cart));
  };

  return (
    <Container>
      <Content>
        <Text>Trip Summary</Text>
        {/* Total */}
        <Card>
          <CardItem>
            <Left>
              <Text>
                Traveller 1 {"\n"}
                BAH - KSA{"\n"}
                KSA - BAH
              </Text>
            </Left>
            <Right>
              <Text>
                {"\n"}
                BD 300 {"\n"}
                BD 300
              </Text>
            </Right>
          </CardItem>
        </Card>
        <AuthButton
          onPress={() => Alert.alert("Thank you for booking with us!")}
        >
          <AuthButtonText>Checkout</AuthButtonText>
        </AuthButton>
      </Content>
    </Container>
  );
};

export default Booking;
