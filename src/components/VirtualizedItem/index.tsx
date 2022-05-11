import React, { FC, useEffect, useState } from 'react';

interface props {
  children: React.ReactNode;
  height?: number;
}

const VirtualizedItem: FC<props> = ({ children, height }) => {
  const [isVisible, setIsVisible] = useState(false);

  const [itemRef, setItemRef] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (itemRef) {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0,
      };

      const cb: IntersectionObserverCallback = (entries) => {
        const isIntersecting = entries[0].isIntersecting;
        if (typeof window !== undefined && window.requestIdleCallback) {
          window.requestIdleCallback(() => setIsVisible(isIntersecting), {
            timeout: 500,
          });
        } else {
          setIsVisible(isIntersecting);
        }
      };

      const observer: IntersectionObserver = new IntersectionObserver(cb, options);

      observer.observe(itemRef);
    }
  }, [itemRef]);

  return <li ref={setItemRef}>{isVisible ? <>{children}</> : <div style={{ height }} />}</li>;
};

export default VirtualizedItem;
