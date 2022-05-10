import React, { useCallback } from 'react';
import { joinClass } from '@utils/styleUtil';
import { useRecoilState } from 'recoil';
import { popularityState } from '@recoil/atoms/filterAtom';

const Popularity = () => {
  const [popularityList, setPopularityList] = useRecoilState(popularityState);

  const min = Math.min(...popularityList);
  const max = Math.max(...popularityList);

  const onPopularityClick = useCallback(
    (popularity: number) => {
      setPopularityList((pre) => {
        const isInclude = pre.includes(popularity);
        const newPopularityList = isInclude
          ? pre.filter((p) => p !== popularity)
          : [...pre, popularity];

        return newPopularityList;
      });
    },

    [setPopularityList],
  );

  return (
    <div className="relative flex w-full items-center">
      <div
        style={{ width: `${(min - 1) * 10 + 5}%` }}
        className="absolute top-1/2 -translate-y-1/2 w-full h-1 bg-gray-300 z-30"
      />
      <div
        style={{ width: `${(max - 1) * 10 + 5}%` }}
        className="absolute top-1/2 -translate-y-1/2 h-1 bg-blue-400 z-20"
      />
      <div className="absolute top-1/2 -translate-y-1/2 w-full h-1 bg-gray-300" />
      <ul className="flex justify-between w-full">
        {Array.from(Array(10).keys()).map((popularity) => {
          const isSelected = min <= popularity + 1 && popularity + 1 <= max;

          return (
            <li
              key={popularity}
              onClick={() => onPopularityClick(popularity + 1)}
              className={joinClass(
                'flex items-center justify-center w-5 sm:w-6 aspect-square text-xs text-gray-50 rounded-full cursor-pointer z-40',
                isSelected ? 'bg-blue-400' : 'bg-gray-300',
              )}
            >
              {popularity + 1}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Popularity;
