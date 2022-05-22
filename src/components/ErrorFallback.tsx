import React, { useCallback } from 'react';
import { FallbackProps } from 'react-error-boundary';

const ErrorFallback = ({ resetErrorBoundary }: FallbackProps) => {
  const onBackClick = useCallback(() => {
    resetErrorBoundary();
  }, [resetErrorBoundary]);

  return (
    <div className="h-screen flex flex-col items-center justify-center space-y-3">
      <h1 className="font-bold text-2xl text-gray-800">오류가 발생했습니다.</h1>
      <button className="font-medium text-xl text-gray-800" onClick={onBackClick}>
        ← 뒤로가기
      </button>
    </div>
  );
};

export default ErrorFallback;
