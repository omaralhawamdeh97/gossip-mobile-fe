//React
import React, { useState } from "react";
//React Native
import {
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Image, FlatList } from "react-native";
//Components
import MessageCard from "./MessageCard";
//icons
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../store/actions/messageActions";

const Message = () => {
  const dispatch = useDispatch();
  const [body, setBody] = useState({ body: "" });

  const messages = useSelector((state) => state.messageReducer.messages);

  const handleMessage = () => {
    console.log("hii");
    dispatch(addMessage(body));
    setBody("");
  };
  const renderItem = (message) => {
    console.log(message);
    return <MessageCard message={message.item} />;
  };
  return (
    <View style={styles.container}>
      {/* <ScrollView> */}
      <View style={styles.head}>
        <SafeAreaView />
        <Image
          style={styles.image}
          source={{
            uri: "https://i1.sndcdn.com/avatars-jSnZBzVzlzr1h0iZ-XAMVyA-t240x240.jpg",
          }}
        />
        <Text style={styles.title}>Hakem</Text>
      </View>

      {/* <View style={styles.card}>{messageList}</View> */}
      {/* </ScrollView> */}
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={(message) => message.id}
      />

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.bottom}
      >
        <AntDesign name="pluscircleo" size={24} color="rgb(80,80,80)" />
        <TextInput
          style={styles.input}
          placeholder={"Gossip here!"}
          placeholderTextColor="rgb(80,80,80)"
          onChangeText={(body) => setBody({ ...body, body })}
          value={body}
        />
        <TouchableOpacity
          onPress={handleMessage}
          disabled={body.body ? false : true}
        >
          <MaterialCommunityIcons
            name="send"
            size={24}
            color={body.body ? "green" : "rgb(80,80,80)"}
          />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: 35,
  },
  head: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderBottomWidth: 1,
    borderBottomColor: "rgb(80,80,80)",
    marginBottom: 10,
  },
  image: { width: 70, height: 70, borderRadius: 50, marginRight: 15 },
  title: { color: "white", alignSelf: "center", fontSize: 20 },
  input: {
    width: "80%",
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
  bottom: {
    borderTopWidth: 1,
    borderTopColor: "rgb(80,80,80)",
    paddingHorizontal: 10,
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    // position: "absolute",
    bottom: 0,
    paddingBottom: 25,
    backgroundColor: "rgb(20,20,20)",
  },
  card: {
    alignSelf: "flex-end",
    paddingRight: 10,
  },
});
