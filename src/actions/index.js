import baiziApi from "../apis/baiziApi";
import { FETCH_BAIZIS } from "./types";

export const fetchBaizis = () => async dispatch => {
  const response = await baiziApi.get("/api/baizis");
  dispatch({ type: FETCH_BAIZIS, payload: response.data });
};
