import React, { useCallback } from 'react';
import { isFilterOpenState } from '@recoil/filter/filter.atom';
import { useSetRecoilState } from 'recoil';

const FilterToggleButton = () => {
  const setIsFilterOpen = useSetRecoilState(isFilterOpenState);

  const onToggleClick = useCallback(() => {
    setIsFilterOpen((pre) => !pre);
  }, [setIsFilterOpen]);

  return (
    <button
      onClick={onToggleClick}
      className="py-1 px-3 text-sm bg-gray-700 text-gray-50 font-semibold rounded-md shadow-md scale-md z-20"
    >
      Filter
    </button>
  );
};

export default FilterToggleButton;
