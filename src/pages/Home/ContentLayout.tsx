import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import Loading from '@components/Loading';
import { filterContentState } from '@recoil/filter/filter.atom';
import { tvReTryCountState } from '@recoil/tv/tv.atom';
import Movie from './Movie';
import TV from './TV';
import { movieRetryCountState } from '@recoil/movie/movie.atom';

const ContentLayout = () => {
  // const selectedContent = useRecoilValue(filterContentState);
  // const [tvRetryCount, setTVRetryCount] = useRecoilState(tvReTryCountState);
  // const [movieRetryCount, setMovieRetryCount] = useRecoilState(movieRetryCountState);
  // const retryCount = selectedContent == 'TV' ? tvRetryCount : movieRetryCount;
  // const isRetry = movieRetryCount >= 5;
  // console.log('contentRetry', movieRetryCount);
  // const retryFunc = setMovieRetryCount;
  // const content = <Movie />;

  return (
    // <div className="h-[48rem] pt-5 space-y-5 rounded-md">
    //   <div className="flex items-center justify-between">
    //     <div className="flex items-end space-x-5">
    //       {/* <h1 className="ml-6 text-lg font-bold">{selectedContent} Content</h1> */}
    //     </div>
    //     {isRetry && (
    //       <div className="space-x-1 mr-5">
    //         <span className="text-gray-300">더 검색 해볼까요? : </span>
    //         <button
    //           className="bg-gray-50 text-sm text-gray-800 px-2 py-1 rounded-md shadow-md scale-md"
    //           onClick={() => retryFunc(1)}
    //         >
    //           재검색 횟수 초기화
    //         </button>
    //       </div>
    //     )}
    //   </div>
    <Movie />
    // </div>
  );
};

export default ContentLayout;
