import countReducer from "./counter";
import loggedReducer from "./isLogged";

import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter: countReducer,
  islogged: loggedReducer,
});

export default allReducers;
