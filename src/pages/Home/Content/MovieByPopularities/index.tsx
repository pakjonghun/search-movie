import React, { useCallback, useEffect } from 'react';
import { popularitySelector } from '@pages/Home/constants';
import ContentByPopularity from './ContentByPopularity';
import { selectedPopularityState } from '@recoil/atoms/selectionAtom';
import { getMovieByPopularity } from '@recoil/selectors/selectionSelector';
import { useRecoilState, useRecoilValue } from 'recoil';
import MovieContents from '../MovieList';

const ContentByPopularities = () => {
  const [popularities, setPopularities] = useRecoilState(selectedPopularityState);
  const popularitiesMovies = useRecoilValue(getMovieByPopularity);

  useEffect(() => {
    return () => setPopularities([0, 0]);
  }, [setPopularities]);

  const onBackClick = useCallback(() => {
    setPopularities([0, 0]);
  }, [setPopularities]);

  const isSelected = !popularities.every((v) => !v);

  return (
    <div className="px-2 py-1 space-y-3">
      {!!isSelected && (
        <>
          <div className="text-right sticky top-0 z-10">
            <button
              className="py-1 px-3 mr-3 text-sm hover:bg-blue-500 hover:text-blue-50 rounded-md shadow-md bg-gray-100 font-medium scale-md text-gray-500 z-20"
              onClick={onBackClick}
            >
              Back
            </button>
          </div>
          <MovieContents movies={popularitiesMovies} />
        </>
      )}

      {!isSelected && (
        <>
          {popularitySelector.map((popularity) => (
            <ContentByPopularity key={popularity.subTitle} popularity={popularity} />
          ))}
        </>
      )}
    </div>
  );
};

export default ContentByPopularities;
