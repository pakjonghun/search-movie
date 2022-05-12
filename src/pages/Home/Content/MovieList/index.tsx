import React, { FC, Fragment, useCallback, useEffect, useRef, useState } from 'react';
import {
  Loadable,
  useRecoilCallback,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from 'recoil';
import { getAllMovies } from '@recoil/selectors/movieSelector';
import { v4 as uuidv4 } from 'uuid';
import { Movie } from 'types';
import MovieContents from './MovieItems';
import useFetchMoreMovies from '@hooks/useFetchMoreMovies';
import useInfinityScroll from '@hooks/useInfinityScroll';
import { joinClass } from '@utils/styleUtil';

interface props {
  movies: Loadable<Movie[]>[];
}

const MovieList: FC<props> = ({ movies }) => {
  return (
    <>
      {movies.map((movie, index) => {
        switch (movie.state) {
          case 'loading':
            return <div key={uuidv4()}>Loading</div>;
          case 'hasError':
            return <div key={uuidv4()}>Error</div>;
          case 'hasValue':
            return (
              <MovieContents key={uuidv4()} cursor={index + 1} movies={movie.contents} />
            );
          default:
            throw 'Error on Movie Content';
        }
      })}
    </>
  );
};

export default MovieList;
