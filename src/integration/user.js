import { request } from "./index";

const BASE_URL = `http://localhost:3001/api/user`;

export const createUser = async (username, password) => {
  const requestOptions = {
    method: "POST",
    url: `${BASE_URL}/create`,
    data: {
      username,
      password
    }
  };
  const data = await request(requestOptions);
  return data;
};

export const authUser = async (username, password) => {
  const requestOptions = {
    method: "POST",
    url: `${BASE_URL}/auth`,
    data: {
      username,
      password
    }
  };
  const data = await request(requestOptions);
  return data;
};

export const getUser = async () => {
  const token = localStorage.getItem("baiziUserToken");
  const requestOptions = {
    method: "GET",
    url: BASE_URL,
    date: { token }
  };
  console.log(token);
  const data = await request(requestOptions);
  return data;
};
