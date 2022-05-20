import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Popular from '@pages/TVs/Popular';
import Onair from '@pages/TVs/Onair';
import NotFound from '@components/NotFound';

const TVRoutes = () => {
  return (
    <Routes>
      <Route path="onair" element={<Onair />} />
      <Route path="popular" element={<Popular />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default TVRoutes;
