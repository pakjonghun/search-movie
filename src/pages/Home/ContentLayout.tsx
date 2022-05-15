import { movieCursorListState, movieCursorState, movieReTryCountState } from '@recoil/movie/movie.atom';
import { movieCountPerCursorState } from '@recoil/movie/movie.selector';
import React, { useEffect } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import MoviesByCursor from './Movie/MoviesByCursor';

interface props {
  children: React.ReactNode;
}

const ContentLayout: React.FC<props> = ({ children }) => {
  const setMovieCursor = useSetRecoilState(movieCursorState);
  const [retryCount, setRetryCount] = useRecoilState(movieReTryCountState);
  const cursorList = useRecoilValue(movieCursorListState);

  useEffect(() => {
    if (!cursorList[cursorList.length - 1] && retryCount < 5) {
      console.log('왜 다시 시도하지?', retryCount);
      setRetryCount((pre) => pre + 1);
      setMovieCursor((pre) => pre + 1);
    }
  }, [retryCount, cursorList, setRetryCount, setMovieCursor]);

  return (
    <div className="pt-10">
      <h1 className="ml-6">Movie Content</h1>
      <span>재 검색 횟수 : {retryCount}</span>
      {retryCount == 5 && (
        <>
          <span>더 검색 해볼까요?</span>
          <button
            className="bg-blue-500 text-blue-50 px-3 py-1 rounded-md shadow-md scale-md"
            onClick={() => setRetryCount(0)}
          >
            재검색 횟수 초기화
          </button>
        </>
      )}

      <React.Suspense fallback={<div>Loading</div>}> {children}</React.Suspense>
    </div>
  );
};

export default ContentLayout;
