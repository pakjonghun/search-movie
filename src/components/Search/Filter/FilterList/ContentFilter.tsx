import React, { useCallback } from 'react';
import { joinClass } from '@utils/styleUtil';
import { useNavigate } from 'react-router-dom';
import useCheckContent from '@hooks/useCheckContent';

const ContentFilter = () => {
  const navigator = useNavigate();
  const content = useCheckContent();
  const secondPath = useCheckContent('second');

  const onSwitchClick = useCallback(() => {
    const first = content == 'tv' ? 'movies' : 'tvs';
    let second = '';

    switch (secondPath) {
      case 'upcoming': {
        second = 'onair';
        break;
      }
      case 'onair': {
        second = 'upcoming';
        break;
      }
      default: {
        second = secondPath;
        break;
      }
    }

    navigator(`/${first}/${second}`);
  }, [content, secondPath, navigator]);

  return (
    <label
      className={joinClass(
        'relative block w-16 px-1 py-1 font-medium text-[0.5rem] rounded-full shadow-md transition-colors duration-100 cursor-pointer',
        content == 'tv' ? 'bg-gray-700' : 'bg-blue-500',
      )}
    >
      <span
        className={joinClass(
          'absolute inset-y-0 flex items-center mt-[1px] text-gray-50',
          content == 'tv' ? 'left-7' : 'left-2',
        )}
      >
        {content.toUpperCase()}
      </span>
      <div
        className={joinClass(
          'w-4 aspect-square p-1 bg-gray-50 rounded-full transition-all duration-150',
          content == 'tv' ? '' : 'translate-x-10',
        )}
      />
      <input onChange={onSwitchClick} type="checkbox" className="hidden" />
    </label>
  );
};

export default ContentFilter;
