import { combineReducers } from "redux";
import globalReducer from "./globalReducer";

const reducers = combineReducers({
  global: globalReducer
})

export default reducers;

export type State = ReturnType<typeof reducers>