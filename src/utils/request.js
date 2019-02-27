// import { setErrorState } from '../actions/errorStatus';
import Constant from '../constant/constant';
import axios from 'axios';

axios.interceptors.request.use((config) => {
  const {url, headers, data, method} = config;
  return {
    ...config,
    method: method,
    headers: {
      ...headers,
      "Content-Type": 'application/x-www-form-urlencoded'
    },
    params: data,
    transformRequest: [(params) => formatParams(params)],
    url: `${Constant.apiHost}${Constant.apiPath}${url}`
  };
}, (error) => {
  return Promise.reject(error);
});

axios.interceptors.response.use((response) => {
  const {data} = response;
  return data;
}, (error) => {
  const {data} = error.response;
  return Promise.reject(data);
});

const formatParams = (params) => {
  if(!params) return {};

  let result = '';
  let item;
  for (item in params) {
    result += '&' + item + '=' + encodeURIComponent(params[item]);
  }
  if (result) {
    result = result.slice(1);
  }
  console.log(result);
  return result;
};

export default axios;
