import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Home";
import React from "react";
import * as types from "./types";
import Signin from "../Authentication/Signin";
import Signup from "../Authentication/Signup";
import Chat from "../Chats";
import Message from "../Message";

const RootNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <Navigator
      initialRouteName={types.MESSAGE}
      screenOptions={{ headerShown: false }}
    >
      <Screen
        options={{ headerShown: false }}
        name={types.HOME}
        component={Home}
      />
      <Screen name={types.SIGNIN} component={Signin} />
      <Screen name={types.SIGNUP} component={Signup} />
      <Screen name={types.CHAT} component={Chat} />
      <Screen name={types.MESSAGE} component={Message} />
    </Navigator>
  );
};

export default RootNavigator;
