//React
import React from "react";

//Styling
import { View, StyleSheet, Text, Image, TextInput } from "react-native";

const Profile = () => {
  return (
    <View style={styles.topView}>
      <View style={styles.profile}>
        <Text style={styles.textOne}>Cancel</Text>
        <Text style={styles.textTwo}>Profile</Text>
        <Text style={styles.textThree}>Save</Text>
      </View>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: "https://i1.sndcdn.com/avatars-jSnZBzVzlzr1h0iZ-XAMVyA-t240x240.jpg",
          }}
        />
      </View>
      <View style={styles.box}>
        <TextInput style={styles.input} placeholder={"Username"} />
        <TextInput style={styles.input} placeholder={"Full name"} />
        <TextInput style={styles.input} placeholder={"Password"} />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  topView: {
    borderWidth: 1,
    height: "4%",
    backgroundColor: "black",
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
  textOne: {
    color: "black",
    fontSize: 17,
    paddingLeft: "2%",
  },
  textTwo: {
    color: "black",
    fontSize: 20,
    paddingLeft: "27%",
  },
  textThree: {
    color: "green",
    fontSize: 17,
    paddingLeft: "28%",
  },
  image: {
    height: 120,
    width: 120,
    borderRadius: 100,
    marginTop: 13,
  },
  container: {
    borderWidth: 0.4,
    height: "600%",
    borderBottomColor: "gray",
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    alignItems: "center",
  },
  box: {
    marginTop: 20,
    height: 415,
  },
  input: {
    marginTop: 10,
    width: "95%",
    height: 60,
    marginHorizontal: 9,
    borderWidth: 0.2,
    borderRadius: 10,
    backgroundColor: "white",
    paddingLeft: 10,
  },
});
