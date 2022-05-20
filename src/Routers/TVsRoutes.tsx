import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Popular from '@pages/TVs/Popular';
import Onair from '@pages/TVs/OnAir';
import Detail from '@pages/Detail';
import NotFound from '@components/NotFound';
import SearchTV from '@pages/TVs/Search';

const TVRoutes = () => {
  return (
    <Routes>
      <Route path="onair" element={<Onair />} />
      <Route path="popular" element={<Popular />} />
      <Route path="search" element={<SearchTV />} />
      <Route path=":id" element={<Detail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default TVRoutes;
