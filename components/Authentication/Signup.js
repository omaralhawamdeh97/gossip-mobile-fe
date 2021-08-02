//React
import React, { useState } from "react";
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
import { SIGNIN } from "../Navigation/types";
//Redux
import { useDispatch } from "react-redux";
//Store
import { signup } from "../../store/actions/authActions";

const Signup = ({ navigation }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [user, setUser] = useState({
    username: "",
    fullname: "",
    password: "",
  });
  const handleSubmit = () => {
    dispatch(signup(user, navigation, setError));
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={{
          uri: "https://images.unsplash.com/photo-1508615039623-a25605d2b022?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        }}
      >
        <Text style={styles.topText}>Sign Up</Text>
        <View style={styles.box}>
          <TextInput
            style={styles.inputOne}
            placeholder="  Username"
            onChangeText={(username) => setUser({ ...user, username })}
          />
          <TextInput
            style={{ ...styles.input }}
            placeholder="  Full name"
            onChangeText={(fullname) => setUser({ ...user, fullname })}
          />
          <TextInput
            style={styles.input}
            placeholder="  Password"
            secureTextEntry={true}
            onChangeText={(password) => setUser({ ...user, password })}
          />
          {error ? (
            <Text style={styles.errorText}>Username already exist!</Text>
          ) : (
            <View />
          )}
          <Button onPress={handleSubmit} style={styles.button}>
            Signup
          </Button>
          <View style={styles.bottomText}>
            <Text>Already have an account! </Text>
            <Text
              style={styles.bottonText}
              onPress={() => navigation.navigate(SIGNIN)}
            >
              Sign In
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
export default Signup;

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
    height: "65%",
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
    padding: 10,
  },
  input: {
    height: 50,
    width: "90%",
    backgroundColor: "#C4C4C4",
    borderRadius: 5,
    marginTop: 20,
    alignSelf: "center",
    opacity: 0.9,
    padding: 10,
  },

  text: {
    marginTop: 50,
    marginLeft: 5,
    fontSize: 20,
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
    paddingBottom: 50,
    fontSize: 35,
    color: "white",
  },
  errorText: {
    color: "red",
    marginLeft: 20,
    marginTop: 5,
  },
  bottomText: {
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 60,
    alignItems: "center",
  },
  bottonText: {
    fontSize: 15,
    color: "white",
    marginLeft: 5,
  },
});
