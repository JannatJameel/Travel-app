import decode from "jwt-decode";
import instance from "./instance";
import * as types from "./types";
import AsyncStorage from "@react-native-async-storage/async-storage";

const setUser = (token) => {
  // Add async dispatch and await for AsyncStorage
  AsyncStorage.setItem("myToken", token);
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  return {
    type: types.SET_USER,
    payload: decode(token),
  };
};

export const signin = (userData, navigation) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/signin", userData);
      dispatch(setUser(res.data.token));
      // navigation.goBack();
      console.log("Success!");
    } catch (error) {
      console.log(error);
    }
  };
};

export const signup = (newUser, navigation) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/signup", newUser);
      dispatch(setUser(res.data.token));
      // navigation.replace("CartList");
      console.log(newUser);
    } catch (error) {
      console.log(error);
    }
  };
};
