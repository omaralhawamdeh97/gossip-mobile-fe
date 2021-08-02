//React
import React, { useState } from "react";

//Redux
import { useDispatch } from "react-redux";

//Styling
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TextInput,
} from "react-native";
import { Button } from "native-base";
//Navigation
import { SIGNUP } from "../Navigation/types";
//Store
import { signin } from "../../store/actions/authActions";

const Signin = ({ navigation }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = () => {
    dispatch(signin(user, navigation, setError));
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={{
          uri: "https://images.unsplash.com/photo-1508615039623-a25605d2b022?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        }}
      >
        <View>
          <Text style={styles.topText}>Sign In</Text>
        </View>
        <View style={styles.box}>
          <TextInput
            style={styles.inputOne}
            placeholder="  Username"
            onChangeText={(username) => setUser({ ...user, username })}
          />

          <TextInput
            style={styles.input}
            placeholder="  Password"
            secureTextEntry={true}
            onChangeText={(password) => setUser({ ...user, password })}
          />
          {error ? (
            <Text style={styles.textRed}>Invalid username and password!</Text>
          ) : (
            <View />
          )}

          <Button onPress={handleSubmit} style={styles.button}>
            Signin
          </Button>
          <View style={styles.bottomView}>
            <Text>Don't have an account!</Text>
            <Text
              style={styles.bottomText}
              onPress={() => navigation.navigate(SIGNUP)}
            >
              Sign Up
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
export default Signin;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    width: "90%",
    height: "55%",
    borderWidth: 1,
    borderRadius: 30,
    shadowOpacity: (0, 1, 1, 0.1),
    borderColor: "gray",
  },
  container: {
    flex: 1,
  },
  inputOne: {
    height: 50,
    width: "90%",
    backgroundColor: "#C4C4C4",
    borderRadius: 5,
    marginTop: 50,
    alignSelf: "center",
    opacity: 0.9,
    paddingLeft: 10,
  },
  input: {
    height: 50,
    width: "90%",
    backgroundColor: "#C4C4C4",
    borderRadius: 5,
    marginTop: 20,
    alignSelf: "center",
    opacity: 0.9,
    paddingLeft: 10,
  },

  button: {
    backgroundColor: "#5B5B5B",
    borderRadius: 8,
    height: 50,
    width: 310,
    alignSelf: "center",
    marginTop: 30,
  },
  topText: {
    paddingBottom: 65,
    fontSize: 35,
    color: "white",
  },
  textRed: {
    color: "red",
    marginLeft: 20,
    marginTop: 5,
  },
  bottomView: {
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 60,
    alignItems: "center",
  },
  bottomText: {
    fontSize: 15,
    color: "white",
    marginLeft: 5,
  },
});
