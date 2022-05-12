import React, { FC, useCallback } from 'react';
import { selectedPopularityState } from '@recoil/atoms/selectionAtom';
import { useSetRecoilState } from 'recoil';
import { PopularitySelector } from 'types';

interface props {
  popularity: PopularitySelector;
}

const ContentByPopularity: FC<props> = ({ popularity }) => {
  const { title, description, image, subTitle } = popularity;
  const setSelectorPopularity = useSetRecoilState(selectedPopularityState);

  const onPopularityClick = useCallback(() => {
    const popularities = subTitle.split('~').map((v) => +v) as [number, number];
    setSelectorPopularity(popularities);
  }, [subTitle, setSelectorPopularity]);

  return (
    <div
      onClick={onPopularityClick}
      className="flex space-x-2 h-32  bg-gray-50 shadow-md border-[1px] rounded-md scale-md overflow-hidden cursor-pointer"
    >
      <img src={image} width={'30%'} alt="top" />
      <div className="mt-2 px-2 py-1 space-y-3">
        <h2 className="text-gray-800 font-bold">{title}</h2>
        <span className="mr-3 text-gray-500 text-sm font-medium">{subTitle}</span>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ContentByPopularity;
