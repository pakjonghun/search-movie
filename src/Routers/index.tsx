import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MovieRoutes from './MovieRoutes';
import TVRoutes from './TVsRoutes';
import NotFound from '@components/NotFound';

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/movies/popular" />} />
      <Route path="movies/*" element={<MovieRoutes />} />
      <Route path="tvs/*" element={<TVRoutes />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
