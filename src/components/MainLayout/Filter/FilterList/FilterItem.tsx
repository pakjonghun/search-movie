import React from 'react';

interface props {
  filterItem: React.ReactNode;
  filterName: string;
}

const FilterItem: React.FC<props> = ({ filterItem, filterName }) => {
  return (
    <li className="grid grid-cols-[1.3fr,4fr] py-4 px-3">
      <h3 className="pl-3 font-medium text-gray-800 text-sm">{filterName}</h3>
      {filterItem}
    </li>
  );
};

export default FilterItem;
