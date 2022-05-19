import React from 'react';
import { joinClass } from '@utils/styleUtil';
import { calculatePopularityState, checkIsSelectedPopularityState } from '@recoil/filter/filter.selector';
import { useRecoilCallback, useRecoilValue } from 'recoil';

interface props {
  popularity: number;
}

const PopularityItem: React.FC<props> = ({ popularity }) => {
  const isSelected = useRecoilValue(checkIsSelectedPopularityState(popularity));

  const onVoteClick = useRecoilCallback(({ set, reset }) => () => {
    set(calculatePopularityState, popularity);
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
