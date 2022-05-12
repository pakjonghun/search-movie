import React, { FC, useCallback } from 'react';
import { selectedGenreState } from '@recoil/atoms/selectionAtom';
import { useSetRecoilState } from 'recoil';
import { GenresSelector } from 'types';

interface props {
  genres: GenresSelector;
}

const ContentByGenres: FC<props> = ({ genres }) => {
  const { title, image, ids } = genres;
  const setGenres = useSetRecoilState(selectedGenreState);

  const onContentClick = useCallback(() => {
    setGenres(ids);
  }, [ids, setGenres]);

  return (
    <div
      onClick={onContentClick}
      className="flex space-x-2 h-20  bg-gray-50 shadow-md border-[1px] rounded-md scale-md overflow-hidden cursor-pointer"
    >
      <img src={image} width={'30%'} alt="top" />
      <div className="mt-2 px-2 py-1 space-y-3">
        <h2 className="text-gray-800 font-bold">{title}</h2>
      </div>
    </div>
  );
};

export default ContentByGenres;
