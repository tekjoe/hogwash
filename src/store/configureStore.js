import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import searchesReducer from "../reducers/searches";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    searchesReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};
