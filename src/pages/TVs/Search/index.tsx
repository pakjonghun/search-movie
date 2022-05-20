import React from 'react';
import MainLayout from '@components/MainLayout';
import { useRecoilValueLoadable } from 'recoil';
import Content from '@components/Content';
import { useLocation } from 'react-router-dom';
import { tvListState } from '@recoil/tv/tv.selector';

const SearchTV = () => {
  const { pathname } = useLocation();
  const loadbaleContentList = useRecoilValueLoadable(tvListState(pathname));
  return (
    <MainLayout title="Search TV">
      <Content loadbaleContentList={loadbaleContentList} />
    </MainLayout>
  );
};

export default SearchTV;
