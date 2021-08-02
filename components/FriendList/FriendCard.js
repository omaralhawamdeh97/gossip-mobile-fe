//React
import React from "react";
//Styling
import { Image, TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from "react-native";

const FriendCard = ({ onPress, friend }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: friend.image,
        }}
      />
      <View style={styles.inner}>
        <Text style={styles.title}>{friend.username}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default FriendCard;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,

    backgroundColor: "black",
    flexDirection: "row",
    paddingHorizontal: 10,

    alignItems: "center",
  },
  inner: {
    borderBottomWidth: 0.2,
    borderBottomColor: "rgb(80,80,80)",
    width: "100%",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 15,
  },
  title: {
    fontSize: 22,
    color: "white",
  },
  message: {
    fontSize: 14,
    color: "#595959",
    paddingVertical: 8,
  },
});
