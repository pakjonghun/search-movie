import { MovieCache } from './movie.cache';
import { atom, atomFamily } from 'recoil';
import { Movie } from 'api/api.type';

export const movieCursorState = atom<number>({
  key: 'movieCursorState',
  default: 1,
});

export const movieIdListState = atomFamily<number[], number>({
  key: 'movieIdListState',
  default: [],
  effects: (cursor: number) => [
    ({ setSelf }) => {
      const idListPromise = MovieCache.getInstance().getIds(cursor);
      setSelf(idListPromise);
    },
  ],
});

export const movieDetailState = atomFamily<Movie | null, number>({
  key: 'movieDetailState',
  default: null,
  effects: (movieId: number) => [
    ({ setSelf }) => {
      const movieDetail = MovieCache.getInstance().getMovie(movieId);
      setSelf(movieDetail);
    },
  ],
});

export const lastMovieIdState = atom<number | null>({
  key: 'lastMovieIdState',
  default: 0,
});

export const movieRetryCountState = atom<number>({
  key: 'movieRetryCountState',
  default: 0,
});
