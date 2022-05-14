import React from 'react';
import { joinClass } from '@utils/styleUtil';
import { PopularityProgressBarType, progressWidthState, progressBarStyleState } from '@recoil/Filter/FilterSelector';
import { useRecoilValue } from 'recoil';

interface props {
  barType: PopularityProgressBarType;
}

const ProgressBar: React.FC<props> = ({ barType }) => {
  const width = useRecoilValue(progressWidthState(barType));
  const { color, zIndex } = useRecoilValue(progressBarStyleState(barType));

  if (barType === 'hide') console.log('min', width, color, zIndex);
  return <div style={{ width }} className={joinClass('absolute top-1/2 -translate-y-1/2 h-1', color, zIndex)} />;
};

export default ProgressBar;
