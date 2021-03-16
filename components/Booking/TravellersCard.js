import React, { useState } from "react";
import { Container, Content, Form, Item, Input, Title } from "native-base";
import { Alert, Text } from "react-native";
import { AuthButton, AuthButtonText } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { checkout } from "../../store/actions/bookingActions";

const TravellersCard = ({ navigation, traveller }) => {
  dispatch = useDispatch();
  const bookings = useSelector((state) => state.bookingReducer.bookings);
  const passengers = useSelector((state) => state.flightReducer.passengers);
  const flightClass = useSelector((state) => state.flightReducer.flightClass);

  const [passenger, setPassenger] = useState({
    firstName: "",
    lastName: "",
    passport: null,
  });
  console.log("PASS", passenger);
  const handleCheckout = () => {
    let cart = [];
    bookings.length === 2
      ? (cart = {
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
          passengers: [],
        })
      : (cart = {
          flights: [
            {
              flightId: bookings[0].id,
              flightClass: flightClass,
              passengers: passengers,
            },
          ],
          passengers: [],
        });
    dispatch(checkout(cart));
    // navigation.replace("/");
    Alert.alert("Thank you for booking with us!");
  };
  // console.log("CAAAARTTT PLZZZZ", cart);
  return (
    <Content>
      <Title>Traveller {traveller}</Title>
      <Form>
        <Item>
          <Input
            placeholder="First Name"
            onChangeText={(firstName) =>
              setPassenger({ ...passenger, firstName })
            }
          />
        </Item>
        <Item>
          <Input
            placeholder="Last Name"
            onChangeText={(lastName) =>
              setPassenger({ ...passenger, lastName })
            }
          />
        </Item>
        <Item last>
          <Input
            placeholder="Passport Number"
            onChangeText={(passport) =>
              setPassenger({ ...passenger, passport })
            }
          />
        </Item>
      </Form>
      <AuthButton onPress={handleCheckout}>
        <AuthButtonText>Next</AuthButtonText>
      </AuthButton>
    </Content>
  );
};

export default TravellersCard;
