import React, { memo, useCallback } from 'react';
import { useSetRecoilState } from 'recoil';
import { isFilterOpenState } from '@recoil/atoms/filterAtom';

const FilterButton = () => {
  const setIsFilterOpen = useSetRecoilState(isFilterOpenState);
  const onFilterClick = useCallback(() => {
    setIsFilterOpen(true);
  }, [setIsFilterOpen]);

  return (
    <button
      onClick={onFilterClick}
      className="py-1 px-3 shadow-md rounded-md text-sm bg-white text-gray-500 font-semibold scale-md"
    >
      Filter
    </button>
  );
};

export default memo(FilterButton);
