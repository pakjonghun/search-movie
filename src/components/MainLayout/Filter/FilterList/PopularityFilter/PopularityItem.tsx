import React from 'react';
import { joinClass } from '@utils/styleUtil';
import { calculatePopularityState, checkIsSelectedPopularityState } from '@recoil/filter/filter.selector';
import { useRecoilCallback, useRecoilValue } from 'recoil';
import { useLocation } from 'react-router-dom';

interface props {
  popularity: number;
}

const PopularityItem: React.FC<props> = ({ popularity }) => {
  const { pathname: path } = useLocation();
  const isSelected = useRecoilValue(checkIsSelectedPopularityState({ popularity, path }));

  const onVoteClick = useRecoilCallback(({ set }) => () => {
    set(calculatePopularityState(path), popularity);
  });

  return (
    <li
      onClick={() => onVoteClick()}
      key={popularity}
      className={joinClass(
        'flex items-center justify-center w-5 sm:w-6 aspect-square text-xs text-gray-50 rounded-full cursor-pointer z-40 select-none',
        isSelected ? 'bg-blue-400' : 'bg-gray-300',
      )}
    >
      {popularity}
    </li>
  );
};

export default PopularityItem;
