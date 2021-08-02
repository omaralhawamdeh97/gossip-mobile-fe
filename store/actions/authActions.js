import AsyncStorage from "@react-native-async-storage/async-storage";
import instance from "./instance";
import * as actionTypes from "./actionsTypes";
import decode from "jwt-decode";
import {
  FRIENDLIST,
  HOME,
  MESSAGE,
  PROFILE,
  SIGNIN,
} from "../../components/Navigation/types";

// ACTIONS
export const signup = (user, navigation, setError) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/signup", user);
      dispatch(setUser(res.data.token));
      navigation.navigate(HOME);
    } catch (error) {
      if (error.message.includes("500")) {
        setError(error.message);
      }
    }
  };
};
export const signin = (user, navigation, setError) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/signin", user);

      dispatch(setUser(res.data.token));
      navigation.navigate(FRIENDLIST);
    } catch (error) {
      if (error.message.includes("401")) {
        setError(error.message);
      }
    }
  };
};
export const signout = (navigation) => {
  AsyncStorage.removeItem("myToken");
  navigation.navigate(HOME);
  return {
    type: actionTypes.SET_USER,
    payload: null,
  };
};
export const checkForToken = () => async (dispatch) => {
  const token = await AsyncStorage.getItem("myToken");
  if (token) {
    const currentTime = Date.now();
    const user = decode(token);
    if (user.exp > currentTime) return dispatch(setUser(token));
  }
  dispatch(setUser());
};
export const setUser = (token) => async (dispatch) => {
  if (token) {
    await AsyncStorage.setItem("myToken", token);
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    dispatch({
      type: actionTypes.SET_USER,
      payload: decode(token),
    });
  } else {
    await AsyncStorage.removeItem("myToken");
    dispatch({
      type: actionTypes.SET_USER,
      payload: null,
    });
  }
};
export const fetchFoundUser = (user) => {
  return async (dispatch) => {
    try {
      const res = await instance.get(`/users/${user.id}`);

      dispatch({
        type: actionTypes.FOUND_USER,
        payload: res?.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateUser = (
  userProfile,
  user,
  setPasswordError,
  setNameError
) => {
  return async (dispatch) => {
    try {
      const token = await AsyncStorage.getItem("myToken");
      instance.defaults.headers.common.Authorization = `Bearer ${token}`;
      const res = await instance.put(`${user.id}`, userProfile);

      dispatch(setUser(res.data.token));
    } catch (error) {
      if (error.message.includes("402")) {
        setNameError(error.message);
      } else if (error.message.includes("401")) {
        setPasswordError(error.message);
      } else {
        console.log(error);
      }
    }
  };
};
