import { ApiType } from './movie.type';
import { apis } from '@api/api';
import { Content } from '@api/api.type';
import { cursorState, searchTermState } from '@recoil/common/atom';
import { SearchArgs } from '@api/api.type';
import { Loadable, RecoilValueReadOnly, selectorFamily, waitForNone } from 'recoil';

export const popularMovieQuery = selectorFamily<Content[], number>({
  key: 'popularMovieQuery',
  get: (cursor: number) => async () => {
    const movies = (await apis.popularMovies(cursor)) || [];
    return movies;
  },
});

export const upcomingMovieQuery = selectorFamily<Content[], number>({
  key: 'upcomingMovieQuery',
  get: (cursor: number) => async () => {
    const movies = (await apis.upcomingMovies(cursor)) || [];
    return movies;
  },
});

export const searchMovieQuery = selectorFamily<Content[], SearchArgs>({
  key: 'upcomingMovieQuery',
  get:
    ({ cursor, searchTerm }) =>
    async () => {
      const movies = (await apis.searchMovies({ cursor, searchTerm })) || [];
      return movies;
    },
});

export const movieListState = selectorFamily<Loadable<Content[]>[], string>({
  key: 'movieListState',
  get:
    (path) =>
    ({ get }) => {
      const secondPath = path.split('/')[2] as ApiType;
      let apiFunc: (count: number) => RecoilValueReadOnly<Content[]>;

      switch (secondPath) {
        case 'popular': {
          apiFunc = (cursor: number) => popularMovieQuery(cursor);
          break;
        }
        case 'upcoming': {
          apiFunc = (cursor: number) => upcomingMovieQuery(cursor);
          break;
        }
        case 'search': {
          const searchTerm = get(searchTermState(path));
          if (!searchTerm) return [];
          apiFunc = (cursor: number) => {
            return searchMovieQuery({ cursor, searchTerm });
          };
          break;
        }
        default:
          throw new Error('error on movieListState');
      }

      const cursor = get(cursorState(path));
      const listArray = Array.from(Array(cursor).keys(), (count) => count + 1);
      return get(waitForNone(listArray.map((count) => apiFunc(count))));
    },
});

export const movieVideoQuery = selectorFamily<string[], number>({
  key: 'movieVideoQuery',
  get: (movieId) => async () => {
    const videoKeyList = await apis.movieVideo(movieId);
    return videoKeyList;
  },
});
