import React, { useCallback } from 'react';
import { isFilterOpenState } from '@recoil/Filter/FilterAtom';
import { useSetRecoilState } from 'recoil';

const FilterToggleButton = () => {
  const setIsFilterOpen = useSetRecoilState(isFilterOpenState);

  const toggleFilter = useCallback(() => {
    setIsFilterOpen((pre) => !pre);
  }, [setIsFilterOpen]);

  return (
    <button
      onClick={toggleFilter}
      className="py-1 px-3 shadow-md rounded-md text-sm bg-white text-gray-500 font-semibold scale-md"
    >
      Filter
    </button>
  );
};

export default FilterToggleButton;
