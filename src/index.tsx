import React from 'react';
import ReactDom from 'react-dom/client';
import Routers from './Routes';
import { ToastContainer } from 'react-toastify';
import './styles/main.css';
import '!style-loader!css-loader!react-toastify/dist/ReactToastify.css';
import { RecoilRoot } from 'recoil';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from '@components/ErrorFallback';

const root = ReactDom.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Routers />
        <ToastContainer position="top-right" />
      </ErrorBoundary>
    </RecoilRoot>
  </React.StrictMode>,
);
