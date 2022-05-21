import React from 'react';
import { render, screen, fireEvent, renderHook } from '@testing-library/react';
import ContentImage from './ContentImage';
import ContentItemPresent from './ContentItemPresent';
import { BrowserRouter } from 'react-router-dom';
import useFilter from './useFilter';
import { RecoilRoot } from 'recoil';
import { mockMovieContent, mockTVContent } from '../mock/content';

describe('content image test', () => {
  const mockImage = {
    posterPath: 'dummy',
    title: 'dummy',
  };
  it('should have dummy attributes', () => {
    render(<ContentImage {...mockImage} />);

    const img = screen.getByRole('img');

    expect(img).toHaveAttribute('src', 'https://image.tmdb.org/t/p/w500dummy');
    expect(img).toHaveAttribute('alt', 'dummy');

    fireEvent.error(img);
    expect(img).toHaveClass('bg-slate-200');
  });

  it('should have error style', () => {
    render(<ContentImage {...mockImage} />);

    const img = screen.getByRole('img');

    fireEvent.error(img);
    expect(img).toHaveClass('bg-slate-200');
  });
});

describe('contentPresent test', () => {
  it('should have not match style', () => {
    render(
      <BrowserRouter>
        <ContentItemPresent isMatch={false} linkPath={'linkPath'} contentItem={mockMovieContent} />
      </BrowserRouter>,
    );

    const link = screen.getByRole('link');
    expect(link).toHaveClass('pointer-events-none');

    const article = screen.getByRole('article');
    expect(article).toHaveClass('opacity-30');
  });

  it('should mock movie data', () => {
    render(
      <BrowserRouter>
        <ContentItemPresent isMatch={true} linkPath={'linkPath'} contentItem={mockMovieContent} />
      </BrowserRouter>,
    );

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/linkPath');

    screen.getByRole('heading', { name: mockMovieContent.title });
    screen.getByText(mockMovieContent.overview + '...');
    screen.getByText(mockMovieContent.vote_average);
    screen.getByText(mockMovieContent.release_date);
  });

  it('should mock tv data', () => {
    render(
      <BrowserRouter>
        <ContentItemPresent isMatch={true} linkPath={'linkPath'} contentItem={mockTVContent} />
      </BrowserRouter>,
    );

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/linkPath');

    screen.getByRole('heading', { name: mockTVContent.name });
    screen.getByText(mockTVContent.overview + '...');
    screen.getByText(mockTVContent.vote_average);
    screen.getByText(mockTVContent.first_air_date);
  });
});

describe('useFilter', () => {
  it('should return true', () => {
    const { result } = renderHook(() => useFilter(mockMovieContent), {
      wrapper: ({ children }) => (
        <RecoilRoot>
          <BrowserRouter>{children}</BrowserRouter>
        </RecoilRoot>
      ),
    });

    expect(result.current).toBeTruthy();
  });

  it('should return false', () => {
    mockMovieContent.adult = true;
    const { result } = renderHook(() => useFilter(mockMovieContent), {
      wrapper: ({ children }) => (
        <RecoilRoot>
          <BrowserRouter>{children}</BrowserRouter>
        </RecoilRoot>
      ),
    });

    expect(result.current).toBeFalsy();
  });
});
