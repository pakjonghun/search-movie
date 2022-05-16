import { atom } from 'recoil';
import { genresQuery } from './filter.selector';
import { FilterContent, Genre } from './filter.type';

export type BarStyle = {
  color: string;
  zIndex: string;
};

export const isFilterOpenState = atom({
  key: 'isFilterOpenState',
  default: false,
});

export const filterContentState = atom<FilterContent>({
  key: 'filterContentState',
  default: 'TV',
});

export const selectedGenreIdsState = atom<number[]>({
  key: 'selectedGenreIdsState',
  default: [],
});

export const genresState = atom<Genre[]>({
  key: 'genresState',
  default: genresQuery,
});

export const popularityState = atom<number[]>({
  key: 'popularityState',
  default: [],
});

export const searchTermState = atom<string>({
  key: 'searchTermState',
  default: '',
});
