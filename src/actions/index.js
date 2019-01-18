import * as baiziApi from "../integration/baizi";
import * as userApi from "../integration/user";
import * as types from "./types";

export const fetchBaizis = () => dispatch => {
  const data = baiziApi.fetchBaizis();
  if (!data) {
    dispatch({ type: types.FETCH_BAIZIS, payload: data });
  } else {
    // Need better error handling here
    console.log("Error: can't fetch baizi.");
  }
};

export const createBaizi = newBaizi => (dispatch, getState) => {
  const data = baiziApi.createBaizi(newBaizi);
  if (!data) {
    dispatch({ type: types.CREATE_BAIZI, payload: data });
  } else {
    console.log("Error: can't create baizi.");
  }
};

export const createUser = newUser => async dispatch => {
  const token = await userApi.createUser(newUser.username, newUser.password); // Somehow this token is always undefined, but the user is correctly registered in backend, and the status code is 201, too.
  if (!token) {
    console.log(token);
    dispatch({
      type: types.CREATE_USER,
      payload: token
    });
  } else {
    console.log("Error with createUser");
  }
};
