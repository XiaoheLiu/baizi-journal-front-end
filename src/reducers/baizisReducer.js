import { FETCH_BAIZIS } from "../actions/types.js";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_BAIZIS:
      return action.payload;
    default:
      return state;
  }
};
