import React, { useCallback } from 'react';
import { checkIsLastMovieItem, movieItemState } from '@recoil/movie/movie.selector';
import { useRecoilValue, useRecoilValueLoadable, useSetRecoilState } from 'recoil';
import useInfinityScroll from '@hooks/useInfinityScroll';
import { movieCursorState } from '@recoil/movie/movie.atom';
import VirtualizedItem from '@components/VirtualizedItem';

interface props {
  index: number;
  cursor: number;
}

const MovieItem: React.FC<props> = ({ index, cursor }) => {
  const movie = useRecoilValue(movieItemState({ cursor, index }));
  const isLastItem = useRecoilValue(checkIsLastMovieItem({ length: index + 1, cursor }));
  const setCursor = useSetRecoilState(movieCursorState);

  const onScroll: IntersectionObserverCallback = useCallback(
    (extras) => {
      if (extras[0].isIntersecting) {
        setCursor((pre) => pre + 1);
      }
    },
    [setCursor],
  );

  const ref = useInfinityScroll({ callback: onScroll, shouldObserve: isLastItem });

  return (
    <VirtualizedItem offset={1000} height={24}>
      <div ref={ref}>{movie.id}</div>
    </VirtualizedItem>
  );
};

export default React.memo(MovieItem);
