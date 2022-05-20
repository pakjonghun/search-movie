import React from 'react';
import { isFilterOpenState } from '@recoil/filter/filter.atom';
import { useRecoilValue } from 'recoil';
import ApplyButtons from './FilterApplyButtons';
import FilterList from './FilterList';

const Filter = () => {
  const isFilterOpen = useRecoilValue(isFilterOpenState);

  if (!isFilterOpen) return null;

  return (
    <>
      <div className="fixed inset-0 backdrop-brightness-50" />
      <div className="absolute top-12 w-full bg-gray-50 rounded-sm shadow-md z-20 ">
        <FilterList />
        <ApplyButtons />
      </div>
    </>
  );
};

export default Filter;
