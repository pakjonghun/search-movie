import React, { useCallback, useState } from 'react';
import { checkIsLastMovieItem, movieItemState, movieTotlaCursorQuery } from '@recoil/movie/movie.selector';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import useInfinityScroll from '@hooks/useInfinityScroll';
import { movieCursorState } from '@recoil/movie/movie.atom';
import VirtualizedItem from '@components/VirtualizedItem';
import { handleImageError, imgUrlMaker, joinClass } from '@utils/styleUtil';
import { Link } from 'react-router-dom';
import { Movie } from 'api/api.type';

interface props {
  movie: Movie;
}

const MovieItem: React.FC<props> = ({ movie }) => {
  const cursor = useRecoilValue(movieCursorState);
  const isLastItem = useRecoilValue(checkIsLastMovieItem(movie.id));
  const [isImageEmpty, setIsImageEmpty] = useState(false);

  const setCursor = useSetRecoilState(movieCursorState);
  const onScroll: IntersectionObserverCallback = useCallback(
    (extras) => {
      if (extras[0].isIntersecting) {
        setCursor((pre) => pre + 1);
      }
    },
    [setCursor],
  );
  const totalMovieCursor = useRecoilValue(movieTotlaCursorQuery);
  const ref = useInfinityScroll({ callback: onScroll, shouldObserve: isLastItem });

  const { id: movieId, title, poster_path, release_date, vote_average, overview } = movie;
  return (
    <>
      <Link to={String(movieId)}>
        <div>
          <div
            className={joinClass(
              'flex space-x-2  bg-gray-50 shadow-md h-40 border-[1px] rounded-md scale-md overflow-hidden cursor-pointer',
              isLastItem ? 'gray-100' : '',
            )}
          >
            <img
              className={joinClass('h-full', isImageEmpty ? 'w-[105px] bg-slate-200' : '')}
              src={imgUrlMaker(poster_path)}
              alt={title}
              onError={(event) => {
                setIsImageEmpty(true);
                handleImageError(event);
              }}
            />

            <div className="mt-2 px-2 py-1 space-y-3">
              <h2 className="text-gray-800 font-bold">{title}</h2>
              <span className="mr-3 text-gray-500 text-sm font-medium">{release_date}</span>
              <span className="text-gray-500 text-sm font-medium">{vote_average}</span>
              <p className="text-gray-600 text-sm">{overview?.substring(0, 150)}...</p>
            </div>
          </div>
        </div>
      </Link>
      {isLastItem && (
        <div className="flex justify-center items-center mt-5 font-medium text-gray-50" ref={ref}>{`${
          totalMovieCursor - cursor
        }번 더 스크롤 할 수 있어요.`}</div>
      )}
    </>
  );
};

export default React.memo(MovieItem);
