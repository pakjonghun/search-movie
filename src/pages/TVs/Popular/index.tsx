import React from 'react';
import MainLayout from '@components/MainLayout';
import Content from '@components/Content';
import { useRecoilValueLoadable } from 'recoil';
import { useLocation } from 'react-router-dom';
import { tvListState } from '@recoil/tv/tv.selector';

const PopularTV = () => {
  const { pathname } = useLocation();
  const loadbaleContentList = useRecoilValueLoadable(tvListState(pathname));
  return (
    <MainLayout title={'Popular TV'}>
      <Content loadbaleContentList={loadbaleContentList} />
    </MainLayout>
  );
};

export default PopularTV;
