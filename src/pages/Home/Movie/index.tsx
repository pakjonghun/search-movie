import React, { useEffect, useRef } from 'react';
import { movieListState } from '@recoil/movie/movie.selector';
import { useRecoilValue, useRecoilValueLoadable } from 'recoil';
import Loading from '@components/Loading';
import { v4 as uuidv4 } from 'uuid';
import MovieList from './MovieList';
import { movieCursorState } from '@recoil/movie/movie.atom';

const Movie = () => {
  const loadbaleMovieList = useRecoilValueLoadable(movieListState);
  const cursor = useRecoilValue(movieCursorState);

  const ref = useRef<null | HTMLUListElement>(null);

  useEffect(() => {
    const current = ref.current;
    if (current) {
      const scrollHeight = current.scrollHeight;
      const clientHeight = current.clientHeight;
      current.scrollTo({ top: scrollHeight - clientHeight });
    }
  }, [cursor]);

  switch (loadbaleMovieList.state) {
    case 'loading':
      return <Loading classes="w-full h-full bg-red-500" />;
    case 'hasValue':
      return (
        <ul ref={ref} className="mt-5 py-2 px-5 bg space-y-3 h-[43rem] overflow-y-auto">
          {loadbaleMovieList.contents.map((loadableMovie, index) => (
            <MovieList key={uuidv4()} index={index} loadableMovie={loadableMovie} />
          ))}
        </ul>
      );
    default:
      throw new Error('error on movieList');
  }
};

export default Movie;
