import React, { useCallback } from 'react';
import { genresState, selectedGenreIdsState } from '@recoil/filter/filter.atom';
import { useRecoilState, useRecoilValue } from 'recoil';

const GenreFilter = () => {
  const genres = useRecoilValue(genresState);
  const [selectedGenreIds, setSelectedGenreIds] = useRecoilState(selectedGenreIdsState);

  const onSelectGenre = useCallback(
    (genreId: number) => {
      const isIdInclude = selectedGenreIds.some((id) => id === genreId);

      if (isIdInclude) setSelectedGenreIds((pre) => pre.filter((id) => id !== genreId));
      else setSelectedGenreIds((pre) => [...pre, genreId]);
    },
    [selectedGenreIds, setSelectedGenreIds],
  );
  return (
    <ul className="grid grid-cols-3 gap-x-3 gap-y-2 place-items-start">
      {genres.map(({ id, name }) => {
        const isSelected = selectedGenreIds.some((selectedGenreId) => selectedGenreId === id);
        return (
          <li key={id}>
            <label htmlFor={String(id)} className="flex items-center space-x-1 cursor-pointer">
              <div className="relative w-[1rem] aspect-square border-[1px] border-gray-400 bg-gray-50 ring-gray-50">
                {isSelected ? (
                  <span className="absolute inset-0 flex items-center justify-center text-gray-500 text-xs">✓</span>
                ) : (
                  ''
                )}
              </div>
              <span className="font-medium text-xs text-gray-500 whitespace-nowrap ">{name}</span>
              <input
                checked={isSelected}
                onChange={() => onSelectGenre(id)}
                value={id}
                id={String(id)}
                type="checkbox"
                className="hidden"
              />
            </label>
          </li>
        );
      })}
    </ul>
  );
};

export default GenreFilter;
