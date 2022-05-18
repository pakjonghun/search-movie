import { tvCursorListState, tvCursorState, tvReTryCountState } from '@recoil/tv/tv.atom';
import { checkIsLastTVItem, tvCountPerCursorState, tvItemState, tvTotlaCursorQuery } from '@recoil/tv/tv.selector';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';

export const Observer = ({ onChange }: { onChange: any }) => {
  const tvCursorListStateValue = useRecoilValue(tvCursorListState);
  const tvCursorStateValue = useRecoilValue(tvCursorState);
  const tvReTryCountStateValue = useRecoilValue(tvReTryCountState);
  const tvTotlaCursorQueryValue = useRecoilValue(tvTotlaCursorQuery);
  const checkIsLastTVItemValue = useRecoilValue(checkIsLastTVItem({ cursor: 1, index: 0 }));
  const tvItemStateValue = useRecoilValue(tvItemState({ cursor: 1, index: 0 }));
  const tvCountPerCursorStateValue = useRecoilValue(tvCountPerCursorState(1));

  useEffect(() => {
    onChange(tvCursorListStateValue);
    onChange(tvCursorStateValue);
    onChange(tvReTryCountStateValue);
    onChange(tvTotlaCursorQueryValue);
    onChange(checkIsLastTVItemValue);
    onChange(tvItemStateValue);
    onChange(tvCountPerCursorStateValue);
  }, [
    tvCursorListStateValue,
    tvCursorStateValue,
    tvReTryCountStateValue,
    tvTotlaCursorQueryValue,
    checkIsLastTVItemValue,
    tvItemStateValue,
    tvCountPerCursorStateValue,
    onChange,
  ]);

  return null;
};

export const mockTVS = {
  total_pages: 1,
  results: [
    {
      id: 1,
      first_air_date: '2022-10-10',
      name: 'title',
      adult: false,
      genre_ids: [1, 2, 3],
      overview: 'overview',
      poster_path: '',
      vote_average: 10,
    },
  ],
};

// window.IntersectionObserver = MockObserve;
