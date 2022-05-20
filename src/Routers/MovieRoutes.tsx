import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Popular from '@pages/Movies/Popular';
import Upcoming from '@pages/Movies/Upcoming';
import NotFound from '@components/NotFound';

const MovieRoutes = () => {
  return (
    <Routes>
      <Route path="popular" element={<Popular />} />
      <Route path="upcoming" element={<Upcoming />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default MovieRoutes;
