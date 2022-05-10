import { atom } from 'recoil';

export const isFilterOpenState = atom({
  key: 'isFilterOpenState',
  default: false,
});

export const isTvOnState = atom({
  key: 'isTvOnState',
  default: false,
});

export const genreState = atom({
  key: 'genreState',
  default: [] as string[],
});

export const popularityState = atom({
  key: 'popularityState',
  default: [] as number[],
});

export const isFilterResetState = atom({
  key: 'isFilterReset',
  default: false,
});
