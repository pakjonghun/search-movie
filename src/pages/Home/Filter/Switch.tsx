import React, { useCallback } from 'react';
import { joinClass } from '@utils/styleUtil';
import { useRecoilState } from 'recoil';
import { isTvOnState } from '@recoil/atoms/filterAtom';

const Switch = () => {
  const [isTvOn, setIsTvOn] = useRecoilState(isTvOnState);

  const onSetIsTvOnClick = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setIsTvOn(event.target.checked);
    },
    [setIsTvOn],
  );

  return (
    <label
      className={joinClass(
        'relative block w-16 px-1 py-1 font-medium text-xs rounded-full shadow-md transition-colors duration-100',
        !isTvOn ? 'bg-gray-700' : 'bg-blue-500',
      )}
    >
      <span
        className={joinClass(
          'absolute inset-y-0 flex items-center mt-[1px] text-gray-50',
          isTvOn ? 'left-5' : 'right-2',
        )}
      >
        {isTvOn ? 'TV' : 'Movie'}
      </span>
      <div
        className={joinClass(
          'w-4 aspect-square p-1 bg-gray-50 rounded-full transition-all duration-150 cursor-pointer',
          isTvOn ? 'translate-x-10' : '',
        )}
      />
      <input onChange={onSetIsTvOnClick} checked={isTvOn} type="checkbox" className="hidden" />
    </label>
  );
};

export default Switch;
