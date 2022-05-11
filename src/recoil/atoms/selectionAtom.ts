import { atom } from 'recoil';
import { SelectValue } from 'types';

export const selectorState = atom<SelectValue>({
  key: 'selectorState',
  default: 'none',
});
