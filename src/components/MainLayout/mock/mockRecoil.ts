import { isFilterOpenState, popularityState, selectedGenreIdsState } from '@recoil/filter/filter.atom';
import { useEffect } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import { searchTermState } from '@recoil/common/atom';
import { mockPath } from './mockData';
import { genresQuery } from '@recoil/filter/filter.selector';

export const SearchInputObserver = ({ onChange }: { onChange: any }) => {
  const isFilterOpenValue = useRecoilValue(isFilterOpenState);
  const searchTermValue = useRecoilState(searchTermState(mockPath));
  useEffect(() => {
    onChange(isFilterOpenValue);
    onChange(searchTermValue);
  }, [isFilterOpenValue, searchTermValue, onChange]);
  return null;
};

export const MainLayoutObserver = ({ onChange }: { onChange: any }) => {
  const searchTermValue = useRecoilState(searchTermState(mockPath));
  const isFilterOpenValue = useRecoilValue(isFilterOpenState);
  const popularityValue = useRecoilValue(popularityState(mockPath));
  const selectedIdList = useRecoilValue(selectedGenreIdsState(mockPath));
  const genreList = useRecoilValue(genresQuery('movie'));
  useEffect(() => {
    onChange(searchTermValue);
    onChange(isFilterOpenValue);
    onChange(popularityValue);
    onChange(selectedIdList);
    onChange(genreList);
  }, [onChange, searchTermValue, isFilterOpenValue, popularityValue, selectedIdList, genreList]);
  return null;
};
