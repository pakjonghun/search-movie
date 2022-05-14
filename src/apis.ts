import { Genre } from './recoil/Filter/FilterAtom';

type FetchPayload = { url: string; params?: any };

const baseURL = 'https://api.themoviedb.org/3';

const urlMaker = ({ url, params = {} }: FetchPayload) => {
  const urlObject = new URLSearchParams();
  urlObject.append('api_key', process.env.KEY);
  const keys = Object.keys(params);

  keys.forEach((key) => {
    urlObject.append(key, params[key]);
  });

  return `${baseURL + url}?${urlObject.toString()}`;
};

const getFetchByFetch = async <T>(payload: FetchPayload) => {
  const totalUrl = urlMaker(payload);
  const response = (await fetch(totalUrl).then((res) => res.json())) as T;
  return response;
};

export const apis = {
  genres: async () => {
    const { genres } = await getFetchByFetch<{ genres: Genre[] }>({ url: '/genre/list' });
    return genres;
  },
  movies: async (page: number) => getFetchByFetch({ url: '/movies/popular', params: { page } }),
};
