import React, { useCallback, useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { contentByWhatState } from '@recoil/atoms/selectionAtom';
import MovieList from './MovieList';
import MovieByGenres from './MovieByGenres';
import MovieByPopularities from './MovieByPopularities';
import { getAllMovies } from '@recoil/selectors/movieSelector';
import useFetchMoreMovies from '@hooks/useFetchMoreMovies';
import useInfinityScroll from '@hooks/useInfinityScroll';
import { joinClass } from '@utils/styleUtil';

const Content = () => {
  const contentSelect = useRecoilValue(contentByWhatState);
  const loadableMovies = useRecoilValue(getAllMovies);

  return (
    <article>
      <ul className="relative h-[50vh] space-y-3 overflow-y-auto">
        {contentSelect === 'none' && <MovieList movies={loadableMovies} />}
        {contentSelect === 'popularity' && <MovieByPopularities />}
        {contentSelect === 'genre' && <MovieByGenres />}
      </ul>
    </article>
  );
};

export default Content;
