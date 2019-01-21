import axios from "axios";

export const request = ({ method, url, data, headers }) =>
  axios({
    method,
    url,
    data,
    headers: {
      "Content-Type": "Application/json",
      ...headers
    }
  }).then(handleResponse);
// .catch(error => {
//   console.log(error.response.status);
//   return error.response.status;
// });

const handleResponse = response => response.data;
