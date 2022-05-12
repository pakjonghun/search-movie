import React, {
  FC,
  forwardRef,
  ReactElement,
  ReactHTMLElement,
  Ref,
  useRef,
} from 'react';
import { Movie } from 'types';
import { v4 as uuidv4 } from 'uuid';
import MovieContent from './MovieItem';

import VirtualizedItem from '@components/VirtualizedItem';
import { useRecoilValue } from 'recoil';
import { isLastMovieItem } from '@recoil/selectors/movieSelector';

interface props {
  movies: Movie[];
  cursor: number;
}

const MovieItems: FC<props> = ({ movies, cursor }) => {
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
export default MovieItems;
