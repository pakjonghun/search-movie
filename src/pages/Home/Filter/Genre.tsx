import React, { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { genreState } from '@recoil/atoms/filterAtom';

const genres = ['Action', 'Melo', 'SF', 'Thrill', 'Human', 'Ani'];
const toHangleGenres = ['액션', '멜로', 'SF', '스릴', '감동', '애니'];

const Genre = () => {
  const [genreList, setGenreList] = useRecoilState(genreState);

  const onGenreSelect = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const target = event.target;
      if (target.checked) setGenreList((pre) => [...pre, target.value]);
      else setGenreList((pre) => pre.filter((g) => g !== target.value));
    },
    [setGenreList],
  );

  return (
    <ul className="grid grid-cols-3 gap-x-3 gap-y-2 place-items-start">
      {genres.map((genre, idx) => {
        const isChecked = genreList.includes(genre);
        return (
          <li key={genre}>
            <label htmlFor={genre} className="flex items-center space-x-1 cursor-pointer">
              <div className="relative w-[1rem] aspect-square border-[1px] border-gray-400 bg-gray-50 ring-gray-50">
                {isChecked ? (
                  <span className="absolute inset-0 flex items-center justify-center text-xs">
                    ✓
                  </span>
                ) : (
                  ''
                )}
              </div>
              <span className="font-medium text-xs text-gray-500">{toHangleGenres[idx]}</span>
              <input
                checked={isChecked}
                onChange={onGenreSelect}
                value={genre}
                id={genre}
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

export default Genre;
