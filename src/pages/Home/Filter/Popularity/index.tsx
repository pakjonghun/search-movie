import React from 'react';
import { useRecoilValue } from 'recoil';
import ProgressBar from './ProgressBar';
import Indicator from './Indicator';
import { popularityMinMax } from '@recoil/selectors/filterSelector';

const Popularity = () => {
  const [min, max] = useRecoilValue(popularityMinMax);
  return (
    <div className="relative flex w-full items-center">
      <ProgressBar color="bg-gray-300" percent={min} />
      <ProgressBar color="bg-blue-400" percent={max} isPercentBar={true} />
      <ProgressBar color="bg-gray-300" percent={10.5} isBaseBar={true} />
      <Indicator />
    </div>
  );
};

export default Popularity;
