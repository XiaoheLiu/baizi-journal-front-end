import { FETCH_BAIZIS, CREATE_BAIZI } from "../actions/types.js";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_BAIZIS:
      return action.payload;
    case CREATE_BAIZI:
      return [...state, action.payload];
    default:
      return state;
  }
};
