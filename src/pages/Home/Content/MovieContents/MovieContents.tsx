import React, { FC } from 'react';
import { Movie } from 'types';
import { v4 as uuidv4 } from 'uuid';
import MovieContent from './MovieContent';

import VirtualizedItem from '@components/VirtualizedItem';

interface props {
  movies: Movie[];
  cursor: number;
}

const MovieContents: FC<props> = ({ movies, cursor }) => {
  return (
    <>
      {movies.map((movie, index) => (
        <VirtualizedItem key={uuidv4()} classes="px-3 py-1" offset={1000} height={160}>
          <MovieContent nth={(index + 1) * cursor} movie={movie} />
        </VirtualizedItem>
      ))}
    </>
  );
};

export default MovieContents;
