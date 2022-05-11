import React, { useCallback, useEffect } from 'react';
import { useRecoilState, useRecoilValueLoadable, useSetRecoilState } from 'recoil';
import { getMoviesQuery } from '@recoil/selectors/movieSelector';
import { moviePage, movieState } from '@recoil/atoms/movieAtom';
import { v4 as uuidv4 } from 'uuid';
import useInfinityScroll from '@hooks/useInfinityScroll';
import { joinClass } from '@utils/styleUtil';
import VirtualizedItem from '@components/VirtualizedItem';
import MovieContent from './MovieContent';

const Content = () => {
  const [movies, setMovies] = useRecoilState(movieState);
  const setPage = useSetRecoilState(moviePage);
  const movieQuery = useRecoilValueLoadable(getMoviesQuery);
  const callback: IntersectionObserverCallback = useCallback(
    (entries) => {
      entries.forEach((entry) => {
        if (movies.length && entry.isIntersecting) {
          setPage((pre) => pre + 1);
        }
      });
    },
    [setPage, movies],
  );

  useEffect(() => {
    if (movieQuery.state === 'hasValue') {
      setMovies([...movies, ...movieQuery.contents]);
    }
  }, [movieQuery.state]);
  const setRef = useInfinityScroll({ callback });

  return (
    <article>
      <ul className="relative h-[80vh] space-y-3 overflow-y-auto">
        {movies.map((movie) => (
          <VirtualizedItem classes="px-3 py-1" offset={1000} height={160} key={uuidv4()}>
            <MovieContent movie={movie} />
          </VirtualizedItem>
        ))}

        <div
          ref={setRef}
          className={joinClass(
            'bg-blue-500 h-full w-1/2',
            movieQuery.state === 'loading' ? 'bottom-0 absolute' : 'opacity-0',
          )}
        >
          loader
        </div>
      </ul>
    </article>
  );
};

export default Content;
