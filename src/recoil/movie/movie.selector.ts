import { genresState, searchTermState } from './../filter/filter.atom';
import { apis } from './../../api/api';
import { Movie } from 'api/api.type';
import { Loadable, selector, selectorFamily, waitForNone } from 'recoil';
import { MovieItemPayload } from './movie.type';
import { popularityState, selectedGenreIdsState } from '@recoil/filter/filter.atom';
import { movieCursorListState, movieCursorState } from './movie.atom';
import { checkIsGenresInclude, checkIsPopularityMatch } from '@pages/Home/Movie/movie.util';

export const movieQuery = selectorFamily<Movie[], number>({
  key: 'movieQuery',
  get: (cursor: number) => async () => {
    const movies = (await apis.popularMovies(cursor)) || [];
    return movies;
  },
});

export const movieListState = selector<Loadable<Movie[]>[]>({
  key: 'movieListState',
  get: ({ get }) => {
    const cursor = get(movieCursorState);
    const listArray = Array.from(Array(cursor).keys(), (count) => count + 1);
    return get(waitForNone(listArray.map((count) => movieQuery(count))));
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
    const query = get(searchTermState);
    const cursor = get(movieCursorState);
    const totalCursor = await apis.movieTotalCursor(cursor, query || '');
    return totalCursor || 0;
  },
});

export const isMovieListHasNoResult = selector<boolean>({
  key: 'isMovieListHasNoResult',
  get: ({ get }) => {
    const cursor = get(movieCursorState);
    const filteredList = get(filteredMovieListState(cursor));
    return filteredList.length === 0;
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

export const movieItemState = selectorFamily<Movie | undefined, MovieItemPayload>({
  key: 'movieItemState',
  get:
    ({ cursor, id }) =>
    ({ get }) => {
      const movieList = get(filteredMovieListState(cursor));
      return movieList.find(({ id: movieId }) => movieId === id);
    },
});

export const movieCountPerCursorState = selectorFamily<number[], number>({
  key: 'movieCountPerCursorState',
  get:
    (cursor) =>
    ({ get }) => {
      const movies = get(filteredMovieListState(cursor));
      return movies.map(({ id }) => id);
    },
});

export const checkIsLastMovieItem = selectorFamily<boolean, number>({
  key: 'checkIsLastMovieItem',
  get:
    (id) =>
    ({ get }) => {
      const lastCursor = get(movieCursorState);
      const genres = get(genresState).map(({ id }) => id);
      const popularities = get(popularityState);
      const searchTerm = get(searchTermState);

      const movieList = get(movieQuery(lastCursor)).filter(({ adult, vote_average, title, genre_ids }) => {
        const isNotAdult = !adult;
        const isTermContain = title.includes(searchTerm);
        const isGenresInclude = checkIsGenresInclude(genre_ids, genres);
        const isPopularitiesMatch = checkIsPopularityMatch(vote_average, popularities);
        return isNotAdult && isTermContain && isGenresInclude && isPopularitiesMatch;
      });

      return movieList[movieList.length - 1]?.id === id;
    },
});

export const totalMovieCountState = selector<number>({
  key: 'totalMovieCountState',
  get: ({ get }) => {
    const totalList = get(movieCursorListState);
    if (!totalList.length) return 0;
    const total = totalList.reduce((acc, cur) => cur + acc);
    return total;
  },
});
