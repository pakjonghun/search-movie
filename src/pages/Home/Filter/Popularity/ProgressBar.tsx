import React, { FC } from 'react';
import { joinClass } from '@utils/styleUtil';

interface props {
  percent: number;
  color: string;
  isPercentBar?: boolean;
  isBaseBar?: boolean;
}

const ProgressBar: FC<props> = ({ percent, color, isPercentBar = false, isBaseBar = false }) => {
  let zIndex: string;

  switch (true) {
    case isPercentBar:
      zIndex = 'z-20';
      break;

    case isBaseBar:
      zIndex = 'z-10';
      break;

    default:
      zIndex = 'z-30';
      break;
  }

  return (
    <div
      style={{ width: !percent ? '0%' : ` ${(percent - 1) * 10 + 5}%` }}
      className={joinClass('absolute top-1/2 -translate-y-1/2 h-1', color, zIndex)}
    />
  );
};

export default ProgressBar;
