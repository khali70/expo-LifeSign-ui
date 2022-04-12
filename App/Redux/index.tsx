import { createStore, combineReducers } from "redux";
import UiReducer from "./reducer";

// const rootReducer = combineReducers(
// { count: countReducer }
// );

const configureStore = () => {
  return createStore(UiReducer);
};

export default configureStore;
