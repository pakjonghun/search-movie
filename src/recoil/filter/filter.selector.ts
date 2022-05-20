import { apis } from '@api/api';
import { DefaultValue, selector, selectorFamily, constSelector } from 'recoil';
import { PopularityProgressBarType } from './filter.type';
import { BarStyle, popularityState } from './filter.atom';
import { progressStyle } from './filter.constant';

export const progressStyleState = constSelector<Record<PopularityProgressBarType, BarStyle>>(progressStyle);

export const genresQuery = selector({
  key: 'genresQuery',
  get: async () => {
    const genres = await apis.genres();
    return genres;
  },
});

export const caculateWidth = (popularity: number) => (!popularity ? 0 : popularity * 10 - 5);

export const progressWidthState = selectorFamily<string, PopularityProgressBarType>({
  key: 'popularityWidthPercent',
  get:
    (progressBarType) =>
    ({ get }) => {
      const [min, max] = get(popularityState);

      switch (progressBarType) {
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

export const checkIsSelectedPopularityState = selectorFamily<boolean, number>({
  key: 'checkIsSelectedPopularityState',
  get:
    (popularity) =>
    ({ get }) => {
      const popularities = get(popularityState);
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

export const calculatePopularityState = selector<number[] | number>({
  key: 'calculatePopularityState',
  get: ({ get }) => {
    return get(popularityState);
  },
  set: ({ get, set }, popularity) => {
    if (Array.isArray(popularity) || popularity instanceof DefaultValue) return;
    const popularities = get(popularityState);
    switch (true) {
      case popularities.length == 2:
        set(popularityState, []);

        break;
      case popularities.includes(popularity): {
        const filtered = popularities.filter((p) => p !== popularity);
        set(popularityState, filtered);
        break;
      }
      case popularities.length == 1: {
        const temp = popularities[0] < popularity ? [popularities[0], popularity] : [popularity, popularities[0]];
        set(popularityState, temp);
        break;
      }
      case !popularities.length:
        set(popularityState, [popularity]);
        break;
      default:
        throw new Error('calculatePopularities error');
    }
  },
});
