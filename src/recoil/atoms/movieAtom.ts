import { atom } from 'recoil';
import { Movie } from 'types';

export const movieCursor = atom({
  key: 'movieCursor',
  default: 1,
});

export const allMovies = atom<Movie[]>({
  key: 'allMovies',
  default: [],
});
