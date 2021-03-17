import React from "react";
import { useDispatch, useSelector } from "react-redux";

// Store
import { signout } from "../../store/actions/authActions";

// Styling
import {
  BottomStyling,
  ButtonStyled,
  HomeBackground,
  Title,
  TopStyling,
} from "./styles";

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.user);
  return (
    <HomeBackground style={{ flex: 1, width: "100%", height: "100%" }}>
      <TopStyling>
        <Title>Welcome</Title>
      </TopStyling>
      <BottomStyling>
        <ButtonStyled onPress={() => navigation.navigate("FlightSearch")}>
          Book Flights
        </ButtonStyled>
        {user ? (
          <ButtonStyled onPress={() => dispatch(signout())}>
            Sign out
          </ButtonStyled>
        ) : (
          <ButtonStyled onPress={() => navigation.navigate("Signin")}>
            Sign in
          </ButtonStyled>
        )}
      </BottomStyling>
    </HomeBackground>
  );
};
export default Home;
