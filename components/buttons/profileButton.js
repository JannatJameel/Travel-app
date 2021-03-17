import React from "react";
// import { useSelector } from "react-redux";

// Styling
import { Button } from "native-base";
import { ProfileButtonStyled } from "./styles";

const ProfileButton = ({ navigation }) => {
  return (
    <Button transparent>
      <ProfileButtonStyled
        type="FontAwesome5"
        name="user-astronaut"
        onPress={() => navigation.navigate("UserDetails")}
      />
    </Button>
  );
};

export default ProfileButton;
