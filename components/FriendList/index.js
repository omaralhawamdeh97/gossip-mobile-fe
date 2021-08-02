//React
import React, { useState, useEffect } from "react";
//Icons
import { Entypo } from "@expo/vector-icons";
//ReactNative
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native";
import { ScrollView } from "react-native";
import ModalDropdown from "react-native-modal-dropdown";
//Components
import FriendCard from "./FriendCard";
import { HOME, MESSAGE, PROFILE, SIGNIN, SIGNUP } from "../Navigation/types";
import { useDispatch, useSelector } from "react-redux";
import { fetchFoundUser, signout } from "../../store/actions/authActions";
import Home from "../Home";

const FriendList = ({ navigation }) => {
  const dispatch = useDispatch();
  //States
  const user = useSelector((state) => state.authReducer.user);
  var input;
  useEffect(() => {
    dispatch(fetchFoundUser(user));
  }, [input]);

  const [query, setQuery] = useState("");
  const { navigate } = navigation;
  const handleChange = (e) => {
    if (e === 0) {
      navigate(PROFILE);
    } else if (e === 1) {
      navigate(SIGNUP);
    } else if (e === 2) {
      navigate(SIGNIN);
    } else if (e === 3) {
      dispatch(signout(navigation));
    }
  };
  const navigateToMessage = () => {
    navigate(MESSAGE);
  };
  console.log(user);
  var friends = [];
  if (user.from || user.to) {
    const fromList = user.from.map((friend) => friend);
    const toList = user.to.map((friend) => friend);
    friends = [...fromList, ...toList].map((friend) => (
      <FriendCard friend={friend} onPress={navigateToMessage} />
    ));
  }
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <View style={styles.header}>
        <Text style={styles.title}>Gossipies</Text>
        <ModalDropdown
          options={["Profile", "Add friend", "New Group", "Sign Out"]}
          style={{ width: "30%" }}
          dropdownStyle={{ height: "20%", backgroundColor: "rgb(0,0,0)" }}
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
      <ScrollView>{friends}</ScrollView>
    </View>
  );
};

export default FriendList;

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
