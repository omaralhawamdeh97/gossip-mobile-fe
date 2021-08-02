import * as actionTypes from "../actions/actionsTypes";

const initialState = {
  messages: [],
  loading: true,
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_MESSAGE:
      const { newMessage } = action.payload;
      return {
        ...state,
        messages: [...state.messages, newMessage],
      };

    case actionTypes.FETCH_MESSAGES:
      const messagesList = action.payload;
      return {
        ...state,
        messages: messagesList,
        loading: false,
      };
    default:
      return state;
  }
};

export default messageReducer;
