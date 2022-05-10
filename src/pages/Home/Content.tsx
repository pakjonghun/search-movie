import React, { useCallback } from 'react';
import { useRecoilStateLoadable, useRecoilValue, useSetRecoilState } from 'recoil';
import { getMoviesQuery } from '@recoil/selectors/movieSelector';
import { moviePage, movieState } from '@recoil/atoms/movieAtom';
import { v4 as uuidv4 } from 'uuid';
import useInfinityScroll from '@hooks/useInfinityScroll';
import { joinClass } from '@utils/styleUtil';

const Content = () => {
  const movies = useRecoilValue(movieState);
  const setPage = useSetRecoilState(moviePage);
  const [curMovies, setMovie] = useRecoilStateLoadable(getMoviesQuery);

  const callback: IntersectionObserverCallback = useCallback(
    ([{ isIntersecting }]) => {
      if (isIntersecting) {
        setPage((pre) => pre + 1);
        setMovie(curMovies.contents || []);
      }
    },
    [setPage, curMovies, setMovie],
  );

  const setRef = useInfinityScroll({ callback });

  return (
    <article>
      <ul className="relative h-[200px] bg bg-red-100 overflow-y-auto">
        {movies.map((v) => (
          <li key={uuidv4()}>{v.title}</li>
        ))}
        {
          <div
            ref={setRef}
            className={joinClass(
              'bg-blue-500 h-full w-full',
              curMovies.state === 'loading' ? 'bottom-0 absolute' : '',
            )}
          >
            loader
          </div>
        }
      </ul>
    </article>
  );
};

export default Content;
