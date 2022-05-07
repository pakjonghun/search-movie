import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<h1 className="text-4xl text-red-500">home</h1>} />
            </Routes>
        </BrowserRouter>
    );
};

export default Routers;
