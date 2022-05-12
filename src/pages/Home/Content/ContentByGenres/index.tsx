import React, { useCallback, useEffect } from 'react';
import { genreSelector } from '@pages/Home/constants';
import ContentByGenre from './ContentByGenre';
import { useRecoilState, useRecoilValue } from 'recoil';
import { selectedGenreState } from '@recoil/atoms/selectionAtom';
import MovieContents from '../MovieContents';
import { getMovieByGenre } from '@recoil/selectors/selectionSelector';

const ContentByGenres = () => {
  const [genres, setGenres] = useRecoilState(selectedGenreState);
  const genresMovies = useRecoilValue(getMovieByGenre);

  useEffect(() => {
    return () => setGenres([]);
  }, [setGenres]);

  const onBackClick = useCallback(() => {
    setGenres([]);
  }, [setGenres]);

  return (
    <div className="px-2 py-1 space-y-3">
      {!!genres.length && (
        <>
          <div className="text-right sticky top-0 z-10">
            <button
              className="py-1 px-3 mr-3 text-sm hover:bg-blue-500 hover:text-blue-50 rounded-md shadow-md bg-gray-100 font-medium scale-md text-gray-500 z-20"
              onClick={onBackClick}
            >
              Back
            </button>
          </div>
          <MovieContents movies={genresMovies} />
        </>
      )}

      {!genres.length && (
        <>
          {genreSelector.map((genre) => (
            <ContentByGenre key={genre.title} genres={genre} />
          ))}
        </>
      )}
    </div>
  );
};

export default ContentByGenres;
