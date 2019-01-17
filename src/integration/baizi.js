import { request } from './index';

const BASE_URL = `http://localhost:3001/api/baizi`;

export const createBaizi = async (body) => {
  const requestOptions = {
    method: 'POST',
    url: BASE_URL,
    data: body,
    headers: {
      'authorization': 'user-token'
    }
  };
  const data = await request(requestOptions);
  return data;
}

export const getBaiziByUser = async () => {
  const requestOptions = {
    method: 'GET',
    url: BASE_URL,
    headers: {
      'authorization': 'user-token'
    }
  };
  const data = await request(requestOptions);
  return data;
}