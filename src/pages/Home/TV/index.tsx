import React, { useEffect } from 'react';
import { tvCursorListState, tvCursorState, tvReTryCountState } from '@recoil/tv/tv.atom';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import TVByCursor from './tvsByCursor';

const Movie = () => {
  const cursor = useRecoilValue(tvCursorState);
  const array = Array.from(Array(cursor).keys(), (key) => key + 1);
  const setTVCursor = useSetRecoilState(tvCursorState);
  const [retryCount, setRetryCount] = useRecoilState(tvReTryCountState);
  const cursorList = useRecoilValue(tvCursorListState);

  useEffect(() => {
    if (!cursorList[cursorList.length - 1] && retryCount < 5) {
      if (cursor == 1 && !cursorList.length) return;
      setRetryCount((pre) => pre + 1);
      setTVCursor((pre) => pre + 1);
    }
  }, [cursor, retryCount, cursorList, setRetryCount, setTVCursor]);

  return (
    <ul className="px-5 py-3 space-y-3 h-[40rem] overflow-y-auto">
      {array.map((cursor) => (
        <TVByCursor key={cursor} cursor={cursor} />
      ))}
    </ul>
  );
};

export default Movie;
