import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { imgUrlMaker, joinClass } from '@utils/styleUtil';
import { Movie } from 'types';
import { useRecoilValue } from 'recoil';
import { isLastMovieItem } from '@recoil/selectors/movieSelector';
import useFetchMoreMovies from '@hooks/useFetchMoreMovies';
import useInfinityScroll from '@hooks/useInfinityScroll';

interface props {
  movie: Movie;
  nth: number;
}

const MovieItem: FC<props> = ({ movie, nth }) => {
  const { poster_path, vote_average, overview, title, release_date } = movie;
  const isLastItem = useRecoilValue(isLastMovieItem(nth));

  const fetchMoreMovies = useFetchMoreMovies();
  const callback: IntersectionObserverCallback = useCallback(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log('observe');
          fetchMoreMovies();
        }
      });
    },
    [fetchMoreMovies],
  );
  const newRef = useRef<null | HTMLDivElement>(null);
  useInfinityScroll({ callback, target: newRef, shouldObserve: isLastItem });

  return (
    <div
      ref={isLastItem ? newRef : null}
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
  );
};
export default MovieItem;
