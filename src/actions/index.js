import baiziApi from "../apis/baiziApi";
import { FETCH_BAIZIS, CREATE_BAIZI } from "./types";

export const fetchBaizis = () => async dispatch => {
  const response = await baiziApi.get("/api/baizis");
  dispatch({ type: FETCH_BAIZIS, payload: response.data });
};

export const createBaizi = () => async (dispatch, newBaizi) => {
  const response = await baiziApi.post("/api/baizis", newBaizi);
  dispatch({ type: CREATE_BAIZI, payload: response.data });
};
