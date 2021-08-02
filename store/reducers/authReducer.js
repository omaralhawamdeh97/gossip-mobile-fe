import * as actionTypes from "../actions/actionsTypes";

const initialState = {
  user: null,
  users: [],
  loading: true,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case actionTypes.FOUND_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
