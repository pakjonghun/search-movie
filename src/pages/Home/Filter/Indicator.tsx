import React, { useCallback } from 'react';
import { popularityState } from '@recoil/atoms/filterAtom';
import { popularityMinMax } from '@recoil/selectors/filterSelector';
import { joinClass } from '@utils/styleUtil';
import { useRecoilValue, useSetRecoilState } from 'recoil';

const Indicator = () => {
  const setPopularityList = useSetRecoilState(popularityState);
  const [min, max] = useRecoilValue(popularityMinMax);

  const onPopularityClick = useCallback(
    (popularity: number) => {
      setPopularityList((pre) => {
        const isInclude = pre.includes(popularity);
        const isFullSelected = pre.length === 2;

        switch (isFullSelected) {
          case true:
            return [];
          default:
            if (isInclude) return pre.filter((p) => p !== popularity);
            else return [...pre, popularity];
        }
      });
    },
    [setPopularityList],
  );

  return (
    <ul className="flex justify-between w-full z-40">
      {Array.from(Array(10).keys()).map((popularity) => {
        const isSelected = max
          ? min <= popularity + 1 && popularity + 1 <= max
          : min === popularity + 1 || max === popularity + 1;

        return (
          <li
            key={popularity}
            onClick={() => onPopularityClick(popularity + 1)}
            className={joinClass(
              'flex items-center justify-center w-5 sm:w-6 aspect-square text-xs text-gray-50 rounded-full cursor-pointer z-40 select-none',
              isSelected ? 'bg-blue-400' : 'bg-gray-300',
            )}
          >
            {popularity + 1}
          </li>
        );
      })}
    </ul>
  );
};

export default Indicator;
