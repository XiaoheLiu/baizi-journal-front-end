import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import baizisReducer from "./baizisReducer";

// export default function counter(state = 0, action) {
//   switch (action.type) {
//     case "INCREMENT":
//       return state + 1;
//     case "DECREMENT":
//       return state - 1;
//     default:
//       return state;
//   }
// }

export default combineReducers({
  baizis: baizisReducer,
  form: formReducer
});
