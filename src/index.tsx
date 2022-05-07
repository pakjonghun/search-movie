import React from 'react';
import ReactDom from 'react-dom/client';
import Routers from './Routes';
import './styles/main.css';

const root = ReactDom.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <Routers />
    </React.StrictMode>,
);
