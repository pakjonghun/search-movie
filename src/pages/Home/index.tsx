import React from 'react';
import MainLayout from '@components/MainLayout';
import SearchInput from './SearchInput';
import Filter from './Filter';
import Content from './Content';

const Home = () => {
  return (
    <MainLayout title="title">
      <div className="w-fit mx-auto mt-5">
        <SearchInput classes="sm:w-[35rem]" />
        <Filter />
      </div>
      <ul className="grid grid-cols-4 gap-x-1 justify-center w-fit ml-3 bg-gray-100 rounded-md shadow-md text-gray-700 font-medium text-sm overflow-hidden">
        <li className="hover:text-gray-50 hover:bg-blue-500 py-2 px-4 scale-md cursor-pointer">
          구분없음
        </li>
        <li className="hover:text-gray-50 hover:bg-blue-500 py-2 px-4 scale-md cursor-pointer">
          평점구분
        </li>
        <li className="hover:text-gray-50 hover:bg-blue-500 py-2 px-4 scale-md cursor-pointer">
          장르구분
        </li>
        <li className="hover:text-gray-50 hover:bg-blue-500 py-2 px-4 scale-md cursor-pointer">
          개봉날짜
        </li>
      </ul>
      <Content />
    </MainLayout>
  );
};

export default Home;
