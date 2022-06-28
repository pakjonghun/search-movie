//컴포넌트가 많을 경우 랜더링 횟수가 늘어나서 성능이 나빠지는 문제를 windowing 기법을 사용해서 해결 해 본 코드 입니다.
//라이브러리를 사용하지 않고 javascript api 로 작성을 해서(라이브러리 소스코드를 참고함) 기억에 남는 코드라서 제출합니다.


import React, { FC, useEffect, useState } from 'react';
import { joinClass } from '@utils/styleUtil';

interface props {
  children: React.ReactNode;
  height: number;
  offset?: number;
  classes?: string;
}

const VirtualizedItem: FC<props> = ({ children, height, offset = 0, classes }) => {
  const [isVisible, setIsVisible] = useState(true);
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
            timeout: 300,
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
    <div className={joinClass(classes ? classes : '')} ref={setItemRef}>
      {isVisible ? (
        <>{children}</>
      ) : (
        <div data-testid="listitem" style={{ height }} className="rounded-md shadow-md bg-slate-50" />
      )}
    </div>
  );
};
export default VirtualizedItem;
