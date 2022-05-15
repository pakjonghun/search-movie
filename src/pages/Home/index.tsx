import React from 'react';
import MainLayout from '@components/MainLayout';
import SearchInput from './SearchInput';
import Filter from './Filter';
import SearchLayout from './SearchLayout';
import Movie from './Movie';
import ContentLayouot from './ContentLayout';

const Home = () => {
  return (
    <MainLayout title="title">
      <SearchLayout>
        <SearchInput />
        <Filter />
      </SearchLayout>

      <ContentLayouot>
        <Movie />
      </ContentLayouot>
    </MainLayout>
  );
};

export default Home;
