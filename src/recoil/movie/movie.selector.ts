import { apis } from './../../api/api';
import { Movie } from 'api/api.type';
import { selectorFamily } from 'recoil';
import { MovieItemPayload } from './movie.type';
import { popularityState } from '@recoil/filter/filter.atom';
import { movieCursorListState, movieCursorState } from './movie.atom';

export const movieQuery = selectorFamily<Movie[], number>({
  key: 'movieQuery',
  get: (cursor: number) => async () => {
    const movies = await apis.movies(cursor);
    return movies || [];
  },
});

export const movieCountPerCursorState = selectorFamily<number, number>({
  key: 'movieCountPerCursorState',
  get:
    (cursor: number) =>
    ({ get }) => {
      const movies = get(movieQuery(cursor)).filter((movie) => movie.adult === false);

      const popularities = get(popularityState);
      let moviesLength = movies.length;

      switch (popularities.length) {
        case 0:
          break;
        case 1: {
          const filterFunc = ({ vote_average }: Movie) => popularities[0] == vote_average;
          moviesLength = movies.filter(filterFunc).length;
          break;
        }
        case 2: {
          const [min, max] = popularities;
          const filterFunc = ({ vote_average }: Movie) => min <= vote_average && vote_average <= max;
          moviesLength = movies.filter(filterFunc).length;
          break;
        }
        default:
          throw new Error('error on movieCountPerCursorState');
      }
      return moviesLength;
    },
});

export const movieItemState = selectorFamily<Movie | null, MovieItemPayload>({
  key: 'movieItemState',
  get:
    ({ cursor, index }) =>
    ({ get }) => {
      let movies = get(movieQuery(cursor)).filter((movie) => movie.adult === false);
      const popularities = get(popularityState);

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

      const movie = movies[index];

      return movie;
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
