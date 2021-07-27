import AsyncStorage from "@react-native-async-storage/async-storage";
import instance from "./instance";
import * as actionTypes from "./actionsTypes";
import decode from "jwt-decode";
import { HOME } from "../../components/Navigation/types";

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
      console.log(res.data);
      dispatch(setUser(res.data.token));
      navigation.navigate(HOME);
    } catch (error) {
      if (error.message.includes("401")) {
        setError(error.message);
      }
    }
  };
};
export const signout = () => {
  localStorage.removeItem("myToken");
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
const setUser = (token) => async (dispatch) => {
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
// export const fetchUsers = () => {
//   return async (dispatch) => {
//     try {
//       const res = await instance.get("/users");

//       dispatch({
//         type: actionTypes.FETCH_USERS,
//         payload: res?.data,
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

// export const updateUser = (body,user) => {
//   return async (dispatch) => {
//     try {
//       const res = await instance.put(`${user.id}`,body);

//       dispatch({
//         type: actionTypes.FETCH_USERS,
//         payload: res.data,
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };
