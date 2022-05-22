import Loading from '@components/Loading';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
const Popular = React.lazy(() => import('@pages/Movies/Popular'));
const Upcoming = React.lazy(() => import('@pages/Movies/Upcoming'));
const Search = React.lazy(() => import('@pages/Movies/Search'));
const Detail = React.lazy(() => import('@pages/Detail'));
const NotFound = React.lazy(() => import('@components/NotFound'));

const MovieRoutes = () => {
  return (
    <Routes>
      <Route
        path="popular"
        element={
          <React.Suspense fallback={<Loading classes="h-screen" />}>
            <Popular />
          </React.Suspense>
        }
      />
      <Route
        path="upcoming"
        element={
          <React.Suspense fallback={<Loading classes="h-screen" />}>
            <Upcoming />
          </React.Suspense>
        }
      />
      <Route
        path="search"
        element={
          <React.Suspense fallback={<Loading classes="h-screen" />}>
            <Search />
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

export default MovieRoutes;
