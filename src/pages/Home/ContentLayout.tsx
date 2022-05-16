import React, { useEffect } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { movieCursorListState, movieCursorState, movieReTryCountState } from '@recoil/movie/movie.atom';
import Loading from '@components/Loading';
import { filterContentState } from '@recoil/filter/filter.atom';

interface props {
  children: React.ReactNode;
}

const ContentLayout: React.FC<props> = ({ children }) => {
  const setMovieCursor = useSetRecoilState(movieCursorState);
  const [retryCount, setRetryCount] = useRecoilState(movieReTryCountState);
  const cursorList = useRecoilValue(movieCursorListState);
  const cursor = useRecoilValue(movieCursorState);
  const selectedContent = useRecoilValue(filterContentState);

  useEffect(() => {
    if (!cursorList[cursorList.length - 1] && retryCount < 5) {
      if (cursor == 1 && !cursorList.length) return;
      setRetryCount((pre) => pre + 1);
      setMovieCursor((pre) => pre + 1);
    }
  }, [cursor, retryCount, cursorList, setRetryCount, setMovieCursor]);

  return (
    <div className="h-[48rem] pt-5 rounded-md">
      <div className="flex items-center justify-between">
        <div className="flex items-end space-x-5">
          <h1 className="ml-6 text-lg font-bold">{selectedContent} Content</h1>
          <span className="text-gray-300">재 검색 횟수 : {retryCount}</span>
        </div>
        {retryCount == 5 && (
          <div className="space-x-1 mr-5">
            <span className="text-gray-300">더 검색 해볼까요? : </span>
            <button
              className="bg-blue-500 text-sm text-blue-50 px-2 py-1 rounded-md shadow-md scale-md"
              onClick={() => setRetryCount(0)}
            >
              재검색 횟수 초기화
            </button>
          </div>
        )}
      </div>
      <React.Suspense fallback={<Loading classes="w-full h-full" />}> {children}</React.Suspense>
    </div>
  );
};

export default ContentLayout;
