import React from 'react';
import { movieCursorState } from '@recoil/movie/movie.atom';
import { useRecoilValue } from 'recoil';
import MoviesByCursor from './MoviesByCursor';

const Movie = () => {
  const cursor = useRecoilValue(movieCursorState);
  const array = Array.from(Array(cursor).keys(), (key) => key + 1);

  return (
    <>
      <ul className="px-5 py-3 space-y-3 h-[40rem] overflow-y-auto">
        {array.map((cursor) => (
          <MoviesByCursor key={cursor} cursor={cursor} />
        ))}
      </ul>
    </>
  );
};

export default Movie;
