import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
// Components

const RootNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <NavigationContainer>
      <Navigator>
        <Screen />
      </Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
