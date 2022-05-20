import { apis } from '@api/api';
import { Content } from '@api/api.type';
import { cursorState } from '@recoil/common/atom';
import { Loadable, selectorFamily, waitForNone } from 'recoil';

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

export const movieListState = selectorFamily<Loadable<Content[]>[], string>({
  key: 'movieListState',
  get:
    (path) =>
    ({ get }) => {
      const apiFunc = path.includes('popular') ? popularMovieQuery : upcomingMovieQuery;
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
