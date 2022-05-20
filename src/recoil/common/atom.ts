import { atomFamily } from 'recoil';

export const cursorState = atomFamily<number, string>({
  key: 'cursorState',
  default: 1,
});

export const scrollTopState = atomFamily<number, string>({
  key: 'movieScrolTopState',
  default: 0,
});

export const searchTermState = atomFamily<string, string>({
  key: 'searchTermState',
  default: '',
});
