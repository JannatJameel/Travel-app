import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import instance from "./instance";
import * as types from "./types";

export const searchDepartures = (flight, navigation) => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/flights/departures", { params: flight });
      if (res.data.length === 0) {
        navigation.navigate("FlightSearch");
        Alert.alert("No flights found try another search.");
      }
      await AsyncStorage.setItem(
        "passengers",
        JSON.stringify(flight.passengers)
      );
      await AsyncStorage.setItem(
        "flightClass",
        JSON.stringify(flight.flightClass)
      );
      console.log("Departure", res.data);
      dispatch({
        type: types.FETCH_DEPARTURES,
        payload: res.data,
      });
    } catch (error) {
      console.log("error:", error);
    }
  };
};

export const searchReturns = (flight) => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/flights/returns", { params: flight });
      // console.log("Return", res.data);
      dispatch({
        type: types.FETCH_RETURNS,
        payload: res.data,
      });
    } catch (error) {
      console.log("error:", error);
    }
  };
};

export const fetchAirports = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/flights/airports");
      dispatch({
        type: types.FETCH_AIRPORTS,
        payload: res.data,
      });
    } catch (error) {
      console.log("error:", error);
    }
  };
};

export const setPassengers = () => {
  return async (dispatch) => {
    try {
      const passengers = await AsyncStorage.getItem("passengers");
      dispatch({
        type: types.SET_PASSENGER,
        payload: JSON.parse(passengers),
      });
    } catch (error) {
      console.log("error:", error);
    }
  };
};

export const setClass = () => {
  return async (dispatch) => {
    try {
      const flightClass = await AsyncStorage.getItem("flightClass");
      dispatch({
        type: types.SET_CLASS,
        payload: JSON.parse(flightClass),
      });
    } catch (error) {
      console.log("error:", error);
    }
  };
};
