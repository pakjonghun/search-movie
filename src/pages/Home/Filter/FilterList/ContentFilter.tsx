import React from 'react';
import { joinClass } from '@utils/styleUtil';
import { useRecoilCallback, useRecoilValue } from 'recoil';
import {
  filterContentState,
  popularityState,
  searchTermState,
  selectedGenreIdsState,
} from '@recoil/filter/filter.atom';
import { movieReTryCountState } from '@recoil/movie/movie.atom';
import { tvReTryCountState } from '@recoil/tv/tv.atom';

const ContentFilter = () => {
  const filterContent = useRecoilValue(filterContentState);

  const onSwitchClick = useRecoilCallback(({ set, reset }) => (isOn) => {
    const content = isOn ? 'MOVIE' : 'TV';
    set(filterContentState, content);
    reset(searchTermState);
    reset(selectedGenreIdsState);
    reset(popularityState);
    reset(movieReTryCountState);
    reset(tvReTryCountState);
  });

  return (
    <label
      className={joinClass(
        'relative block w-16 px-1 py-1 font-medium text-[0.5rem] rounded-full shadow-md transition-colors duration-100 cursor-pointer',
        filterContent == 'TV' ? 'bg-gray-700' : 'bg-blue-500',
      )}
    >
      <span
        className={joinClass(
          'absolute inset-y-0 flex items-center mt-[1px] text-gray-50',
          filterContent == 'TV' ? 'left-7' : 'left-2',
        )}
      >
        {filterContent}
      </span>
      <div
        className={joinClass(
          'w-4 aspect-square p-1 bg-gray-50 rounded-full transition-all duration-150',
          filterContent == 'TV' ? '' : 'translate-x-10',
        )}
      />
      <input onChange={(event) => onSwitchClick(event.target.checked)} type="checkbox" className="hidden" />
    </label>
  );
};

export default ContentFilter;
