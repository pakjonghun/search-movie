import { getFetchByFetch } from './util';
import { Movie, Response } from './api.type';
import { Genre } from '@recoil/filter/filter.type';

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
};
