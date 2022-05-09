import axios, { AxiosAdapter, AxiosRequestConfig } from 'axios';
import { cacheAdapterEnhancer, throttleAdapterEnhancer } from 'axios-extensions';
import { baseURL } from './constants';

const config: AxiosRequestConfig = {
  baseURL,
  headers: {
    'Cache-Control': 'no-cache',
  },
  adapter: throttleAdapterEnhancer(cacheAdapterEnhancer(axios.defaults.adapter as AxiosAdapter)),
};

export const http = axios.create(config);
