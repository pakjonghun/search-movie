import React from 'react';
import { movieListState } from '@recoil/movie/movie.selector';
import { useRecoilValueLoadable } from 'recoil';
import Loading from '@components/Loading';
import MovieItemA from './MovieItemA';
import { v4 as uuidv4 } from 'uuid';

const MovieList = () => {
  const loadbaleMovieList = useRecoilValueLoadable(movieListState);

  switch (loadbaleMovieList.state) {
    case 'loading':
      return <Loading />;
    case 'hasValue':
      return (
        <ul className="mt-5 py-2 px-5 bg space-y-3 h-[43rem] overflow-y-auto">
          {loadbaleMovieList.contents.map((loadableMovie) => (
            <MovieItemA key={uuidv4()} loadableMovie={loadableMovie} />
          ))}
        </ul>
      );
    default:
      throw new Error('error on movieList');
  }
};

export default MovieList;
