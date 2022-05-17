import { apis } from '../../api/api';
import { TV } from 'api/api.type';
import { selector, selectorFamily } from 'recoil';
import { TVItemPayload } from './tv.type';
import { popularityState, searchTermState, selectedGenreIdsState } from '@recoil/filter/filter.atom';
import { tvCursorListState, tvCursorState } from './tv.atom';

export const tvQuery = selectorFamily<TV[], number>({
  key: 'tvQuery',
  get: (cursor: number) => async () => {
    const tvs = await apis.tvs(cursor);
    return tvs || [];
  },
});

export const tvVideoQuery = selectorFamily<string[], number>({
  key: 'tvVideoQuery',
  get: (tvId) => async () => {
    const videoKeyList = await apis.tvVideo(tvId);
    return videoKeyList || [];
  },
});

export const tvTotlaCursorQuery = selector<number>({
  key: 'tvTotlaCursorQuery',
  get: async ({ get }) => {
    const cursor = get(tvCursorState);
    const totalCursor = await apis.tvsTotalCursor(cursor);
    return totalCursor || 0;
  },
});

export const filteredTVListState = selectorFamily<TV[], number>({
  key: 'movieItemState',
  get:
    (cursor) =>
    ({ get }) => {
      const searchTerm = get(searchTermState);
      const popularities = get(popularityState);
      const genres = get(selectedGenreIdsState);

      const tvs = get(tvQuery(cursor)).filter(({ name, genre_ids, vote_average }) => {
        const isTitleContain = name.includes(searchTerm);
        const isGenresContain = checkIsGenresInclude(genre_ids);
        const isPopularityMatch = checkIsPopularityMatch(vote_average);

        return isTitleContain && isGenresContain && isPopularityMatch;
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

      return tvs;
    },
});

export const tvItemState = selectorFamily<TV, TVItemPayload>({
  key: 'tvItemState',
  get:
    ({ cursor, index }) =>
    ({ get }) => {
      const tvList = get(filteredTVListState(cursor));
      return tvList[index];
    },
});

export const tvCountPerCursorState = selectorFamily<number, number>({
  key: 'tvCountPerCursorState',
  get:
    (cursor) =>
    ({ get }) => {
      const tvList = get(filteredTVListState(cursor));
      return tvList.length;
    },
});

export const checkIsLastTVItem = selectorFamily<boolean, TVItemPayload>({
  key: 'checkIsLastTVItem',
  get:
    ({ cursor, index }) =>
    ({ get }) => {
      const cursorList = get(tvCursorListState);
      const lastCursor = get(tvCursorState);

      if (!cursorList.length) return false;
      if (cursor !== lastCursor) return false;
      if (cursor == 1) {
        return get(tvCountPerCursorState(1)) == index + 1;
      }

      const cursorSum = cursorList.reduce((acc, cur) => acc + cur);
      const cursorSumInput = cursorList.slice(0, cursor - 1).reduce((acc, cur) => acc + cur) + index + 1;

      return cursorSumInput === cursorSum;
    },
});
