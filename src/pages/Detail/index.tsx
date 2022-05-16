import React from 'react';
import MainLayout from '@components/MainLayout';
import { useRecoilValue } from 'recoil';
import { filterContentState } from '@recoil/filter/filter.atom';
import Loading from '@components/Loading';
import MovieVideos from './MovieVideos';
import TVVideos from './TVVideos';

const Detail = () => {
  const selectedContent = useRecoilValue(filterContentState);

  return (
    <MainLayout title="detail" canBack={true}>
      <React.Suspense fallback={<Loading classes="h-[50vh]" />}>
        {selectedContent == 'MOVIE' && <MovieVideos />}
        {selectedContent == 'TV' && <TVVideos />}
      </React.Suspense>
    </MainLayout>
  );
};

export default Detail;
