import React from "react";

//Styling
import { ImageBackground, StyleSheet, View, Text } from "react-native";
import { Button } from "native-base";

//Navigation
import { SIGNIN, SIGNUP } from "../Navigation/types";

const Home = ({ navigation }) => {
  const handleSubmitOne = () => {
    navigation.navigate(SIGNIN);
  };
  const handleSubmitTwo = () => {
    navigation.navigate(SIGNUP);
  };

  return (
    <ImageBackground
      style={styles.background}
      source={{
        uri: "https://images.unsplash.com/photo-1508615039623-a25605d2b022?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      }}
    >
      <View style={styles.container}>
        <Text style={styles.text}>Let's Gossip </Text>
        <View style={{ marginBottom: 20 }}>
          <Button onPress={handleSubmitOne} style={styles.button}>
            Signin
          </Button>
          <Button onPress={handleSubmitTwo} style={styles.button2}>
            Signup
          </Button>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Home;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#5B5B5B",
    borderRadius: 8,
    height: 60,
    width: 240,
  },
  button2: {
    width: 240,
    height: 60,
    marginTop: 30,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "rgba(0, 0, 0, 0)",
  },
  container: {
    alignItems: "center",
    justifyContent: "space-evenly",
    flex: 1,
  },

  text: {
    width: 248.6,
    height: 69.03,

    fontStyle: "normal",

    fontWeight: "bold",
    fontSize: 40,
    lineHeight: 48,
  },
});
