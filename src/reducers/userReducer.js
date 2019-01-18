import { CREATE_USER } from "../actions/types.js";

export default (state = [], action) => {
  switch (action.type) {
    case CREATE_USER:
      return action.payload;
    default:
      return state;
  }
};
