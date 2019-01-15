import axios from "axios";

const request = ({ method, url, data, headers}) => axios({
  method,
  url,
  data,
  headers: {
    'Content-Type': 'Application/json',
    ...headers,
  },
})
.then(handleResponse)
.catch((error) => console.log(error));

const handleResponse = (response) => response.data;

export const createUser = async (username, password) => {
  const requestOptions = {
    method: 'PUT',
    url: 'http://localhost:3001/api/user',
    data: {
      username,
      password,
    }
  }
  const response = await request(requestOptions);
  return response;
} 