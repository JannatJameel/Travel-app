import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Styles
import {
  Container,
  Content,
  Form,
  Input,
  Item,
  Label,
  Title,
} from "native-base";
import { EditButton, EditButtonText } from "./styles";
import { updateProfile } from "../../store/actions/authActions";

const UserForm = ({ navigation }) => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.authReducer.profile);
  const [userProfile, setUserProfile] = useState(profile);

  const handleSubmit = () => {
    dispatch(updateProfile(userProfile, navigation));
    navigation.goBack();
  };

  return (
    <Container>
      <Content>
        <Title>My Profile</Title>
        <Form>
          <Item stackedLabel>
            <Label>First Name</Label>
            <Input
              value={userProfile.firstName}
              onChangeText={(firstName) =>
                setUserProfile({ ...userProfile, firstName })
              }
            />
          </Item>
          <Item stackedLabel>
            <Label>Last Name</Label>
            <Input
              value={userProfile.lastName}
              onChangeText={(lastName) =>
                setUserProfile({ ...userProfile, lastName })
              }
            />
          </Item>
          <Item stackedLabel>
            <Label>User Name</Label>
            <Input
              value={userProfile.username}
              onChangeText={(username) =>
                setUserProfile({ ...userProfile, username })
              }
            />
          </Item>
          <Item stackedLabel>
            <Label>Email</Label>
            <Input
              value={userProfile.email}
              onChangeText={(email) =>
                setUserProfile({ ...userProfile, email })
              }
            />
          </Item>
        </Form>
      </Content>
      <EditButton onPress={handleSubmit}>
        <EditButtonText>Update</EditButtonText>
      </EditButton>
    </Container>
  );
};

export default UserForm;
