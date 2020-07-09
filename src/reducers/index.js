import { combineReducers } from "redux";
import listReducer from "./listReducer";

export default combineReducers({
  books: listReducer,
});
