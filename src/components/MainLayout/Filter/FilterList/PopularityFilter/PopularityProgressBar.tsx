import React from 'react';
import { joinClass } from '@utils/styleUtil';
import { progressWidthState, progressBarStyleState } from '@recoil/filter/filter.selector';
import { PopularityProgressBarType } from '@recoil/filter/filter.type';
import { useRecoilValue } from 'recoil';
import { useLocation } from 'react-router-dom';

interface props {
  barType: PopularityProgressBarType;
}

const ProgressBar: React.FC<props> = ({ barType }) => {
  const { pathname: path } = useLocation();
  const width = useRecoilValue(progressWidthState({ barType, path }));
  const { color, zIndex } = useRecoilValue(progressBarStyleState(barType));

  return <div style={{ width }} className={joinClass('absolute top-1/2 -translate-y-1/2 h-1', color, zIndex)} />;
};

export default ProgressBar;
