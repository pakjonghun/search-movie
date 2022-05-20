import { atom, atomFamily } from 'recoil';

export type BarStyle = {
  color: string;
  zIndex: string;
};

export const isFilterOpenState = atom({
  key: 'isFilterOpenState',
  default: false,
});

export const selectedGenreIdsState = atomFamily<number[], string>({
  key: 'selectedGenreIdsState',
  default: [],
});

export const popularityState = atomFamily<number[], string>({
  key: 'popularityState',
  default: [],
});
