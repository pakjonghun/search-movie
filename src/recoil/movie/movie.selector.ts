import { movieCursorState } from '@recoil/movie/movie.atom';
import { apis } from './../../api/api';
import { Movie } from 'api/api.type';
import { selectorFamily } from 'recoil';
import { CheckIsLastMovieItemPayload, MovieItemPayload } from './movie.type';

export const movieQuery = selectorFamily<Movie[], number>({
  key: 'movieQuery',
  get: (cursor: number) => async () => {
    const movies = await apis.movies(cursor);
    return movies || [];
  },
});

export const movieCountPerCursorState = selectorFamily<number, number>({
  key: 'movieCountPerCursorState',
  get:
    (cursor: number) =>
    ({ get }) => {
      const movies = get(movieQuery(cursor));
      return movies.length;
    },
});

export const movieItemState = selectorFamily<Movie, MovieItemPayload>({
  key: 'movieItemState',
  get:
    ({ cursor, index }) =>
    ({ get }) => {
      const movies = get(movieQuery(cursor));
      return movies[index];
    },
});

export const checkIsLastMovieItem = selectorFamily<boolean, CheckIsLastMovieItemPayload>({
  key: 'checkIsLastMovieItem',
  get:
    ({ cursor, length }) =>
    ({ get }) => {
      const lastCursor = get(movieCursorState);
      const totalLength = 20 * (lastCursor - 1) + get(movieCountPerCursorState(lastCursor));
      const currentLength = (cursor - 1) * 20 + length;
      return totalLength == currentLength;
    },
});
