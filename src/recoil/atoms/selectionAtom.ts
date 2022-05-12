import { atom } from 'recoil';
import { SelectValue } from 'types';

export const contentByWhatState = atom<SelectValue>({
  key: 'contentByWhatState',
  default: 'none',
});

export const selectedPopularityState = atom<[number, number]>({
  key: 'selectedPopularityState',
  default: [0, 0],
});

export const selectedGenreState = atom<number[]>({
  key: 'selectedGenreState',
  default: [],
});
