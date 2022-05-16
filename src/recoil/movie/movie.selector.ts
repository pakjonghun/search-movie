import { apis } from './../../api/api';
import { Movie } from 'api/api.type';
import { selectorFamily } from 'recoil';
import { MovieItemPayload } from './movie.type';
import { genresState, popularityState, selectedGenreIdsState } from '@recoil/filter/filter.atom';
import { movieCursorListState, movieCursorState } from './movie.atom';

export const movieQuery = selectorFamily<Movie[], number>({
  key: 'movieQuery',
  get: (cursor: number) => async () => {
    const movies = await apis.movies(cursor);
    return movies || [];
  },
});

export const filteredMovieListState = selectorFamily<Movie[], number>({
  key: 'movieItemState',
  get:
    (cursor) =>
    ({ get }) => {
      let movies = get(movieQuery(cursor)).filter((movie) => movie.adult === false);
      const popularities = get(popularityState);
      const genres = get(selectedGenreIdsState);

      switch (true) {
        case genres.length == 0:
          break;
        case genres.length > 0:
          movies = movies.filter(({ genre_ids }) => {
            for (const id of genres) {
              const isExist = genre_ids.some((genreId) => genreId == id);
              if (isExist) return true;
            }
          });
          break;
        default:
          throw new Error('error on movieItemState');
      }

      switch (popularities.length) {
        case 0:
          break;
        case 1: {
          const filterFunc = ({ vote_average }: Movie) => popularities[0] == vote_average;
          movies = movies.filter(filterFunc);
          break;
        }
        case 2: {
          const [min, max] = popularities;
          const filterFunc = ({ vote_average }: Movie) => min <= vote_average && vote_average <= max;
          movies = movies.filter(filterFunc);
          break;
        }
        default:
          throw new Error('error on moviesByPopularities');
      }

      return movies;
    },
});

export const movieItemState = selectorFamily<Movie | null, MovieItemPayload>({
  key: 'movieItemState',
  get:
    ({ cursor, index }) =>
    ({ get }) => {
      const movieList = get(filteredMovieListState(cursor));
      return movieList[index];
    },
});

export const movieCountPerCursorState = selectorFamily<number, number>({
  key: 'movieCountPerCursorState',
  get:
    (cursor) =>
    ({ get }) => {
      const movies = get(filteredMovieListState(cursor));
      return movies.length;
    },
});

export const checkIsLastMovieItem = selectorFamily<boolean, MovieItemPayload>({
  key: 'checkIsLastMovieItem',
  get:
    ({ cursor, index }) =>
    ({ get }) => {
      const cursorList = get(movieCursorListState);
      const lastCursor = get(movieCursorState);

      if (!cursorList.length) return false;
      if (cursor !== lastCursor) return false;
      if (cursor == 1) {
        return get(movieCountPerCursorState(1)) == index + 1;
      }

      const cursorSum = cursorList.reduce((acc, cur) => acc + cur);
      const cursorSumInput = cursorList.slice(0, cursor - 1).reduce((acc, cur) => acc + cur) + index + 1;

      return cursorSumInput === cursorSum;
    },
});
