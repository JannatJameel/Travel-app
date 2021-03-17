import React from "react";
import { useSelector, useDispatch } from "react-redux";

// Store
import { checkout } from "../../store/actions/bookingActions";

// Components
import CheckoutCard from "./CheckoutCard";

//Styling
import { Container, Text, Button } from "native-base";
import { Alert } from "react-native";

const Checkout = ({ navigation }) => {
  const dispatch = useDispatch();
  const flightClass = useSelector((state) => state.flightReducer.flightClass);
  const passengers = useSelector((state) => state.flightReducer.passengers);
  const passengerInfo = useSelector((state) => state.bookingReducer.passengers);
  const bookings = useSelector((state) => state.bookingReducer.bookings);
  const token = useSelector((state) => state.authReducer.user);

  let userId = null;
  if (token !== null) userId = token.id;

  const handleCheckout = () => {
    let cart = [];
    bookings.length === 2
      ? (cart = {
          user: userId,
          flights: [
            {
              flightId: bookings[0].id,
              flightClass: flightClass,
              passengers: passengers,
            },
            {
              flightId: bookings[1].id,
              flightClass: flightClass,
              passengers: passengers,
            },
          ],
          passengers: passengerInfo,
        })
      : (cart = {
          user: userId,
          flights: [
            {
              flightId: bookings[0].id,
              flightClass: flightClass,
              passengers: passengers,
            },
          ],
          passengers: passengerInfo,
        });
    dispatch(checkout(cart));
    navigation.replace("Home");
    Alert.alert("Thank you for booking with us!");
  };
  return (
    <Container>
      {bookings.map((flight) => (
        <CheckoutCard flight={flight} key={flight.id} navigation={navigation} />
      ))}
      <Button onPress={handleCheckout}>
        <Text>hiii</Text>
      </Button>
    </Container>
  );
};

export default Checkout;
