import React, { Suspense } from 'react';
import MainLayout from '@components/MainLayout';
import SearchInput from './SearchInput';
import Filter from './Filter';
import SearchLayout from './SearchLayout';

const Home = () => {
  return (
    <MainLayout title="title">
      <SearchLayout>
        <SearchInput />

        <Filter />
      </SearchLayout>
    </MainLayout>
  );
};

export default Home;
