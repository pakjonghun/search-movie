import React, { useCallback } from 'react';
import { isFilterOpenState } from '@recoil/filter/filter.atom';
import { useRecoilCallback } from 'recoil';
import { movieReTryCountState } from '@recoil/movie/movie.atom';

const FilterToggleButton = () => {
  const onToggleClick = useRecoilCallback(({ set, reset }) => () => {
    set(isFilterOpenState, (pre) => !pre);
    reset(movieReTryCountState);
  });

  const toggleFilter = useCallback(() => {
    onToggleClick();
  }, [onToggleClick]);

  return (
    <button
      onClick={toggleFilter}
      className="py-1 px-3 text-sm bg-gray-700 text-gray-50 font-semibold rounded-md shadow-md scale-md z-20"
    >
      Filter
    </button>
  );
};

export default FilterToggleButton;
