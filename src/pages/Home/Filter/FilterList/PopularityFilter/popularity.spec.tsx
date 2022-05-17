import React, { useEffect } from 'react';
import { render, screen } from '@testing-library/react';
import { RecoilRoot, useRecoilValue } from 'recoil';
import PopularityFilter from '@pages/Home/Filter/FilterList/PopularityFilter';
import { calculatePopularityState, checkIsSelectedPopularityState } from '@recoil/filter/filter.selector';

const Observer = ({ onChange }: { onChange: any }) => {
  const checkIsSelectedPopularityStateValue = useRecoilValue(checkIsSelectedPopularityState(1));
  const calculatePopularityStateValue = useRecoilValue(calculatePopularityState);

  useEffect(() => {
    onChange(calculatePopularityStateValue);
    onChange(checkIsSelectedPopularityStateValue);
  }, [checkIsSelectedPopularityStateValue, calculatePopularityStateValue, onChange]);
  return null;
};

jest.mock('uuid', () => ({
  v4: () => Math.random().toString(35).substring(3, 35),
}));

describe('popularity test', () => {
  jest.mock('uuid');
  it('should have indicator', () => {
    render(
      <RecoilRoot>
        <Observer onChange={jest.fn()} />
        <PopularityFilter />
      </RecoilRoot>,
    );

    for (let i = 1; i < 11; i++) {
      const indicator = screen.getByText(String(i));
      expect(indicator).toBeInTheDocument();
      expect(indicator).toHaveClass('bg-gray-300');
    }
  });
});

afterAll(() => {
  jest.clearAllMocks();
});
