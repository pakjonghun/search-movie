import React, { useEffect } from 'react';
import { movieCountPerCursorState, movieListState } from '@recoil/movie/movie.selector';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { produce } from 'immer';
import { movieCursorListState } from '@recoil/movie/movie.atom';
import { v4 as uuidv4 } from 'uuid';
import MovieItem from './MovieItem';

interface props {
  cursor: number;
}

const MoviesByCursor: React.FC<props> = ({ cursor }) => {
  const movieIdList = useRecoilValue(movieCountPerCursorState(cursor));

  const setMovieCursorList = useSetRecoilState(movieCursorListState);

  useRecoilValue(movieListState);

  useEffect(() => {
    setMovieCursorList((pre) =>
      produce(pre, (draft) => {
        draft[cursor - 1] = movieIdList.length;
        return draft;
      }),
    );
  }, [cursor, movieIdList.length, setMovieCursorList]);
  return (
    <>
      {movieIdList.map((id) => (
        <MovieItem key={uuidv4()} cursor={cursor} id={id} />
      ))}
    </>
  );
};

export default React.memo(MoviesByCursor);
