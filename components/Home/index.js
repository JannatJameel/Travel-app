import React from "react";
import {
  BottomStyling,
  ButtonStyled,
  HomeBackground,
  Title,
  TopStyling,
} from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../../store/actions/authActions";

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.user);
  return (
    <HomeBackground style={{ flex: 1, width: "100%", height: "100%" }}>
      <TopStyling>
        <Title>Welcome Traveller</Title>
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
