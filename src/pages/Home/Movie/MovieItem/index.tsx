import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { handleImageError, imgUrlMaker, joinClass } from '@utils/styleUtil';
import { Link } from 'react-router-dom';
import { Movie } from 'api/api.type';
import { popularityState, searchTermState, selectedGenreIdsState } from '@recoil/filter/filter.atom';
import { checkIsGenresInclude, checkIsPopularityMatch } from '../movie.util';

interface props {
  movie: Movie;
}

const MovieItem: React.FC<props> = ({ movie }) => {
  const [isImageEmpty, setIsImageEmpty] = useState(false);
  const { adult, id: movieId, title, genre_ids, poster_path, release_date, vote_average, overview } = movie;

  const searchTerm = useRecoilValue(searchTermState);
  const popularities = useRecoilValue(popularityState);
  const genres = useRecoilValue(selectedGenreIdsState);

  const isNotAdult = !adult;
  const isTitleContain = title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase());
  const isGenresContain = checkIsGenresInclude(genre_ids, genres);
  const isPopularityMatch = checkIsPopularityMatch(vote_average, popularities);
  const isMatch = isNotAdult && isTitleContain && isGenresContain && isPopularityMatch;

  return (
    <Link to={String(movieId)}>
      <div
        className={joinClass(
          'flex space-x-2  bg-gray-50 shadow-md h-40 border-[1px] rounded-md scale-md overflow-hidden cursor-pointer',
          isMatch ? '' : 'blur-sm',
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
    </Link>
  );
};

export default React.memo(MovieItem);
