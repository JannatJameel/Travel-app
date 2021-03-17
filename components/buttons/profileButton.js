import React from "react";
import { fetchProfile, userHistory } from "../../store/actions/authActions";
import { useSelector } from "react-redux";

// Styling
import { Button } from "native-base";
import { ProfileButtonStyled } from "./styles";
import { useDispatch } from "react-redux";

const ProfileButton = ({ navigation }) => {
  const user = useSelector((state) => state.authReducer.user);

  const dispatch = useDispatch();
  const handleProfile = () => {
    dispatch(fetchProfile());
    dispatch(userHistory());
    navigation.navigate("UserDetails");
  };
  return (
    <>
      {user && (
        <Button transparent>
          <ProfileButtonStyled
            type="FontAwesome5"
            name="user-astronaut"
            onPress={handleProfile}
          />
        </Button>
      )}
    </>
  );
};

export default ProfileButton;
