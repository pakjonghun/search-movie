import { selector } from 'recoil';
import { popularityState } from '@recoil/atoms/filterAtom';

export const popularityMinMax = selector({
  key: 'popularityMinMax',
  get: ({ get }) => {
    const popularityList = get(popularityState);

    switch (popularityList.length) {
      case 0:
        return [0, 0];
      case 1:
        return [popularityList[0], 0];
      default:
        return [Math.min(...popularityList), Math.max(...popularityList)];
    }
  },
});
