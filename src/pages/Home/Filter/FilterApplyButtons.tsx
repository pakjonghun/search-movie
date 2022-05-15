import React from 'react';
import {
  filterContentState,
  isFilterOpenState,
  popularityState,
  selectedGenreIdsState,
} from '@recoil/filter/filter.atom';
import { useRecoilCallback } from 'recoil';

const ApplyButtons = () => {
  const onCancel = useRecoilCallback(({ reset }) => () => {
    reset(isFilterOpenState);
    reset(isFilterOpenState);
    reset(filterContentState);
    reset(selectedGenreIdsState);
    reset(popularityState);
  });

  return (
    <div className="flex justify-center space-x-3 py-3 mr-5">
      <button
        onClick={() => onCancel()}
        className="px-5 py-2 bg-gray-200 font-medium text-xs text-gray-800 scale-md rounded-md shadow-md"
      >
        취소
      </button>
      <button className="px-5 py-2 bg-blue-400 font-medium text-xs scale-md text-gray-50 rounded-md shadow-md">
        적용
      </button>
    </div>
  );
};

export default ApplyButtons;
