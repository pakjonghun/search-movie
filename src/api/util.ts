import { baseURL } from './api.constant';
import { FetchPayload } from './api.type';
console.log('cdkey', process.env.KEY);
export const urlMaker = ({ url, params = {} }: FetchPayload) => {
  const urlObject = new URLSearchParams();
  urlObject.append('api_key', process.env.KEY);
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
