import React from 'react';
import { movieCursorState } from '@recoil/movie/movie.atom';
import { useRecoilValue } from 'recoil';
import MoviesByCursor from './MoviesByCursor';

const Movie = () => {
  const cursor = useRecoilValue(movieCursorState);
  const array = Array.from(Array(cursor).keys(), (key) => key + 1);
  return (
    <ul className="mt-5 py-2 px-5 bg space-y-3 h-[43rem] overflow-y-auto">
      {array.map((cursor) => (
        <MoviesByCursor key={cursor} cursor={cursor} />
      ))}
    </ul>
  );
};

export default Movie;
