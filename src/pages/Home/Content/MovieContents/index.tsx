import React, { FC, useCallback, useEffect, useState } from 'react';
import { useRecoilCallback, useRecoilState, useRecoilValue } from 'recoil';
import { getAllMovies } from '@recoil/selectors/movieSelector';
import { v4 as uuidv4 } from 'uuid';
import { Movie } from 'types';
import MovieContents from './MovieContents';

interface props {
  movies?: Movie[];
}

const Movies: FC<props> = ({ movies }) => {
  const loadableMovies = useRecoilValue(getAllMovies);

  return (
    <>
      {loadableMovies.map((loadableMovie, index) => {
        switch (loadableMovie.state) {
          case 'loading':
            return <div key={uuidv4()}>Loading</div>;
          case 'hasError':
            return <div key={uuidv4()}>Error</div>;
          case 'hasValue':
            return (
              <MovieContents
                cursor={index + 1}
                key={uuidv4()}
                movies={loadableMovie.contents}
              />
            );
          default:
            throw 'Error on Movie Content';
        }
      })}
    </>
  );
};

export default Movies;
