import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

// Components
import Signin from "../authentication/Signin";
import Signup from "../authentication/Signup";

const RootNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <NavigationContainer initialRouteName="Signin">
      <Navigator>
        <Screen name="Signin" component={Signin} />
        <Screen name="Signup" component={Signup} />
      </Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
