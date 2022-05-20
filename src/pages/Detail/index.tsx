import React from 'react';
import { useLocation } from 'react-router-dom';

import ContentVideo from './ContentVideo';
import Loading from '@components/Loading';
import MainLayout from '@components/MainLayout';

const MovieVideos = () => {
  const { state } = useLocation();
  const { contentOverview, contentTitle } = state as { contentOverview?: string; contentTitle?: string };

  return (
    <MainLayout title="Detail" canBack={true}>
      <div className="space-y-5 mt-10">
        <h1 className="font-bold text-gray-800 text-lg md:text-2xl">{contentTitle}</h1>
        <p className="font-medium text-gray-500 md:text-xl">{contentOverview}</p>
        <React.Suspense fallback={<Loading classes="h-[40vh]" />}>
          <ContentVideo contentTitle={contentTitle} />
        </React.Suspense>
      </div>
    </MainLayout>
  );
};

export default MovieVideos;
