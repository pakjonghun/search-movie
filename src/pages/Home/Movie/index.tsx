import React, { useEffect } from 'react';
import { movieCursorListState, movieCursorState, movieReTryCountState } from '@recoil/movie/movie.atom';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import MoviesByCursor from './MoviesByCursor';
import { v4 as uuidv4 } from 'uuid';
import MovieList from './MovieList';

const Movie = () => {
  const cursor = useRecoilValue(movieCursorState);

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

  return <MovieList />;
};

export default Movie;
