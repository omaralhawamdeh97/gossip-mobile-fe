import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import * as types from "./types";

//Components
import FriendList from "../FriendList";
import Home from "../Home";
import Message from "../Message";
import Profile from "../Profile";
import Signin from "../Authentication/Signin";
import Signup from "../Authentication/Signup";
import { useSelector } from "react-redux";
import { ActivityIndicator } from "react-native";

const RootNavigator = () => {
  const user = useSelector((state) => state.authReducer.user);
  const userLoading = useSelector((state) => state.authReducer.loading);

  const { Navigator, Screen } = createStackNavigator();
  return (
    <>
      {userLoading ? (
        <ActivityIndicator />
      ) : (
        <Navigator
          initialRouteName={user ? types.FRIENDLIST : types.HOME}
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
          <Screen name={types.FRIENDLIST} component={FriendList} />
        </Navigator>
      )}
    </>
  );
};

export default RootNavigator;
