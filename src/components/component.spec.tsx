import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import ErrorFallback from './ErrorFallback';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import NotFound from './NotFound';
import { ErrorBoundary } from 'react-error-boundary';
import { ThrowError } from './mock/mockComponent';

describe('NotFound', () => {
  it('should have error title and  back button', async () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>,
    );
    screen.getByRole('heading', { name: '페이지를 찾을 수 없습니다.' });
    const backButton = screen.getByRole('button', { name: /뒤로가기/ });
    userEvent.click(backButton);
  });
});

describe('ErrorFallback', () => {
  it('should have error title and back button', () => {
    render(
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <ThrowError />
      </ErrorBoundary>,
    );

    screen.getByRole('heading', { name: '오류가 발생했습니다.' });
    screen.getByRole('button', { name: /뒤로가기/ });
  });
});
