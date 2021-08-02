//React
import React, { useState } from "react";
//react native
import {
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
//redux
import { useDispatch, useSelector } from "react-redux";
//navigation
import { FRIENDLIST } from "../Navigation/types";
import * as ImagePicker from "expo-image-picker";
import { updateUser } from "../../store/actions/authActions";

const Profile = ({ navigation }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.user);
  const [userProfile, setUserProfile] = useState({
    username: user.username,
    fullname: user.fullname,
    currentpassword: "",
    password: "",
  });
  const [image, setImage] = useState(null);
  const [passwordError, setPasswordError] = useState("");
  const [nameError, setNameError] = useState("");

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const handleSubmit = () => {
    dispatch(updateUser(userProfile, user, setNameError, setPasswordError));
  };
  return (
    <View style={styles.topView}>
      <View style={styles.profile}>
        <Text
          onPress={() => navigation.navigate(FRIENDLIST)}
          style={styles.textOne}
        >
          Cancel
        </Text>
        <Text style={styles.textTwo}>Profile</Text>
        <Text onPress={handleSubmit} style={styles.textThree}>
          Save
        </Text>
      </View>
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <Image
            style={styles.image}
            source={{
              uri: image,
            }}
          />
          <Text onPress={pickImage} style={styles.editText}>
            Edit
          </Text>
          <Text style={styles.text}>Username</Text>
          <TextInput
            value={userProfile.username}
            style={styles.input}
            placeholderTextColor="white"
            placeholder={user.username}
            onChangeText={(username) =>
              setUserProfile({ ...userProfile, username })
            }
          />
          {nameError ? <Text>User name already exist!</Text> : <View />}
          <Text style={styles.text}>Full Name</Text>
          <TextInput
            value={userProfile.fullname}
            style={styles.input}
            placeholderTextColor="white"
            placeholder={user.fullname}
            onChangeText={(fullname) =>
              setUserProfile({ ...userProfile, fullname })
            }
          />
          <Text style={styles.text}>Current Password</Text>

          <TextInput
            style={styles.input}
            placeholderTextColor="white"
            placeholder={"Current Password"}
            onChangeText={(currentpassword) =>
              setUserProfile({ ...userProfile, currentpassword })
            }
          />
          {passwordError ? (
            <Text style={styles.textRed}>Invalid password!</Text>
          ) : (
            <View />
          )}

          <Text style={styles.text}>New Password</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor="white"
            placeholder={"New password"}
          />
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  topView: {
    borderWidth: 1,
    backgroundColor: "black",
    flex: 1,
  },
  profile: {
    borderWidth: 0.4,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomColor: "gray",
    width: "100%",
    height: 80,
    marginTop: "6%",
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    color: "white",
    fontSize: 16,
    alignSelf: "flex-start",
    marginTop: 15,
    marginLeft: -1,
  },
  textOne: {
    color: "white",
    fontSize: 17,
    paddingLeft: "2%",
  },
  textTwo: {
    color: "white",
    fontSize: 20,
    paddingLeft: "27%",
  },
  textThree: {
    color: "#BE8A5A",
    fontSize: 17,
    paddingLeft: "28%",
  },
  image: {
    height: 120,
    width: 120,
    borderRadius: 100,
    marginTop: 10,
    marginBottom: 10,
    alignSelf: "center",
  },
  container: {
    padding: 15,
  },
  box: {
    marginTop: 20,
    height: 415,
  },
  input: {
    marginTop: 10,
    alignItems: "center",
    width: "100%",
    height: 45,
    borderWidth: 0.4,
    borderRadius: 10,
    borderColor: "gray",
    paddingLeft: 10,
    color: "white",
  },
  editText: {
    alignSelf: "center",
    color: "#BE8A5A",
    fontSize: 15,
  },
  textRed: {
    color: "red",
    // marginLeft: 20,
    // marginTop: 5,
  },
});
