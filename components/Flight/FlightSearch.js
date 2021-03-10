// import React in our code
import React, { useState } from "react";

//import DatePicker from the package we installed
import DatePicker from "react-native-datepicker";

// Styling
import {
  AuthButton,
  AuthButtonText,
  AuthContainer,
  AuthOther,
  AuthTextInput,
  AuthTitle,
} from "./styles";
import {
  Container,
  Header,
  Form,
  Item,
  Picker,
  Title,
  Content,
} from "native-base";

// import all the components we are going to use
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Alert,
} from "react-native";

import NumericInput from "react-native-numeric-input";

const FlightSearch = ({ navigation }) => {
  //   const dispatch = useDispatch();
  const [roundtrip, setRoundtrip] = useState(false);

  const [flight, setFlight] = useState({
    departureAirport: "",
    arrivalAirport: "",
    departureDate: "",
    arrivalDate: "",
    flightClass: "",
    passengers: "",
  });

  console.log(flight);
  // console.log(roundtrip);

  const handleSubmit = () => {
    // dispatch(signup(user, navigation));
    console.log(flight);
  };

  return (
    <AuthContainer>
      {/* <AuthTitle>Search for a flight</AuthTitle> */}
      <Header />
      <Content>
        <Form>
          {/* Buttons */}
          <View>
            <Button title="Round Trip" onPress={() => setRoundtrip(true)} />
            <Button title="One-way" onPress={() => setRoundtrip(false)} />
          </View>

          {/* Picker - Departure Airport  */}
          <AuthOther>Departure Airport</AuthOther>
          <Item picker>
            <Picker
              mode="dropdown"
              // iosIcon={<Icon name="arrow-down" />}
              style={{ width: 50 }}
              placeholder="Select a value"
              // placeholderStyle={{ color: "#bfc6ea" }}
              // placeholderIconColor="#007aff"
              selectedValue={flight.departureAirport}
              onValueChange={(departureAirport) =>
                setFlight({ ...flight, departureAirport })
              }
            >
              <Picker.Item label="" value="" />
              <Picker.Item label="BH" value="BH" />
              <Picker.Item label="KSA" value="KSA" />
            </Picker>
          </Item>
          {/* Picker - Return Airport  */}
          <AuthOther>Return Airport</AuthOther>
          <Item picker>
            <Picker
              mode="dropdown"
              // iosIcon={<Icon name="arrow-down" />}
              style={{ width: 400 }}
              placeholder="Select a value"
              // placeholderStyle={{ color: "#bfc6ea" }}
              // placeholderIconColor="#007aff"
              selectedValue={flight.returnAirport}
              onValueChange={(returnAirport) =>
                setFlight({ ...flight, returnAirport })
              }
            >
              <Picker.Item label="" value="" />
              <Picker.Item label="BH" value="BH" />
              <Picker.Item label="KSA" value="KSA" />
            </Picker>
          </Item>

          {/* Picker - Flight Class  */}
          <AuthOther>Flight Class</AuthOther>
          <Item picker>
            <Picker
              mode="dropdown"
              // iosIcon={<Icon name="arrow-down" />}
              style={{ width: 400 }}
              placeholder="Select a value"
              // placeholderStyle={{ color: "#bfc6ea" }}
              // placeholderIconColor="#007aff"
              selectedValue={flight.flightClass}
              onValueChange={(flightClass) =>
                setFlight({ ...flight, flightClass })
              }
            >
              <Picker.Item label="Business" value="Business" />
              <Picker.Item label="Economy" value="Economy" />
            </Picker>
          </Item>

          {/* Picker - Passengers  */}

          {/* <NumericInput
            onChange={(passengers) => setFlight({ ...flight, passengers })}
          /> */}

          {/* Departure Date Picker */}
          <SafeAreaView style={styles.container}>
            <View style={styles.container}>
              <Text>Departure Date</Text>
              <DatePicker
                style={styles.datePickerStyle}
                date={flight.departureDate} //initial date from state
                mode="date" //The enum of date, datetime and time
                placeholder="select date"
                format="DD-MM-YYYY"
                minDate="10-03-2021"
                maxDate="31-12-2021"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    position: "absolute",
                    left: 0,
                    top: 4,
                    marginLeft: 0,
                  },
                  dateInput: {
                    marginLeft: 36,
                  },
                }}
                onDateChange={(departureDate) => {
                  setFlight({ ...flight, departureDate });
                }}
              />
            </View>
          </SafeAreaView>

          {/* Arrial Date Picker */}
          <SafeAreaView style={styles.container}>
            <View style={styles.container}>
              <Text>Arrial Date</Text>
              <DatePicker
                style={styles.datePickerStyle}
                date={flight.arrivalDate} //initial date from state
                mode="date" //The enum of date, datetime and time
                placeholder="select date"
                format="DD-MM-YYYY"
                minDate="10-03-2021"
                maxDate="31-12-2021"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    position: "absolute",
                    left: 0,
                    top: 4,
                    marginLeft: 0,
                  },
                  dateInput: {
                    marginLeft: 36,
                  },
                }}
                onDateChange={(arrivalDate) => {
                  setFlight({ ...flight, arrivalDate });
                }}
              />
            </View>
          </SafeAreaView>
        </Form>
      </Content>

      <AuthButton onPress={handleSubmit}>
        <AuthButtonText>Submit</AuthButtonText>
      </AuthButton>
      {/* <AuthOther onPress={() => navigation.navigate("Signin")}>
        Already have an account? Sign in!
      </AuthOther> */}
    </AuthContainer>
  );
};

export default FlightSearch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    padding: 20,
  },
  datePickerStyle: {
    width: 200,
    marginTop: 20,
  },
});
