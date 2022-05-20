import { ApiType } from './tv.type';
import { apis } from '@api/api';
import { Content } from '@api/api.type';
import { cursorState, searchTermState } from '@recoil/common/atom';
import { SearchArgs } from '@api/api.type';
import { Loadable, RecoilValueReadOnly, selectorFamily, waitForNone } from 'recoil';

export const popularTVQuery = selectorFamily<Content[], number>({
  key: 'popularTVQuery',
  get: (cursor: number) => async () => {
    const tvs = (await apis.popularTVs(cursor)) || [];
    return tvs;
  },
});

export const onAirTVQuery = selectorFamily<Content[], number>({
  key: 'onAirTVQuery',
  get: (cursor: number) => async () => {
    const tvs = (await apis.onAirTVs(cursor)) || [];
    return tvs;
  },
});

export const searchTVQuery = selectorFamily<Content[], SearchArgs>({
  key: 'upcomingTVQuery',
  get:
    ({ cursor, searchTerm }) =>
    async () => {
      const tvs = (await apis.searchTVs({ cursor, searchTerm })) || [];
      return tvs;
    },
});

export const tvListState = selectorFamily<Loadable<Content[]>[], string>({
  key: 'tvListState',
  get:
    (path) =>
    ({ get }) => {
      const secondPath = path.split('/')[2] as ApiType;
      let apiFunc: (count: number) => RecoilValueReadOnly<Content[]>;

      switch (secondPath) {
        case 'popular': {
          apiFunc = (cursor: number) => popularTVQuery(cursor);
          break;
        }
        case 'onair': {
          apiFunc = (cursor: number) => onAirTVQuery(cursor);
          break;
        }
        case 'search': {
          const searchTerm = get(searchTermState(path));
          if (!searchTerm) return [];
          apiFunc = (cursor: number) => {
            return searchTVQuery({ cursor, searchTerm });
          };
          break;
        }
        default:
          throw new Error('error on tvListState');
      }

      const cursor = get(cursorState(path));
      const listArray = Array.from(Array(cursor).keys(), (count) => count + 1);
      return get(waitForNone(listArray.map((count) => apiFunc(count))));
    },
});

export const tvVideoQuery = selectorFamily<string[], number>({
  key: 'tvVideoQuery',
  get: (tvId) => async () => {
    const videoKeyList = await apis.tvVideo(tvId);
    return videoKeyList;
  },
});
