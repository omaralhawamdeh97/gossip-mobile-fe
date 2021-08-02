import instance from "./instance";
import * as actionTypes from "./actionsTypes";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const addMessage = (newMessage) => {
  return async (dispatch) => {
    try {
      const token = await AsyncStorage.getItem("myToken");
      instance.defaults.headers.common.Authorization = `Bearer ${token}`;
      const res = await instance.post("/messages", newMessage);
      dispatch({
        type: actionTypes.ADD_MESSAGE,
        payload: { newMessage: res.data },
      });
    } catch (error) {}
  };
};
export const fetchMessages = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get(`/messages`);

      dispatch({
        type: actionTypes.FETCH_MESSAGES,
        payload: res.data,
      });
    } catch (error) {}
  };
};
