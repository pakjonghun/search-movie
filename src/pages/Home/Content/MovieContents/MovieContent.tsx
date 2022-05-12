import React, { FC, useCallback } from 'react';
import { imgUrlMaker } from '@utils/styleUtil';
import { Movie } from 'types';
import useFetchMoreMovies from '@hooks/useFetchMoreMovies';
import useInfinityScroll from '@hooks/useInfinityScroll';
import { useRecoilValue } from 'recoil';
import { getTotalMoviesCount } from '@recoil/selectors/movieSelector';

interface props {
  movie: Movie;
  nth: number;
}

const MovieContent: FC<props> = ({ movie, nth }) => {
  const { poster_path, vote_average, overview, title, release_date } = movie;
  const totalMovieCount = useRecoilValue(getTotalMoviesCount);
  const fetchMoreMovies = useFetchMoreMovies();

  const callback: IntersectionObserverCallback = useCallback(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          fetchMoreMovies();
          console.log(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    [fetchMoreMovies],
  );

  const setRef = useInfinityScroll({ callback });

  return (
    <div
      ref={totalMovieCount === nth ? setRef : null}
      className="flex space-x-2  bg-gray-50 shadow-md h-40 border-[1px] rounded-md scale-md overflow-hidden cursor-pointer"
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

export default MovieContent;
