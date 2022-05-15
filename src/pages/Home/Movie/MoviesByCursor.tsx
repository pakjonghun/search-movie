import React, { useEffect } from 'react';
import { movieCountPerCursorState } from '@recoil/movie/movie.selector';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import MovieItem from './MovieItem';
import { produce } from 'immer';
import { movieCursorListState, movieCursorState, movieReTryCountState } from '@recoil/movie/movie.atom';

interface props {
  cursor: number;
}

const MoviesByCursor: React.FC<props> = ({ cursor }) => {
  const moviesCountByCursor = useRecoilValue(movieCountPerCursorState(cursor));
  const array = Array.from(Array(moviesCountByCursor).keys());
  const setMovieCursorList = useSetRecoilState(movieCursorListState);

  useEffect(() => {
    setMovieCursorList((pre) =>
      produce(pre, (draft) => {
        draft[cursor - 1] = moviesCountByCursor;
        return draft;
      }),
    );
  }, [cursor, moviesCountByCursor, setMovieCursorList]);

  return (
    <>
      {array.map((index) => (
        <MovieItem key={index + 1 + (cursor - 1) * 20} cursor={cursor} index={index} />
      ))}
    </>
  );
};

export default React.memo(MoviesByCursor);
