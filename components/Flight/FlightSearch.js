// import React in our code
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchDepartures, setSearch } from "../../store/actions/flightActions";
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
import { Header, Form, Item, Picker, Content, Container } from "native-base";

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
    dispatch(setSearch(flight));
    console.log("---------i am not empty-----", flight);
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
    <>
      <Container>
        <Content>
          <Form>
            {/* Buttons */}
            <View>
              <Button title="Round Trip" onPress={() => setRoundtrip(true)} />
              <Button title="One-way" onPress={() => setRoundtrip(false)} />
            </View>

            {/* Picker - Departure Airport  */}
            <Item picker>
              <Picker
                mode="dropdown"
                id="departureAirport"
                style={{ width: 400, margin: 5 }}
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
            <Item picker>
              <Picker
                id="arrivalAirports"
                mode="dropdown"
                style={{ width: 400, margin: 5 }}
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
            <Item picker>
              <Picker
                mode="dropdown"
                style={{ width: 400, margin: 5 }}
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
            <Text style={{ margin: 5, marginTop: 10 }}>
              Number of Passengers
            </Text>
            <View style={{ margin: 5 }}>
              <NumericInput
                rounded="true"
                minValue="0"
                maxValue="6"
                totalWidth={150}
                totalHeight={40}
                onChange={(passengers) => setFlight({ ...flight, passengers })}
              />
            </View>

            {/* Departure Date Picker */}
            <SafeAreaView style={styles.container}>
              <View style={styles.container}>
                <Text style={{ margin: 5 }}>Departure Date</Text>
                <DatePicker
                  style={styles.datePickerStyle}
                  date={flight.departureDate} //initial date from state
                  mode="date" //The enum of date, datetime and time
                  placeholder="select date"
                  format="YYYY-MM-DD"
                  minDate={new Date()}
                  maxDate="2021-12-31"
                  confirmBtnText="Confirm"
                  showIcon={false}
                  cancelBtnText="Cancel"
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
                  <Text style={{ margin: 5 }}>Return Date</Text>
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
                    showIcon={false}
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
      </Container>
    </>
  );
};

export default FlightSearch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    textAlign: "left",
    fontSize: 20,
    fontWeight: "bold",
    padding: 20,
  },
  datePickerStyle: {
    width: 380,
    marginTop: 5,
  },
});
