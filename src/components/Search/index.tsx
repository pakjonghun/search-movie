import React from 'react';
import Filter from './Filter';
import SearchInput from './SearchInput';
import SearchLayout from './SearchLayout';

const SearchComponent = () => {
  return (
    <SearchLayout>
      <SearchInput />
      <Filter />
    </SearchLayout>
  );
};

export default SearchComponent;
