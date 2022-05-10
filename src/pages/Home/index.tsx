import React, { useEffect, useState } from 'react';
import MainLayout from '@components/MainLayout';
import SearchInput from './SearchInput';
import Filter from './Filter';
import { readNextDescriptor } from '@testing-library/user-event/dist/types/utils';

type Response<T> = {
  page?: number;
  results?: T;
  total_pages?: number;
  total_results?: number;
  status_message?: string;
  status_code?: number;
};

const Home = () => {
  return (
    <MainLayout title="title">
      <div className="w-fit mx-auto mt-5">
        <SearchInput classes="sm:w-96" />
        <Filter />
      </div>
      <article>
        <ul>
          {/* {movies.map((v) => (
            <li key={v.id}>{v.title}</li>
          ))} */}
        </ul>
      </article>
    </MainLayout>
  );
};

export default Home;
