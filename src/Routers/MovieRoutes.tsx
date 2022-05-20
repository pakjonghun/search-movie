import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Popular from '@pages/Movies/Popular';
import Upcoming from '@pages/Movies/Upcoming';
import Search from '@pages/Movies/Search';
import Detail from '@pages/Detail';
import NotFound from '@components/NotFound';

const MovieRoutes = () => {
  return (
    <Routes>
      <Route path="popular" element={<Popular />} />
      <Route path="upcoming" element={<Upcoming />} />
      <Route path="search" element={<Search />} />
      <Route path=":id" element={<Detail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default MovieRoutes;
