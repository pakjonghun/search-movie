import React from 'react';
import MainLayout from '@components/MainLayout';
import { useRecoilValueLoadable } from 'recoil';
import { movieListState } from '@recoil/movie/movie.selector';
import Content from '@components/Content';
import { useLocation } from 'react-router-dom';

const SearchMovie = () => {
  const { pathname } = useLocation();
  const loadbaleContentList = useRecoilValueLoadable(movieListState(pathname));
  return (
    <MainLayout title="Search Movie">
      <Content loadbaleContentList={loadbaleContentList} />
    </MainLayout>
  );
};

export default SearchMovie;
