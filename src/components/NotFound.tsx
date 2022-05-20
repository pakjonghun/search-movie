import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col items-center justify-center space-y-3">
      <h1 className="font-bold text-2xl text-gray-800">페이지를 찾을 수 없습니다.</h1>
      <button className="font-medium text-xl text-gray-800" onClick={() => navigate(-1)}>
        ← 뒤로가기
      </button>
    </div>
  );
};

export default NotFound;
