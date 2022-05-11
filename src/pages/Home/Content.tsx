import React, { useCallback, useEffect } from 'react';
import { useRecoilState, useRecoilValueLoadable, useSetRecoilState } from 'recoil';
import { getMoviesQuery } from '@recoil/selectors/movieSelector';
import { moviePage, movieState } from '@recoil/atoms/movieAtom';
import { v4 as uuidv4 } from 'uuid';
import useInfinityScroll from '@hooks/useInfinityScroll';
import { joinClass } from '@utils/styleUtil';
import VirtualizedItem from '@components/VirtualizedItem';

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
      <ul className="relative h-[200px] bg bg-red-100 overflow-y-auto">
        {movies.map((v) => (
          <VirtualizedItem offset={500} height={24} key={uuidv4()}>
            <>{v.title}</>
          </VirtualizedItem>
        ))}

        <div
          ref={setRef}
          className={joinClass(
            'bg-blue-500 h-full w-1/2',
            movieQuery.state === 'loading' ? 'bottom-0 absolute' : '',
          )}
        >
          loader
        </div>
      </ul>
    </article>
  );
};

export default Content;
