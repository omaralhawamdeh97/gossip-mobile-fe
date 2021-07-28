import { combineReducers } from "redux";
import authReducer from "./authReducer";
import messageReducer from "./messageReducer";

const bigR = combineReducers({
  authReducer,
  messageReducer,
});

export default bigR;
