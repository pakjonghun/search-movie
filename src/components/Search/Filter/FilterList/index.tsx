import React from 'react';
import { filterList } from './filter.constants';
import FilterItem from './FilterItem';
import { v4 as uuidv4 } from 'uuid';

const Filter = () => {
  return (
    <ul className="divide-y-2">
      {filterList.map((item) => (
        <FilterItem key={uuidv4()} {...item} />
      ))}
    </ul>
  );
};

export default Filter;
