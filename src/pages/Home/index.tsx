import React from 'react';
import MainLayout from '@components/MainLayout';
import SearchInput from './SearchInput';
import HomeContextProvider from '@contexts/home';
import Filter from './Filter';

const Home = () => {
  return (
    <MainLayout title="title">
      <HomeContextProvider>
        <div className="w-fit mx-auto mt-5">
          <SearchInput classes="sm:w-96" />
          <Filter />
        </div>
      </HomeContextProvider>
    </MainLayout>
  );
};

export default Home;
