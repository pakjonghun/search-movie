import React from 'react';
import { FallbackProps } from 'react-error-boundary';

const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  console.log(error);
  return (
    <>
      <h1>error</h1>;<button onClick={() => resetErrorBoundary()}>back</button>
    </>
  );
};

export default ErrorFallback;
