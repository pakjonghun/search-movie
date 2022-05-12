import { useState, useEffect, useCallback } from 'react';

interface props {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  callback: IntersectionObserverCallback;
}

const useInfinityScroll = ({
  root = null,
  rootMargin = '0px',
  threshold = 0,
  callback,
}: props) => {
  const [target, setTarget] = useState<null | HTMLElement>(null);

  const setRef = useCallback((ele: null | HTMLElement) => {
    if (ele) setTarget(ele);
  }, []);

  useEffect(() => {
    if (!target) return;
    const options = { root, rootMargin, threshold };
    const observer: IntersectionObserver = new IntersectionObserver(callback, options);
    observer.observe(target);
    return () => observer.disconnect();
  }, [target, root, rootMargin, threshold, callback]);

  return setRef;
};

export default useInfinityScroll;
