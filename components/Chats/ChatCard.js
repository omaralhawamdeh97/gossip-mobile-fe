import React from "react";
import { Image } from "react-native";
import { SafeAreaView } from "react-native";
import { StyleSheet, Text, View } from "react-native";

const ChatCard = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: "https://i1.sndcdn.com/avatars-jSnZBzVzlzr1h0iZ-XAMVyA-t240x240.jpg",
        }}
      />
      <View style={styles.inner}>
        <Text style={styles.title}>Name</Text>
        <Text style={styles.message}>helooo meesiiiii</Text>
      </View>
    </View>
  );
};

export default ChatCard;

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
