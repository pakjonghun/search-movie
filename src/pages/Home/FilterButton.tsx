import React, { memo, useCallback } from 'react';
import { ACTIONS } from '@contexts/home/homeActions';
import { useHomeDispatchContext } from '@contexts/home';

const FilterButton = () => {
  const dispatch = useHomeDispatchContext();

  const onFilterClick = useCallback(() => {
    dispatch(ACTIONS.TOGGLEFILTER);
  }, [dispatch]);

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
