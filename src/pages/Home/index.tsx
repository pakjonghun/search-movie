import React from 'react';
import MainLayout from '@components/MainLayout';
import SearchInput from './SearchInput';
import Filter from './Filter';
import Content from './Content';

const Home = () => {
  return (
    <MainLayout title="title">
      <div className="w-fit mx-auto mt-5">
        <SearchInput classes="sm:w-96" />
        <Filter />
      </div>
      <Content />
    </MainLayout>
  );
};

export default Home;
