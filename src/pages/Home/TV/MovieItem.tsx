import React, { useCallback } from 'react';
import { checkIsLastMovieItem, movieItemState } from '@recoil/movie/movie.selector';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import useInfinityScroll from '@hooks/useInfinityScroll';
import { movieCursorState } from '@recoil/movie/movie.atom';
import VirtualizedItem from '@components/VirtualizedItem';
import { imgUrlMaker, joinClass } from '@utils/styleUtil';

interface props {
  index: number;
  cursor: number;
}

const MovieItem: React.FC<props> = ({ index, cursor }) => {
  const movie = useRecoilValue(movieItemState({ cursor, index }));
  const isLastItem = useRecoilValue(checkIsLastMovieItem({ cursor, index }));
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
  if (!movie) return null;
  const { title, poster_path, release_date, vote_average, overview } = movie;
  return (
    <VirtualizedItem offset={1000} height={150}>
      <div ref={ref}>
        <div
          ref={isLastItem ? ref : null}
          className={joinClass(
            'flex space-x-2  bg-gray-50 shadow-md h-40 border-[1px] rounded-md scale-md overflow-hidden cursor-pointer',
            isLastItem ? 'bg-red-500' : '',
          )}
        >
          <img className="h-full" src={imgUrlMaker(poster_path)} alt={title} />
          <div className="mt-2 px-2 py-1 space-y-3">
            <h2 className="text-gray-800 font-bold">{title}</h2>
            <span className="mr-3 text-gray-500 text-sm font-medium">{release_date}</span>
            <span className="text-gray-500 text-sm font-medium">{vote_average}</span>
            <p className="text-gray-600 text-sm">{overview?.substring(0, 150)}...</p>
          </div>
        </div>
      </div>
    </VirtualizedItem>
  );
};

export default React.memo(MovieItem);
