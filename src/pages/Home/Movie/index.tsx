import React, { useEffect } from 'react';
import { movieCursorListState, movieCursorState, movieReTryCountState } from '@recoil/movie/movie.atom';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import MoviesByCursor from './MoviesByCursor';
import { v4 as uuidv4 } from 'uuid';

const Movie = () => {
  const cursor = useRecoilValue(movieCursorState);
  const array = Array.from(Array(cursor).keys(), (key) => key + 1);

  const setMovieCursor = useSetRecoilState(movieCursorState);
  const [retryCount, setRetryCount] = useRecoilState(movieReTryCountState);
  const cursorList = useRecoilValue(movieCursorListState);

  useEffect(() => {
    if (!cursorList[cursorList.length - 1] && retryCount < 5) {
      if (cursor == 1 && !cursorList.length) return;
      setRetryCount((pre) => pre + 1);
      setMovieCursor((pre) => pre + 1);
    }
  }, [cursor, retryCount, cursorList, setRetryCount, setMovieCursor]);

  return (
    <ul className="mt-5 py-2 px-5 bg space-y-3 h-[43rem] overflow-y-auto">
      {array.map((cursor) => (
        <MoviesByCursor key={uuidv4()} cursor={cursor} />
      ))}
    </ul>
  );
};

export default Movie;
