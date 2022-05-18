import React, { FC, useEffect, useState } from 'react';
import { joinClass } from '@utils/styleUtil';

interface props {
  children: React.ReactNode;
  height: number;
  offset?: number;
  classes?: string;
}

const VirtualizedItem: FC<props> = ({ children, height, offset = 0, classes }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [itemRef, setItemRef] = useState<HTMLElement | null>(null);
  useEffect(() => {
    if (itemRef) {
      const options = {
        root: null,
        rootMargin: `${offset}px 0px ${offset}px 0px`,
        threshold: 0,
      };

      const cb: IntersectionObserverCallback = (entries) => {
        const isIntersecting = entries[0].isIntersecting;
        if (typeof window !== undefined && window.requestIdleCallback) {
          window.requestIdleCallback(() => setIsVisible(isIntersecting), {
            timeout: 100,
          });
        } else {
          setIsVisible(isIntersecting);
        }
      };

      const observer: IntersectionObserver = new IntersectionObserver(cb, options);
      observer.observe(itemRef);
    }
  }, [itemRef, offset]);

  return (
    <li className={joinClass(classes ? classes : '')} ref={setItemRef}>
      {isVisible ? (
        <>{children}</>
      ) : (
        <div data-testid="listitem" style={{ height }} className="rounded-md shadow-md bg-slate-50 animate-pulse" />
      )}
    </li>
  );
};
export default VirtualizedItem;
