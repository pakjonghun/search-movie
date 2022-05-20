import { MovieCache } from './movie.cache';
import { atom, atomFamily } from 'recoil';
import { Content } from '@api/api.type';

export const movieCursorState = atom<number>({
  key: 'movieCursorState',
  default: 1,
});

export const movieDetailState = atomFamily<Content | null, number>({
  key: 'movieDecotailState',
  default: null,
  effects: (movieId: number) => [
    ({ setSelf }) => {
      const movieDetail = MovieCache.getInstance().getMovie(movieId);
      setSelf(movieDetail);
    },
  ],
});
