import React, { FC } from 'react';

interface props {
  filter: React.ReactNode;
  filterName: string;
}

const FilterItem: FC<props> = ({ filter, filterName }) => {
  return (
    <li className="grid grid-cols-[1.3fr,4fr] py-4 px-3">
      <h3 className="pl-3 font-medium text-gray-800 text-sm">{filterName}</h3>
      {filter}
    </li>
  );
};

export default FilterItem;
