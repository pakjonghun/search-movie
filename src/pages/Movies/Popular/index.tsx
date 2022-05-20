import React from 'react';
import MainLayout from '@components/MainLayout';
import Content from '@components/Content';
import { useRecoilValueLoadable } from 'recoil';
import { movieListState } from '@recoil/movie/movie.selector';
import { useLocation } from 'react-router-dom';

const PopularMovie = () => {
  const { pathname } = useLocation();
  const loadbaleContentList = useRecoilValueLoadable(movieListState(pathname));
  const title = 'Popular Movie';

  return (
    <MainLayout title={title}>
      <Content loadbaleContentList={loadbaleContentList} />
    </MainLayout>
  );
};

export default PopularMovie;
