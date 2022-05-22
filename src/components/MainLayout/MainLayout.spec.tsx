import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import MainLayout from '.';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';
import { headerProps } from './mock/mockData';
import { HelmetProvider } from 'react-helmet-async';
import Title from './Title';
import { RecoilRoot } from 'recoil';
import { MainLayoutObserver, SearchInputObserver } from './mock/mockRecoil';
import SearchInput from './SearchInput';
import { flushPromisesAndTimers } from '@utils/testUtil';
import { mockGenres } from './mock/mockData';
import userEvent from '@testing-library/user-event';

jest.mock('uuid', () => ({
  v4: jest.fn(() => Math.random()),
}));

//@ts-ignore
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        mockGenres,
      }),
  }),
);

describe('header', () => {
  it('should have mock header data', () => {
    render(
      <BrowserRouter>
        <Header {...headerProps} />
      </BrowserRouter>,
    );

    screen.getByRole('heading', { name: headerProps.title });
    const backButton = screen.getByRole('button', { name: /back/i });
  });

  it('should have canBack style', () => {
    render(
      <BrowserRouter>
        <Header {...headerProps} />
      </BrowserRouter>,
    );

    const header = screen.getByRole('banner');
    expect(header).toHaveClass('grid-cols-3');
  });

  it('should have no canback', () => {
    headerProps.canBack = false;
    render(
      <BrowserRouter>
        <Header {...headerProps} />
      </BrowserRouter>,
    );

    const header = screen.getByRole('banner');
    expect(header).not.toHaveClass('grid-cols-3');
    const backButton = screen.queryByRole('button', { name: /back/i });
    expect(backButton).not.toBeInTheDocument();
  });
});

describe('title', () => {
  it('should be head title', async () => {
    render(
      <HelmetProvider>
        <Title title="title" />
      </HelmetProvider>,
    );

    await waitFor(() => expect(document.title).toBe('title'));
  });
});

describe('searchInput', () => {
  it('should have Filter in SearchInput', () => {
    render(
      <RecoilRoot>
        <BrowserRouter>
          <SearchInputObserver onChange={jest.fn()} />
          <SearchInput />
        </BrowserRouter>
      </RecoilRoot>,
    );
    screen.getByRole('button', { name: 'Filter' });
  });
});

describe('mainLayout', () => {
  it('should toggle filter container', async () => {
    render(
      <RecoilRoot>
        <HelmetProvider>
          <BrowserRouter>
            <MainLayoutObserver onChange={jest.fn()} />
            <MainLayout title="title">
              <div></div>
            </MainLayout>
          </BrowserRouter>
        </HelmetProvider>
      </RecoilRoot>,
    );

    await flushPromisesAndTimers();

    const filterButton = screen.getByRole('button', { name: 'Filter' });

    for (const title of ['컨텐츠', '평 점', '장 르']) {
      const heading = screen.queryByText(title);
      expect(heading).not.toBeInTheDocument();
    }
    userEvent.click(filterButton);
    for (const title of ['컨텐츠', '평 점', '장 르']) {
      await screen.findByText(title);
    }
  });

  it('should cancel or apply filter', async () => {
    render(
      <RecoilRoot>
        <HelmetProvider>
          <BrowserRouter>
            <MainLayoutObserver onChange={jest.fn()} />
            <MainLayout title="title">
              <div></div>
            </MainLayout>
          </BrowserRouter>
        </HelmetProvider>
      </RecoilRoot>,
    );

    await flushPromisesAndTimers();

    const filterButton = screen.getByRole('button', { name: 'Filter' });
    userEvent.click(filterButton);

    const cancelButton = await screen.findByRole('button', { name: '취소' });

    userEvent.click(cancelButton);
    for (const title of ['컨텐츠', '평 점', '장 르']) {
      await waitFor(() => {
        const contentTitle = screen.queryByText(title);
        expect(contentTitle).not.toBeInTheDocument();
      });
    }

    userEvent.click(filterButton);
    for (const title of ['컨텐츠', '평 점', '장 르']) {
      await waitFor(() => {
        const contentTitle = screen.queryByText(title);
        expect(contentTitle).toBeInTheDocument();
      });
    }

    const confirmButton = await screen.findByRole('button', { name: '확인' });
    userEvent.click(confirmButton);
    for (const title of ['컨텐츠', '평 점', '장 르']) {
      await waitFor(() => {
        const contentTitle = screen.queryByText(title);
        expect(contentTitle).not.toBeInTheDocument();
      });
    }
  });
});

afterAll(() => {
  jest.clearAllMocks();
  jest.clearAllTimers();
});
