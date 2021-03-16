// import React in our code
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchDepartures } from "../../store/actions/flightActions";
import {
  searchReturns,
  setPassengers,
  setClass,
} from "../../store/actions/flightActions";
import AsyncStorage from "@react-native-async-storage/async-storage";

//import DatePicker from the package we installed
import DatePicker from "react-native-datepicker";

// Styling
import { AuthButton, AuthButtonText, AuthContainer, AuthOther } from "./styles";
import { Header, Form, Item, Picker, Content } from "native-base";

// import all the components we are going to use
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";

import NumericInput from "react-native-numeric-input";

const FlightSearch = ({ navigation }) => {
  const [roundtrip, setRoundtrip] = useState(false);
  const dispatch = useDispatch();

  const [flight, setFlight] = useState(
    roundtrip
      ? {
          departureAirport: "",
          arrivalAirport: "",
          departureDate: "",
          returnDate: "",
          passengers: "",
          flightClass: "",
        }
      : {
          departureAirport: "",
          arrivalAirport: "",
          departureDate: "",
          passengers: "",
          flightClass: "",
        }
  );

  // console.log(roundtrip);

  const allAirports = useSelector((state) => state.flightReducer.airports);
  const departureAirports = allAirports.map((airport) => airport.location);
  const arrivalAirports = departureAirports.filter(
    (airport) => airport !== flight.departureAirport
  );

  const handleSubmit = async () => {
    dispatch(searchDepartures(flight, navigation));
    dispatch(setClass());
    dispatch(setPassengers());
    if (roundtrip) dispatch(searchReturns(flight));
    try {
      navigation.push("DepartureFlights");
    } catch (error) {
      console.log(error);
    }
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
              id="departureAirport"
              style={{ width: 400 }}
              placeholder="Departure Airport"
              selectedValue={flight.departureAirport}
              onValueChange={(departureAirport) =>
                setFlight({ ...flight, departureAirport })
              }
            >
              {departureAirports.map((airport) => (
                <Picker.Item label={airport} value={airport} key={airport} />
              ))}
            </Picker>
          </Item>
          {/* Picker - Return Airport  */}
          <AuthOther>Arrial Airport</AuthOther>
          <Item picker>
            <Picker
              id="arrivalAirports"
              mode="dropdown"
              style={{ width: 400 }}
              placeholder="Arrial Airport"
              selectedValue={flight.arrivalAirport}
              onValueChange={(arrivalAirport) =>
                setFlight({ ...flight, arrivalAirport })
              }
            >
              {arrivalAirports.map((airport) => (
                <Picker.Item label={airport} value={airport} key={airport} />
              ))}
            </Picker>
          </Item>

          {/* Picker - Flight Class  */}
          <AuthOther>Flight Class</AuthOther>
          <Item picker>
            <Picker
              mode="dropdown"
              style={{ width: 400 }}
              placeholder="Flight Class"
              selectedValue={flight.flightClass}
              onValueChange={(flightClass) =>
                setFlight({ ...flight, flightClass })
              }
            >
              <Picker.Item label="Business" value="business" />
              <Picker.Item label="Economy" value="economy" />
            </Picker>
          </Item>

          {/* Picker - Passengers  */}
          <AuthOther>Number of Passengers</AuthOther>
          <NumericInput
            rounded="true"
            minValue="0"
            maxValue="6"
            onChange={(passengers) => setFlight({ ...flight, passengers })}
          />

          {/* Departure Date Picker */}
          <SafeAreaView style={styles.container}>
            <View style={styles.container}>
              <Text>Departure Date</Text>
              <DatePicker
                style={styles.datePickerStyle}
                date={flight.departureDate} //initial date from state
                mode="date" //The enum of date, datetime and time
                placeholder="select date"
                format="YYYY-MM-DD"
                minDate={new Date()}
                maxDate="2021-12-31"
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

          {/* Return Date Picker */}
          {roundtrip && (
            <SafeAreaView style={styles.container}>
              <View style={styles.container}>
                <Text>Return Date</Text>
                <DatePicker
                  style={styles.datePickerStyle}
                  date={flight.returnDate} //initial date from state
                  mode="date" //The enum of date, datetime and time
                  placeholder="select date"
                  format="YYYY-MM-DD"
                  minDate={new Date()}
                  maxDate="2021-12-31"
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
                  onDateChange={(returnDate) => {
                    setFlight({ ...flight, returnDate });
                  }}
                />
              </View>
            </SafeAreaView>
          )}
        </Form>
      </Content>

      <AuthButton onPress={handleSubmit}>
        <AuthButtonText>Search</AuthButtonText>
      </AuthButton>
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
    width: 250,
    marginTop: 10,
  },
});
