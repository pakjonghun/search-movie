const takeRecords = () => [
  {
    boundingClientRect: {} as DOMRectReadOnly,
    intersectionRatio: 1,
    intersectionRect: {} as DOMRectReadOnly,
    isIntersecting: false,
    rootBounds: null,
    target: {} as Element,
    time: 1,
  },
];

export class MockObserve implements IntersectionObserver {
  readonly root: Element | null = null;
  readonly rootMargin: string = '';
  readonly thresholds: ReadonlyArray<number> = [];
  disconnect: () => void = () => null;
  observe: (target: Element) => void = () => null;
  takeRecords: () => IntersectionObserverEntry[] = takeRecords;
  unobserve: (target: Element) => void = () => null;

  constructor(callback: (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => void) {
    callback(takeRecords(), this);
  }
}
