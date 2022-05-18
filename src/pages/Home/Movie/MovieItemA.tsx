import Loading from '@components/Loading';
import React from 'react';
import VirtualizedItem from '@components/VirtualizedItem';
import { popularityState, searchTermState, selectedGenreIdsState } from '@recoil/filter/filter.atom';
import { Movie } from 'api/api.type';
import { Loadable, useRecoilValue } from 'recoil';
import { checkIsGenresInclude, checkIsPopularityMatch } from './movie.util';
import MovieItemB from './MovieItemB';
import MovieItemACover from './MovieItemACover';

interface props {
  loadableMovie: Loadable<Movie[]>;
}

const MovieItemA: React.FC<props> = ({ loadableMovie }) => {
  switch (loadableMovie.state) {
    case 'loading':
      return <Loading />;
    case 'hasValue':
      return <MovieItemACover movieList={loadableMovie.contents} />;

    default:
      throw new Error('error on movieItem');
  }
};

export default MovieItemA;
