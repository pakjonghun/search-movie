import Loading from '@components/Loading';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
const Popular = React.lazy(() => import('@pages/TVs/Popular'));
const OnAir = React.lazy(() => import('@pages/TVs/OnAir'));
const Detail = React.lazy(() => import('@pages/Detail'));
const SearchTV = React.lazy(() => import('@pages/TVs/Search'));
const NotFound = React.lazy(() => import('@components/NotFound'));

const TVRoutes = () => {
  return (
    <Routes>
      <Route
        path="onair"
        element={
          <React.Suspense fallback={<Loading classes="h-screen" />}>
            <OnAir />
          </React.Suspense>
        }
      />
      <Route
        path="popular"
        element={
          <React.Suspense fallback={<Loading classes="h-screen" />}>
            <Popular />
          </React.Suspense>
        }
      />
      <Route
        path="search"
        element={
          <React.Suspense fallback={<Loading classes="h-screen" />}>
            <SearchTV />
          </React.Suspense>
        }
      />
      <Route
        path=":id"
        element={
          <React.Suspense fallback={<Loading classes="h-screen" />}>
            <Detail />
          </React.Suspense>
        }
      />
      <Route
        path="*"
        element={
          <React.Suspense fallback={<Loading classes="h-screen" />}>
            <NotFound />
          </React.Suspense>
        }
      />
    </Routes>
  );
};

export default TVRoutes;
