import React, { useCallback } from 'react';
import VirtualizedItem from '@components/VirtualizedItem';
import { Movie } from 'api/api.type';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { movieCursorState } from '@recoil/movie/movie.atom';
import MovieItem from '../MovieItem';
import useInfinityScroll from '@hooks/useInfinityScroll';
import Loading from '@components/Loading';

interface props {
  index: number;
  movieList: Movie[];
}

const MovieItemACover: React.FC<props> = ({ index, movieList }) => {
  const cursor = useRecoilValue(movieCursorState);
  const isLastCursor = cursor - 1 === index;

  const setCursor = useSetRecoilState(movieCursorState);
  const onScroll: IntersectionObserverCallback = useCallback(
    (extras, observer) => {
      if (extras[0].isIntersecting) {
        setCursor((pre) => pre + 1);
        observer.unobserve(extras[0].target);
      }
    },
    [setCursor],
  );

  const ref = useInfinityScroll({ callback: onScroll, shouldObserve: isLastCursor });

  return (
    <>
      {movieList.map((movie) => (
        <VirtualizedItem key={movie.id} offset={300} height={150}>
          <MovieItem movie={movie} key={movie.id} />
        </VirtualizedItem>
      ))}
      {isLastCursor && (
        <li ref={ref} className="bg-red-500">
          <Loading />
        </li>
      )}
    </>
  );
};

export default React.memo(MovieItemACover);
