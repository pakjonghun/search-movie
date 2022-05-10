import { moviePage, movieState } from './../atoms/movieAtom';
import { http } from '../../axiosInstance';
import { selector, DefaultValue } from 'recoil';
import { Movie, Response } from 'types';

export const getMoviesQuery = selector<Movie[]>({
  key: 'getMoviesQuery',
  get: async ({ get }) => {
    try {
      const { data } = await http.get<Response<Movie[]>>('/movie/popular', {
        params: {
          page: get(moviePage),
          api_key: process.env.KEY,
        },
      });

      return data.results || [];
    } catch (err) {
      throw 'movie data error';
    }
  },
  set: ({ set, get }, curMovies) => {
    const preMovies = get(movieState);
    if (!(curMovies instanceof DefaultValue)) {
      set(movieState, [...preMovies, ...curMovies]);
    }
  },
});
