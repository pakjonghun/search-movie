import { atom } from 'recoil';
import { Movie } from 'types';

export const moviePage = atom({
  key: 'moviePage',
  default: 1,
});

export const movieState = atom<Movie[]>({
  key: 'movieState',
  default: [],
});
