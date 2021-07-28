//React
import React from "react";
//React Native
import { StyleSheet, Text, View } from "react-native";

const MessageCard = ({ message }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message.body}</Text>
    </View>
  );
};

export default MessageCard;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: "rgb(80,80,80)",
    borderWidth: 1,
    borderRadius: 15,
    flexDirection: "row",
    alignSelf: "flex-start",
  },
  message: {
    fontSize: 14,
    color: "white",
  },
});
