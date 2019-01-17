import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import baizisReducer from "./baizisReducer";

export default combineReducers({
  baizis: baizisReducer,
  form: formReducer
});
