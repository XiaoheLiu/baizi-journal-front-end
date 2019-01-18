import * as baiziApi from "../integration/baizi";
import * as userApi from "../integration/user";
import * as types from "./types";

export const fetchBaizis = () => async dispatch => {
  const data = await baiziApi.fetchBaizis();
  if (data) {
    dispatch({ type: types.FETCH_BAIZIS, payload: data });
  } else {
    // Need better error handling here
    console.log("Error: can't fetch baizi.");
  }
};

export const createBaizi = newBaizi => async (dispatch, getState) => {
  const data = await baiziApi.createBaizi(newBaizi);
  if (data) {
    dispatch({ type: types.CREATE_BAIZI, payload: data });
  } else {
    console.log("Error: can't create baizi.");
  }
};

export const createUser = newUser => async dispatch => {
  const token = await userApi.createUser(newUser.username, newUser.password);
  if (token) {
    dispatch({
      type: types.CREATE_USER,
      payload: token
    });
  } else {
    console.log("Error with createUser");
  }
};

export const authUser = user => async dispatch => {
  const token = await userApi.authUser(user.username, user.password);
  if (token) {
    dispatch({
      type: types.AUTH_USER,
      payload: token
    });
  } else {
    console.log("Error: can't log in");
  }
};
