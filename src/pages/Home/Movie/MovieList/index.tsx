import React from 'react';
import { Movie } from 'api/api.type';
import { Loadable } from 'recoil';
import FilterMovieList from './FilterMovieList';

interface props {
  index: number;
  loadableMovie: Loadable<Movie[]>;
}

const MovieList: React.FC<props> = ({ loadableMovie, index }) => {
  switch (loadableMovie.state) {
    case 'loading':
      return null;
    case 'hasValue':
      return <FilterMovieList index={index} movieList={loadableMovie.contents} />;

    default:
      throw new Error('error on movieItem');
  }
};

export default MovieList;
