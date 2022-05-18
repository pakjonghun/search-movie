import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { movieReTryCountState } from '@recoil/movie/movie.atom';
import Loading from '@components/Loading';
import { filterContentState } from '@recoil/filter/filter.atom';
import { tvReTryCountState } from '@recoil/tv/tv.atom';
import Movie from './Movie';
import TV from './TV';

const ContentLayout = () => {
  const selectedContent = useRecoilValue(filterContentState);
  const [tvRetryCount, setTVRetryCount] = useRecoilState(tvReTryCountState);
  const [movieRetryCount, setMovieRetryCount] = useRecoilState(movieReTryCountState);
  const retryCount = selectedContent == 'TV' ? tvRetryCount : movieRetryCount;
  const isRetry = retryCount >= 5;
  const retryFunc = selectedContent == 'TV' ? setTVRetryCount : setMovieRetryCount;
  const content = selectedContent == 'TV' ? <TV /> : <Movie />;

  //is movie has no result 보고 이어서 하면됨. 여기서 분기 하거나 컴포넌트 따로 만들까?..
  return (
    <div className="h-[48rem] pt-5 space-y-5 rounded-md">
      <div className="flex items-center justify-between">
        <div className="flex items-end space-x-5">
          <h1 className="ml-6 text-lg font-bold">{selectedContent} Content</h1>
        </div>
        {isRetry && (
          <div className="space-x-1 mr-5">
            <span className="text-gray-300">더 검색 해볼까요? : </span>
            <button
              className="bg-gray-50 text-sm text-gray-800 px-2 py-1 rounded-md shadow-md scale-md"
              onClick={() => retryFunc(0)}
            >
              재검색 횟수 초기화
            </button>
          </div>
        )}
      </div>
      <React.Suspense fallback={<Loading classes="w-full h-full" />}>{content}</React.Suspense>
    </div>
  );
};

export default ContentLayout;
