import { movieCursor } from './../atoms/movieAtom';
import { http } from '../../axiosInstance';
import { selector, selectorFamily, waitForNone } from 'recoil';
import { Movie, Response } from 'types';

export const getMoviesQuery = selectorFamily({
  key: 'getMoviesQuery',
  get: (cursor: number) => async () => {
    try {
      const { data } = await http.get<Response<Movie[]>>('/movie/popular', {
        params: {
          page: cursor,
          api_key: process.env.KEY,
        },
      });
      return data.results || [];
    } catch (err) {
      throw 'movie data error';
    }
  },
});

export const getAllMovies = selector({
  key: 'getAllMovies',
  get: ({ get }) => {
    const cursors = Array.from(Array(get(movieCursor)).keys(), (c) => c + 1);
    return get(waitForNone(cursors.map(getMoviesQuery)));
  },
});

const getTotalMoviesCount = selector({
  key: 'getTotalMoviesCount',
  get: ({ get }) => {
    const cursor = get(movieCursor);
    const curMovies = get(getMoviesQuery(cursor));
    return (cursor - 1) * 20 + curMovies.length;
  },
});

export const isLastMovieItem = selectorFamily({
  key: 'getMovieRef',
  get:
    (nth: number) =>
    ({ get }) => {
      const totalMoviesCount = get(getTotalMoviesCount);
      return totalMoviesCount === nth;
    },
});
