import { getFetchByFetch } from './util';
import { Movie, Response, TV } from './api.type';
import { Genre } from '@recoil/filter/filter.type';
import { CacheStore } from '../cache';

export const apis = {
  genres: async () => {
    const { genres } = await getFetchByFetch<{ genres: Genre[] }>({ url: '/genre/list' });
    return genres;
  },
  movies: async (page: number) => {
    const { results } = await getFetchByFetch<Response<Movie[]>>({
      url: '/movie/popular',
      params: { page },
    });
    return results;
  },
  tvs: async (page: number) => {
    const { results } = await getFetchByFetch<Response<TV[]>>({
      url: '/tv/popular',
      params: { page },
    });
    return results;
  },
  movieTotalCursor: async (page: number) => {
    const { total_pages } = await getFetchByFetch<Response<Movie[]>>({
      url: '/movie/popular',
      params: { page },
    });
    return total_pages;
  },
  tvsTotalCursor: async (page: number) => {
    const { total_pages } = await getFetchByFetch<Response<TV[]>>({
      url: '/tv/popular',
      params: { page },
    });
    return total_pages;
  },
};
