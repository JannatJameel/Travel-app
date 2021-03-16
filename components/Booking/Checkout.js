import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { checkout } from "../../store/actions/bookingActions";
import CheckoutCard from "./CheckoutCard";
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

const Checkout = ({ flight, navigation }) => {
  const dispatch = useDispatch();
  const flightClass = useSelector((state) => state.flightReducer.flightClass);
  const passengers = useSelector((state) => state.flightReducer.passengers);

  const bookings = useSelector((state) => state.bookingReducer.bookings);

  console.log("FLIGHT!!!!!!!!", flight);
  // console.log("PAssenger", passengers);
  // console.log(flight.priceBusiness);
  // console.log(flight.priceEconomy);

  return (
    <Container>
      {bookings.map((flight) => (
        <CheckoutCard flight={flight} key={flight.id} navigation={navigation} />
      ))}
    </Container>
  );
};

export default Checkout;

// <Content>

// <Text>Trip Summary</Text>
// {/* <Text>
//   {flightClass === "economy"
//     ? flight.priceEconomy
//     : flight.priceBusiness}
// </Text> */}
// {/* Total */}
// <Card>
//   <CardItem>
//     <Left>
//       <Text>
//         Traveller 1 {"\n"}
//         BAH - KSA{"\n"}
//         KSA - BAH
//       </Text>
//     </Left>
//     <Right>
//       <Text>
//         {/* {"\n"}
//         {flightClass === "economy"
//           ? flight.priceEconomy
//           : flight.priceBusiness}
//         {"\n"}
//         {flightClass === "economy"
//           ? flight.priceEconomy
//           : flight.priceBusiness} */}
//       </Text>
//     </Right>
//   </CardItem>
// </Card>
// <AuthButton
//   onPress={() => Alert.alert("Thank you for booking with us!")}
// >
//   <AuthButtonText>Checkout</AuthButtonText>
// </AuthButton>
// </Content>
