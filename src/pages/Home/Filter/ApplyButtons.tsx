import React, { useCallback } from 'react';
import { useSetRecoilState } from 'recoil';
import {
  genreState,
  isFilterOpenState,
  isTvOnState,
  popularityState,
} from '@recoil/atoms/filterAtom';

const ApplyButtons = () => {
  const setIsFilterOpen = useSetRecoilState(isFilterOpenState);
  const setIsTvOn = useSetRecoilState(isTvOnState);
  const setGenre = useSetRecoilState(genreState);
  const setPopularity = useSetRecoilState(popularityState);

  const resetFilter = useCallback(() => {
    setIsFilterOpen(false);
    setIsTvOn(false);
    setGenre([]);
    setPopularity([]);
  }, [setPopularity, setIsFilterOpen, setIsTvOn, setGenre]);

  return (
    <div className="flex justify-center space-x-3 py-3 mr-5">
      <button
        onClick={resetFilter}
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
