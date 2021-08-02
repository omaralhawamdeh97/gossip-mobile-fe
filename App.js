import store from "./store";
import React from "react";
import { NativeBaseProvider } from "native-base";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./components/Navigation";
import { ActivityIndicator } from "react-native";
export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
}
