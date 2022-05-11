import React from 'react';
import MainLayout from '@components/MainLayout';
import SearchInput from './SearchInput';
import Filter from './Filter';
import Content from './Content';
import ContentSelector from './ContentSelector';

const Home = () => {
  return (
    <MainLayout title="title">
      <div className="w-fit mx-auto mt-5">
        <SearchInput classes="sm:w-[35rem]" />
        <Filter />
      </div>
      <ContentSelector />
      <Content />
    </MainLayout>
  );
};

export default Home;
