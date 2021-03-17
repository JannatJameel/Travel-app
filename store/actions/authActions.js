import decode from "jwt-decode";
import instance from "./instance";
import * as types from "./types";
import AsyncStorage from "@react-native-async-storage/async-storage";

const setUser = (token) => {
  return async (dispatch) => {
    try {
      await AsyncStorage.setItem("myToken", token);
      instance.defaults.headers.common.Authorization = `Bearer ${token}`;
      dispatch({
        type: types.SET_USER,
        payload: decode(token),
      });
    } catch (error) {
      console.log("error:", error);
    }
  };
};

export const signin = (userData, navigation) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/signin", userData);
      dispatch(setUser(res.data.token));
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
      navigation.replace("Home");
      console.log(newUser);
    } catch (error) {
      console.log(error);
    }
  };
};

export const signout = () => {
  AsyncStorage.removeItem("myToken");
  delete instance.defaults.headers.common.Authorization;
  return {
    type: types.SET_USER,
    payload: null,
  };
};

export const fetchProfile = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/profile");
      dispatch({
        type: types.FETCH_PROFILE,
        payload: res.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const checkForToken = () => async (dispatch) => {
  const token = await AsyncStorage.getItem("myToken");
  if (token) {
    const user = decode(token);
    const currentTime = Date.now();
    if (currentTime <= user.exp) {
      dispatch(setUser(token));
    } else {
      AsyncStorage.removeItem("myToken");
      dispatch(signout());
    }
  }
};
