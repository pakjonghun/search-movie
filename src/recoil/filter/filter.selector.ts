import { ContentType, Genre, ProgressWithArgs } from '@recoil/filter/filter.type';
import { apis } from '@api/api';
import { DefaultValue, selector, selectorFamily, constSelector } from 'recoil';
import { PopularityProgressBarType, CheckIsSelectedPopularityArgs } from './filter.type';
import { BarStyle, popularityState } from './filter.atom';
import { progressStyle } from './filter.constant';

export const progressStyleState = constSelector<Record<PopularityProgressBarType, BarStyle>>(progressStyle);

export const genresQuery = selectorFamily<Genre[], ContentType>({
  key: 'genresQuery',
  get: (contentType) => async () => {
    let apiFunc: () => Promise<Genre[]>;

    switch (contentType) {
      case 'movie': {
        apiFunc = apis.genresMovie;
        break;
      }

      case 'tv': {
        apiFunc = apis.genresTV;
        break;
      }

      default:
        throw new Error('error on genresQuery');
    }

    const genres = await apiFunc();
    return genres || [];
  },
});

export const caculateWidth = (popularity: number) => (!popularity ? 0 : popularity * 10 - 5);

export const progressWidthState = selectorFamily<string, ProgressWithArgs>({
  key: 'popularityWidthPercent',
  get:
    ({ barType, path }) =>
    ({ get }) => {
      const [min, max] = get(popularityState(path));

      switch (barType) {
        case 'base':
          return '100%';
        case 'hide':
          return `${caculateWidth(min)}%`;
        case 'percent':
          return `${caculateWidth(max)}%`;
        default:
          throw 'popularityWidthPercent error';
      }
    },
});

export const progressBarStyleState = selectorFamily<BarStyle, PopularityProgressBarType>({
  key: 'progressBarStyleState',
  get:
    (barType) =>
    ({ get }) => {
      const element = get(progressStyleState);
      return element[barType];
    },
});

export const checkIsSelectedPopularityState = selectorFamily<boolean, CheckIsSelectedPopularityArgs>({
  key: 'checkIsSelectedPopularityState',
  get:
    ({ popularity, path }) =>
    ({ get }) => {
      const popularities = get(popularityState(path));
      switch (popularities.length) {
        case 0:
          return false;
        case 1:
          return popularities[0] == popularity;
        case 2: {
          const [min, max] = popularities;
          return min <= popularity && popularity <= max;
        }
        default:
          throw new Error('checkIsSelectedPopularity error');
      }
    },
});

export const calculatePopularityState = selectorFamily<number[] | number, string>({
  key: 'calculatePopularityState',
  get:
    (path) =>
    ({ get }) => {
      return get(popularityState(path));
    },
  set:
    (path) =>
    ({ get, set }, popularity) => {
      if (Array.isArray(popularity) || popularity instanceof DefaultValue) return;
      const popularities = get(popularityState(path));
      switch (true) {
        case popularities.length == 2:
          set(popularityState(path), []);

          break;
        case popularities.includes(popularity): {
          const filtered = popularities.filter((p) => p !== popularity);
          set(popularityState(path), filtered);
          break;
        }
        case popularities.length == 1: {
          const temp = popularities[0] < popularity ? [popularities[0], popularity] : [popularity, popularities[0]];
          set(popularityState(path), temp);
          break;
        }
        case !popularities.length:
          set(popularityState(path), [popularity]);
          break;
        default:
          throw new Error('calculatePopularities error');
      }
    },
});
