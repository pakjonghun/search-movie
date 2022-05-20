import React from 'react';
import { joinClass } from '@utils/styleUtil';
import { useRecoilCallback } from 'recoil';
import { useNavigate } from 'react-router-dom';
import useCheckContent from '@hooks/useCheckContent';

const ContentFilter = () => {
  const navigator = useNavigate();
  const content = useCheckContent();
  const onSwitchClick = useRecoilCallback(({ set, reset }) => (isOn) => {
    // navigator(`/${content}/search`);
  });

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
      <input onChange={(event) => onSwitchClick(event.target.checked)} type="checkbox" className="hidden" />
    </label>
  );
};

export default ContentFilter;
