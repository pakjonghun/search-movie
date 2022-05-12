import { useState, useEffect, useCallback } from 'react';

interface InfinityOption {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

interface props {
  options?: InfinityOption;
  callback: IntersectionObserverCallback;
  target: React.MutableRefObject<HTMLElement | null>;
  shouldObserve: boolean;
}

const initialOptions = { root: null, rootMargin: '0px', threshold: 0 };

const useInfinityScroll = ({
  shouldObserve,
  target,
  options = initialOptions,
  callback,
}: props) => {
  useEffect(() => {
    if (!target.current || !shouldObserve) return;
    const observer: IntersectionObserver = new IntersectionObserver(callback, options);
    observer.observe(target.current);
    return () => observer.disconnect();
  }, [options, target, shouldObserve, callback]);
};

export default useInfinityScroll;
