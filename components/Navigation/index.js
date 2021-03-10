import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

// Components
import Signin from "../authentication/Signin";
import Signup from "../authentication/Signup";
import FlightSearch from "../Flight/FlightSearch";

const RootNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <NavigationContainer initialRouteName="FlightSearch">
      <Navigator>
        <Screen name="FlightSearch" component={FlightSearch} />
        <Screen name="Signin" component={Signin} />
        <Screen name="Signup" component={Signup} />
      </Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
