import React from 'react';
import { filterList } from './filter.constants';
import FilterItem from './FilterItem';

const Filter = () => {
  return (
    <ul className="divide-y-2">
      {filterList.map((item) => (
        <FilterItem key={item.filterName} {...item} />
      ))}
    </ul>
  );
};

export default Filter;
