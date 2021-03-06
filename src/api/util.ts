import { baseURL } from './api.constant';
import { FetchPayload } from './api.type';

export const urlMaker = ({ url, params = {} }: FetchPayload) => {
  const urlObject = new URLSearchParams();
  urlObject.append('api_key', process.env.REACT_APP_VERCEL_API_KEY);
  const keys = Object.keys(params);

  keys.forEach((key) => {
    urlObject.append(key, params[key]);
  });

  return `${baseURL + url}?${urlObject.toString()}`;
};

export const getFetchByFetch = async <T>(payload: FetchPayload) => {
  const totalUrl = urlMaker(payload);
  const response = (await fetch(totalUrl).then((res) => res.json())) as T;
  return response;
};
