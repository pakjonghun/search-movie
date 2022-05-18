import { searchTermState } from './../filter/filter.atom';
import { apis } from './../../api/api';
import { Movie } from 'api/api.type';
import { selector, selectorFamily } from 'recoil';
import { MovieItemPayload } from './movie.type';
import { popularityState, selectedGenreIdsState } from '@recoil/filter/filter.atom';
import { movieCursorListState, movieCursorState } from './movie.atom';

export const movieQuery = selectorFamily<Movie[], number>({
  key: 'movieQuery',
  get: (cursor: number) => async () => {
    const movies = await apis.movies(cursor);
    return movies || [];
  },
});

export const movieVideoQuery = selectorFamily<string[], number>({
  key: 'movieVideoQuery',
  get: (movieId) => async () => {
    const videoKeyList = await apis.movieVideo(movieId);
    return videoKeyList;
  },
});

export const movieTotlaCursorQuery = selector<number>({
  key: 'movieTotlaCursorQuery',
  get: async ({ get }) => {
    const cursor = get(movieCursorState);
    const totalCursor = await apis.movieTotalCursor(cursor);
    return totalCursor || 0;
  },
});

export const filteredMovieListState = selectorFamily<Movie[], number>({
  key: 'movieItemState',
  get:
    (cursor) =>
    ({ get }) => {
      const searchTerm = get(searchTermState);
      const popularities = get(popularityState);
      const genres = get(selectedGenreIdsState);
      const movies = get(movieQuery(cursor)).filter(({ title, adult, genre_ids, vote_average }) => {
        const isNotAdult = !adult;
        const isTitleContain = title.includes(searchTerm);
        const isGenresContain = checkIsGenresInclude(genre_ids);
        const isPopularityMatch = checkIsPopularityMatch(vote_average);
        return isNotAdult && isTitleContain && isGenresContain && isPopularityMatch;
      });

      function checkIsGenresInclude(genre_ids: number[]) {
        switch (true) {
          case genres.length == 0:
            return true;
          case genres.length > 0: {
            const isInclude = genre_ids.some((genreId) => genres.includes(genreId));
            return isInclude;
          }

          default:
            throw new Error('error on movieItemState');
        }
      }

      function checkIsPopularityMatch(vote_average: number) {
        switch (popularities.length) {
          case 0:
            return true;
          case 1:
            return popularities[0] == vote_average;
          case 2: {
            const [min, max] = popularities;
            return min <= vote_average && vote_average <= max;
          }
          default:
            throw new Error('error on moviesByPopularities');
        }
      }

      return movies;
    },
});

export const movieItemState = selectorFamily<Movie, MovieItemPayload>({
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
