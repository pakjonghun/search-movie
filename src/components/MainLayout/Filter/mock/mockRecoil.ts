import { genresQuery } from '../../../../recoil/filter/filter.selector';
import { isFilterOpenState, popularityState, selectedGenreIdsState } from '@recoil/filter/filter.atom';
import { calculatePopularityState, checkIsSelectedPopularityState } from '@recoil/filter/filter.selector';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { mockPath, mockPopularity } from './mockData';

export const PopularityFilterObserver = ({ onChange }: { onChange: any }) => {
  const checkIsSelectedPopularityStateValue = useRecoilValue(
    checkIsSelectedPopularityState({ popularity: mockPopularity, path: mockPath }),
  );
  const calculatePopularityStateValue = useRecoilValue(calculatePopularityState(mockPath));

  useEffect(() => {
    onChange(calculatePopularityStateValue);
    onChange(checkIsSelectedPopularityStateValue);
  }, [checkIsSelectedPopularityStateValue, calculatePopularityStateValue, onChange]);
  return null;
};

export const GenreFilterObserver = ({ onChange }: { onChange: any }) => {
  const selectedIdList = useRecoilValue(selectedGenreIdsState(mockPath));
  const genreeList = useRecoilValue(genresQuery('movie'));
  useEffect(() => {
    onChange(selectedIdList);
    onChange(genreeList);
  }, [genreeList, selectedIdList, onChange]);
  return null;
};

export const ApplyButtonObserver = ({ onChange }: { onChange: any }) => {
  const isFilterOpenValue = useRecoilValue(isFilterOpenState);
  const popularityValue = useRecoilValue(popularityState(mockPath));
  const selectedIdList = useRecoilValue(selectedGenreIdsState(mockPath));
  useEffect(() => {
    onChange(isFilterOpenValue);
    onChange(popularityValue);
    onChange(selectedIdList);
  }, [selectedIdList, popularityValue, isFilterOpenValue, onChange]);
  return null;
};
