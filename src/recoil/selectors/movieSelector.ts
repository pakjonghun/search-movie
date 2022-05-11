import { moviePage } from './../atoms/movieAtom';
import { http } from '../../axiosInstance';
import { selector } from 'recoil';
import { Movie, Response } from 'types';

export const getMoviesQuery = selector<Movie[]>({
  key: 'getMoviesQuery',
  get: async ({ get }) => {
    const page = get(moviePage);
    if (!page) return [];
    try {
      if (!get(moviePage)) return [];
      const { data } = await http.get<Response<Movie[]>>('/movie/popular', {
        params: {
          page,
          api_key: process.env.KEY,
        },
      });

      return data.results || [];
    } catch (err) {
      throw 'movie data error';
    }
  },
});
