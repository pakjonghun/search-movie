import React, { FC, useCallback, useState } from 'react';
import { joinClass } from '@utils/styleUtil';
import FilterToggleButton from './Filter/FilterToggleButton';
import { useRecoilState } from 'recoil';
import { searchTermState } from '@recoil/filter/filter.atom';

interface props {
  classes?: string;
}

const SearchInput: FC<props> = ({ classes }) => {
  const [term, setTerm] = useRecoilState(searchTermState);

  const onInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setTerm(event.target.value);
    },
    [setTerm],
  );

  return (
    <label
      htmlFor="searchTitle"
      className={joinClass(
        'flex items-center w-full mx-auto mt-5 px-2 rounded-sm shadow-sm bg-gray-200 border-[1px] border-gray-300 ring-gray-300 focus-within:ring-1',
        classes ? classes : '',
      )}
    >
      <svg className="w-5 h-5 fill-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z" />
      </svg>
      <input
        value={term}
        onChange={onInputChange}
        type="text"
        id="searchTitle"
        placeholder="Search movie title"
        className="flex-1 p-2 mx-2 bg-transparent text-gray-500 placeholder:text-sm focus:outline-none"
      />
      <FilterToggleButton />
    </label>
  );
};

export default SearchInput;
