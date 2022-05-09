import React, { useCallback } from 'react';
import { joinClass } from '@utils/styleUtil';
import { useHomeContext } from '@contexts/home';
import { ACTIONS } from '@contexts/home/homeActions';

const Popularity = () => {
  const [state, dispatch] = useHomeContext();

  const onPopularityClick = useCallback(
    (popularity: number) => {
      dispatch(ACTIONS.ADDPOPULARITY(popularity));
    },
    [dispatch],
  );

  const popularityList = state.popularity;
  const min = Math.min(...popularityList);
  const max = Math.max(...popularityList);

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
        {Array.from(Array(10).keys()).map((v) => {
          return (
            <li
              onClick={() => onPopularityClick(v + 1)}
              key={v}
              className={joinClass(
                'flex items-center justify-center w-5 sm:w-6 aspect-square text-xs text-gray-50 rounded-full cursor-pointer z-40',
                min <= v + 1 && v + 1 <= max ? 'bg-blue-400' : 'bg-gray-300',
              )}
            >
              {v + 1}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Popularity;
