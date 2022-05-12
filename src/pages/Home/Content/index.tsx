import React from 'react';
import { useRecoilValue } from 'recoil';
import { contentByWhatState } from '@recoil/atoms/selectionAtom';
import MovieContents from './MovieContents';
import ContentByGenres from './ContentByGenres';
import ContentByPopularities from './ContentByPopularities';

const Content = () => {
  const contentSelect = useRecoilValue(contentByWhatState);

  return (
    <article>
      <ul className="relative h-[50vh] space-y-3 overflow-y-auto">
        {contentSelect === 'none' && <MovieContents />}
        {contentSelect === 'popularity' && <ContentByPopularities />}
        {contentSelect === 'genre' && <ContentByGenres />}
      </ul>
    </article>
  );
};

export default Content;
