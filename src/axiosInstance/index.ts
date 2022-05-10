import axios, { AxiosRequestConfig } from 'axios';

import { baseURL } from './constants';

const config: AxiosRequestConfig = {
  baseURL,
  // headers: {
  //   'Cache-Control': 'no-cache',
  // },
};

export const http = axios.create(config);
