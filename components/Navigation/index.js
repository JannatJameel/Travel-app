import React from "react";
import { useSelector } from "react-redux";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

// Components
import Signin from "../authentication/Signin";
import Signup from "../authentication/Signup";
import FlightSearch from "../Flight/FlightSearch";
import DepartureFlights from "../FlightList/DepartureFlights";
import ReturnFlights from "../FlightList/ReturnFlights";
import FlightReview from "../Booking/FlightReview";
import TravellersForm from "../Booking/TravellersForm";
import Checkout from "../Booking/Checkout";
import Home from "../Home";
import ProfileButton from "../buttons/profileButton";
import UserDetails from "../UserProfile/UserDetails";

const RootNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();
  // const user = useSelector((state) => state.authReducer.user);
  return (
    <NavigationContainer initialRouteName="Home">
      <Navigator>
        <Screen
          name="Home"
          component={Home}
          options={({ navigation }) => ({
            headerRight: () => <ProfileButton navigation={navigation} />,
          })}
        />
        <Screen name="UserDetails" component={UserDetails} />
        <Screen name="Signin" component={Signin} />
        <Screen name="FlightSearch" component={FlightSearch} />
        <Screen name="TravellersForm" component={TravellersForm} />
        <Screen name="Checkout" component={Checkout} />
        <Screen name="FlightReview" component={FlightReview} />
        <Screen name="ReturnFlights" component={ReturnFlights} />
        <Screen name="DepartureFlights" component={DepartureFlights} />
        <Screen name="Signup" component={Signup} />
      </Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
