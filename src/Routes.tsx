import { BrowserRouter, Routes, Route } from "react-router-dom";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<div className='text-4xl text-red-500'>home</div>}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
