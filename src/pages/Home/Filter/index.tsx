import { isFilterOpenState } from '@recoil/Filter/FilterAtom';
import React from 'react';
import { useRecoilValue } from 'recoil';
import ApplyButtons from './FilterApplyButtons';
import FilterList from './FilterList';

const Filter = () => {
  const isFilterOpen = useRecoilValue(isFilterOpenState);

  if (!isFilterOpen) return null;

  return (
    <>
      <FilterList />
      <ApplyButtons />
    </>
  );
};

export default Filter;
