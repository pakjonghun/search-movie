import React from 'react';
import MainLayout from '@components/MainLayout';
import SearchInput from './SearchInput';
import Filter from './Filter';
import SearchLayout from './SearchLayout';
import ContentLayouot from './ContentLayout';

const Home = () => {
  return (
    <MainLayout title="Home">
      <SearchLayout>
        <SearchInput />
        <Filter />
      </SearchLayout>
      <ContentLayouot />
    </MainLayout>
  );
};

export default Home;
