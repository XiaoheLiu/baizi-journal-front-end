import { CREATE_USER, AUTH_USER, LOGOUT_USER } from "../actions/types.js";

export default (state = "", action) => {
  switch (action.type) {
    case CREATE_USER:
      return action.payload;
    case AUTH_USER:
      return action.payload;
    case LOGOUT_USER:
      return "";
    default:
      return state;
  }
};
