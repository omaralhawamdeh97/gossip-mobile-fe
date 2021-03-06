import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import bigR from "./reducers";
import { checkForToken } from "./actions/authActions";
import { fetchMessages } from "./actions/messageActions";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(bigR, composeEnhancers(applyMiddleware(thunk)));

store.dispatch(checkForToken());

store.dispatch(fetchMessages());

export default store;
