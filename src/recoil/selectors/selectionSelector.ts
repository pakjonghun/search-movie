import { selectedPopularityState, selectedGenreState } from './../atoms/selectionAtom';
import { allMovies } from '@recoil/atoms/movieAtom';
import { selector } from 'recoil';

export const getMovieByPopularity = selector({
  key: 'getMovieBySort',
  get: ({ get }) => {
    const movies = get(allMovies);
    const [one, other] = get(selectedPopularityState);
    if (!one && !other) return [];
    const min = one < other ? one : other;
    const max = one < other ? other : one;
    const filtered = movies.filter(
      (movie) => movie.vote_average >= min && movie.vote_average <= max,
    );
    return filtered;
  },
});

export const getMovieByGenre = selector({
  key: 'getMovieByGenre',
  get: ({ get }) => {
    const movies = get(allMovies);
    const genres = get(selectedGenreState);

    return movies.filter((movie) => {
      for (const id of genres) {
        const isIncludes = movie.genre_ids.includes(id);
        if (isIncludes) return true;
      }
      return false;
    });
  },
});
