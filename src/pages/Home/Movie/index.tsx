import React, { useEffect, useRef, useState } from 'react';
import { movieCursorState } from '@recoil/movie/movie.atom';
import { useRecoilValue } from 'recoil';
import MoviesByCursor from './MoviesByCursor';
import { movieCountPerCursorState } from '@recoil/movie/movie.selector';

const Movie = () => {
  const cursor = useRecoilValue(movieCursorState);
  const array = Array.from(Array(cursor).keys(), (key) => key + 1);
  const ref = useRef<null | HTMLUListElement>(null);
  const curMovieLength = useRecoilValue(movieCountPerCursorState(cursor));

  useEffect(() => {
    if (ref.current) {
      const height = ref.current.scrollHeight - curMovieLength * 24;
      ref.current.scrollTo({ top: height });
    }
  }, []);

  return (
    <ul ref={ref} className="h-96 overflow-y-auto bg-red-50">
      {array.map((cursor) => (
        <MoviesByCursor key={cursor} cursor={cursor} />
      ))}
    </ul>
  );
};

export default Movie;
