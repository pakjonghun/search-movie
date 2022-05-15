import { atom } from 'recoil';

export const movieCursorState = atom<number>({
  key: 'movieCursorState',
  default: 1,
});
