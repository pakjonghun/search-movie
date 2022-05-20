import React from 'react';
import ReactDom from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import './styles/main.css';
import '!style-loader!css-loader!react-toastify/dist/ReactToastify.css';
import { RecoilRoot } from 'recoil';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from '@components/ErrorFallback';
import { HelmetProvider } from 'react-helmet-async';
import Routers from './Routers';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDom.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <RecoilRoot>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Routers />
            <ToastContainer position="top-right" />
          </ErrorBoundary>
        </RecoilRoot>
      </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
