import React, { useEffect } from 'react';
import MainLayout from '@components/MainLayout';
import SearchInput from './SearchInput';
import HomeContextProvider from '@contexts/home';
import Filter from './Filter';
import useGetRequest from '@hooks/useGetRequest';

type PopularMovie = {
  adult: boolean;
  backdrop_path: string;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: false;
  vote_average: number;
  vote_count: number;
};

type Response<T> = {
  page?: number;
  results?: T;
  total_pages?: number;
  total_results?: number;
  status_message?: string;
  status_code?: number;
};

const Home = () => {
  const { fetch, isError, isLoading } = useGetRequest();

  useEffect(() => {
    (async function () {
      const res = await fetch<Response<PopularMovie>>('/movie/popular', { api_key: process.env.KEY, page: 2 });
      console.log(res);
    })();
  }, [fetch]);

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
