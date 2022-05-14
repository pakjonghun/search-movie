import React from 'react';
import PopularityProgressBar from './PopularityProgressBar';
import PopularityIndicator from './PopularityIndicator';

const PopularityFilter = () => {
  return (
    <div className="relative flex w-full items-center">
      <PopularityProgressBar barType="hide" />
      <PopularityProgressBar barType="base" />
      <PopularityProgressBar barType="percent" />
      <PopularityIndicator />
    </div>
  );
};

export default PopularityFilter;
