import React, { FC } from 'react';
import Switch from './Switch';
import Genre from './Genre';
import Popularity from './Popularity';

interface props {
  classes?: string;
}

const Filter: FC<props> = ({ classes }) => {
  const FilterComponent = (
    <ul className="space-y-3">
      <li className="grid grid-cols-[1fr,2fr] place-items-center py-2 bg-red-50">
        <span className="font-medium text-gray-800 text-sm">컨텐츠 선택</span>
        <Switch />
      </li>
      <li className="grid grid-cols-[1fr,2fr] place-items-center py-2 bg-red-50">
        <span className="font-medium text-gray-800 text-sm">장르 선택</span>
        <Genre />
      </li>
      <li className="grid grid-cols-[1fr,2fr] place-items-center py-2 bg-red-50">
        <span className="font-medium text-gray-800 text-sm">평점 선택</span>
        <Popularity />
      </li>
    </ul>
  );

  return FilterComponent;
};

export default Filter;
