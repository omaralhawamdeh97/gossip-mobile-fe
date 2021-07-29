import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import * as types from "./types";

//Components
import Chat from "../Chats";
import Home from "../Home";
import Message from "../Message";
import Profile from "../Profile";
import Signin from "../Authentication/Signin";
import Signup from "../Authentication/Signup";

const RootNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <Navigator
      initialRouteName={types.Profile}
      screenOptions={{ headerShown: false }}
    >
      <Screen
        options={{ headerShown: false }}
        name={types.HOME}
        component={Home}
      />
      <Screen name={types.SIGNIN} component={Signin} />
      <Screen name={types.SIGNUP} component={Signup} />
      <Screen name={types.PROFILE} component={Profile} />
      <Screen name={types.MESSAGE} component={Message} />
      <Screen name={types.CHAT} component={Chat} />
    </Navigator>
  );
};

export default RootNavigator;
