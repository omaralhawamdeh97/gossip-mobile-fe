//React
import React, { useState } from "react";
//Icons
import { Entypo } from "@expo/vector-icons";
//ReactNative
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";
import { TextInput } from "react-native";
import { ScrollView } from "react-native";
import ModalDropdown from "react-native-modal-dropdown";
//Components
import ChatCard from "./ChatCard";
import { HOME, SIGNIN, SIGNUP } from "../Navigation/types";

const Chat = ({ navigation }) => {
  //States
  const [query, setQuery] = useState("");
  const handleChange = (e) => {
    if (e === 0) {
      navigation.navigate(HOME);
    } else if (e === 1) {
      navigation.navigate(SIGNUP);
    } else if (e === 2) {
      navigation.navigate(SIGNIN);
    }
  };

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <View style={styles.header}>
        <Text style={styles.title}>Gossipies</Text>
        <ModalDropdown
          options={["Profile", "Add friend", "New Group"]}
          style={{ width: "30%" }}
          dropdownStyle={{ height: "15%", backgroundColor: "rgb(0,0,0)" }}
          saveScrollPosition={false}
          onSelect={handleChange}
        >
          <Entypo
            name="dots-three-vertical"
            size={30}
            color="rgb(80,80,80)"
            style={{ alignSelf: "flex-end" }}
          />
        </ModalDropdown>
      </View>
      <TextInput
        style={styles.input}
        placeholder={"Gossipe's Name"}
        placeholderTextColor="rgb(80,80,80)"
      />
      <View
        style={{ borderBottomWidth: 1, borderBottomColor: "rgb(80,80,80)" }}
      />
      <ScrollView>
        <ChatCard />
        <ChatCard />
        <ChatCard />
        <ChatCard />
        <ChatCard />
        <ChatCard />
        <ChatCard />
        <ChatCard />
        <ChatCard />
        <ChatCard />
        <ChatCard />
        <ChatCard />
        <ChatCard />
        <ChatCard />
        <ChatCard />
        <ChatCard />
      </ScrollView>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: 35,
  },
  input: {
    height: 35,
    marginHorizontal: 15,
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: "black",
    paddingLeft: 10,
    marginVertical: 20,
    color: "rgb(170,170,170)",
    borderColor: "rgb(80,80,80)",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    position: "relative",
  },
  title: {
    fontSize: 42,
    color: "white",
  },
});
