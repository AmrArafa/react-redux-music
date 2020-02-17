import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import reduxPromiseMiddleware from "redux-promise-middleware";
import { genresReducer, artistsReducer } from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({ genresReducer, artistsReducer }),
  {},
  composeEnhancers(applyMiddleware(reduxPromiseMiddleware))
);

export default store;
