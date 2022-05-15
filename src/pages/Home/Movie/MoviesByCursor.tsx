import React from 'react';
import { movieCountPerCursorState } from '@recoil/movie/movie.selector';
import { useRecoilValue } from 'recoil';
import MovieItem from './MovieItem';

interface props {
  cursor: number;
}

const MoviesByCursor: React.FC<props> = ({ cursor }) => {
  const moviesCountByCursor = useRecoilValue(movieCountPerCursorState(cursor));

  const array = Array.from(Array(moviesCountByCursor).keys());
  return (
    <>
      {array.map((index) => (
        <MovieItem key={index + 1 + (cursor - 1) * 20} cursor={cursor} index={index} />
      ))}
    </>
  );
};

export default React.memo(MoviesByCursor);
