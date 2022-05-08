import React, { useCallback } from 'react';
import { useHomeContext } from '@contexts/home';
import { ACTIONS } from '@contexts/home/homeActions';
import { joinClass } from '@utils/styleUtil';

const Switch = () => {
  const [state, dispatch] = useHomeContext();

  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(ACTIONS.TOGGLECONTENT(event.target.checked));
    },
    [dispatch],
  );

  return (
    <label
      className={joinClass(
        'relative block w-16 px-1 py-1 bg-gray-100 font-medium text-xs rounded-full shadow-md transition-colors duration-100',
        !state.isTVON ? 'bg-gray-700' : 'bg-blue-500',
      )}
    >
      <span
        className={joinClass(
          'absolute inset-y-0 flex items-center mt-[1px] text-gray-50',
          state.isTVON ? 'left-5' : 'right-2',
        )}
      >
        {state.isTVON ? 'TV' : 'Movie'}
      </span>
      <div
        className={joinClass(
          'w-4 aspect-square p-1 bg-gray-50 rounded-full transition-all duration-150 cursor-pointer',
          state.isTVON ? 'translate-x-10' : '',
        )}
      />
      <input onChange={onChange} checked={state.isTVON} type="checkbox" className="hidden" />
    </label>
  );
};

export default Switch;
