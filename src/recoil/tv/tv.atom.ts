import { CacheStore } from './../../cache';
import { atom } from 'recoil';

export const tvCursorState = atom<number>({
  key: 'tvCursorState',
  default: 1,
});

export const tvCursorListState = atom<number[]>({
  key: 'tvCursorListState',
  default: [],
});

export const tvReTryCountState = atom<number>({
  key: 'tvReTryCountState',
  default: 0,
});
