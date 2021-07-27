import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Home";
import React from "react";
import * as types from "./types";
import Signin from "../Authentication/Signin";
import Signup from "../Authentication/Signup";

const RootNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <Navigator
      initialRouteName={types.HOME}
      screenOptions={{ headerShown: false }}
    >
      <Screen
        options={{ headerShown: false }}
        name={types.HOME}
        component={Home}
      />
      <Screen name={types.SIGNIN} component={Signin} />
      <Screen name={types.SIGNUP} component={Signup} />
    </Navigator>
  );
};

export default RootNavigator;
