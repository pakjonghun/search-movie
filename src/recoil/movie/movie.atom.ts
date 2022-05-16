import { atom, atomFamily } from 'recoil';
import { CacheStore } from '../../cache';

export const movieCursorState = atom<number>({
  key: 'movieCursorState',
  default: 1,
});

export const movieCursorListState = atom<number[]>({
  key: 'movieCountByCursorListState',
  default: [],
});

export const movieReTryCountState = atom<number>({
  key: 'movieReTryCount',
  default: 0,
});
