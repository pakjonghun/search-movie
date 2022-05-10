import React from 'react';
import ReactDom from 'react-dom/client';
import Routers from './Routes';
import { ToastContainer } from 'react-toastify';
import './styles/main.css';
import '!style-loader!css-loader!react-toastify/dist/ReactToastify.css';
import { RecoilRoot } from 'recoil';

const root = ReactDom.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <Routers />
      <ToastContainer position="top-right" />
    </RecoilRoot>
  </React.StrictMode>,
);
