import React from 'react';
import MainLayout from '@components/MainLayout';
import SearchInput from './SearchInput';
import Filter from './Filter';
import SearchLayout from './SearchLayout';
import Movie from './Movie';

const Home = () => {
  return (
    <MainLayout title="title">
      <SearchLayout>
        <SearchInput />
        <Filter />
      </SearchLayout>
      <React.Suspense fallback={<div>Loading</div>}>
        <Movie />
      </React.Suspense>
    </MainLayout>
  );
};

export default Home;
