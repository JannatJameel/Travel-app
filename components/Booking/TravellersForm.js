import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// Styling
import { Container, Title, Content, Form, Item, Input } from "native-base";
import { AuthButton, AuthButtonText } from "./styles";
import { setPassengersInfo } from "../../store/actions/bookingActions";

const TravellersForm = ({ navigation }) => {
  const dispatch = useDispatch();
  const passengersNum = useSelector((state) => state.flightReducer.passengers);

  const passenger = [];
  while (passenger.length < passengersNum) {
    passenger.push({});
  }

  const [passengers, setPassengers] = useState(passenger);
  const count = [];
  while (count.length < passengersNum) count.push(`${count.length + 1}`);

  const handleSubmit = () => {
    dispatch(setPassengersInfo(passengers));
    navigation.navigate("Checkout");
  };
  return (
    <Container>
      {count.map((traveller) => (
        <>
          <Content>
            <Title>Traveller {traveller}</Title>
            <Form>
              <Item>
                <Input
                  placeholder="First Name"
                  onChangeText={(firstName) => {
                    passengers[parseInt(traveller) - 1][
                      "firstName"
                    ] = firstName;
                    setPassengers(passengers);
                    console.log("testing passengers", passengers);
                  }}
                />
              </Item>
              <Item>
                <Input
                  placeholder="Last Name"
                  onChangeText={(lastName) => {
                    passengers[parseInt(traveller) - 1]["lastName"] = lastName;
                    setPassengers(passengers);
                    console.log("testing passengers", passengers);
                  }}
                />
              </Item>
              <Item last>
                <Input
                  placeholder="Passport Number"
                  onChangeText={(passport) => {
                    passengers[parseInt(traveller) - 1]["passport"] = parseInt(
                      passport
                    );
                    setPassengers(passengers);
                    console.log("testing passengers", passengers);
                  }}
                />
              </Item>
            </Form>
          </Content>
        </>
      ))}
      <AuthButton onPress={handleSubmit}>
        <AuthButtonText>Next</AuthButtonText>
      </AuthButton>
    </Container>
  );
};

export default TravellersForm;
