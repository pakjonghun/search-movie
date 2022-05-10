import React, { useMemo } from 'react';
import Switch from './Switch';
import Genre from './Genre';
import Popularity from './Popularity';
import FilterItem from './FilterItem';
import ApplyButtons from './ApplyButtons';
import { useRecoilValue } from 'recoil';
import { isFilterOpenState } from '@recoil/atoms/filterAtom';

const Filter = () => {
  const isFilterOpen = useRecoilValue(isFilterOpenState);

  const filters = useMemo(
    () => [
      { filterName: '컨텐츠', filter: <Switch /> },
      { filterName: '평 점', filter: <Popularity /> },
      { filterName: '장 르', filter: <Genre /> },
    ],
    [],
  );
  if (!isFilterOpen) return null;
  return (
    <div className="mt-1 bg-gray-50 shadow-md origin-top">
      <ul className="divide-y-2">
        {filters.map((item) => (
          <FilterItem key={item.filterName} {...item} />
        ))}
      </ul>
      <ApplyButtons />
    </div>
  );
};

export default Filter;
