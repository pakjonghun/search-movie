import React, { useEffect } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { movieCursorListState, movieCursorState, movieReTryCountState } from '@recoil/movie/movie.atom';
import Loading from '@components/Loading';

interface props {
  children: React.ReactNode;
}

const ContentLayout: React.FC<props> = ({ children }) => {
  const setMovieCursor = useSetRecoilState(movieCursorState);
  const [retryCount, setRetryCount] = useRecoilState(movieReTryCountState);
  const cursorList = useRecoilValue(movieCursorListState);
  const cursor = useRecoilValue(movieCursorState);

  useEffect(() => {
    if (!cursorList[cursorList.length - 1] && retryCount < 5) {
      if (cursor == 1 && !cursorList.length) return;
      setRetryCount((pre) => pre + 1);
      setMovieCursor((pre) => pre + 1);
    }
  }, [cursor, retryCount, cursorList, setRetryCount, setMovieCursor]);

  return (
    <div className="pt-10 h-[47rem]">
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
      <React.Suspense fallback={<Loading classes="w-full h-full" />}> {children}</React.Suspense>
    </div>
  );
};

export default ContentLayout;
