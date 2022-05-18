import { snapshot_UNSTABLE } from 'recoil';
import { popularityState } from './filter.atom';
import { progressStyle } from './filter.constant';
import { caculateWidth, progressBarStyleState, progressStyleState, progressWidthState } from './filter.selector';

describe('filter test', () => {
  it('progressWidthState test', () => {
    for (let min = 1; min < 10; min++) {
      for (let max = 10; max >= 0; max--) {
        const snapShot = snapshot_UNSTABLE(({ set }) => set(popularityState, [min, max]));
        const baseWidth = snapShot.getLoadable(progressWidthState('base'));
        const hideWidth = snapShot.getLoadable(progressWidthState('hide'));
        const percentWidth = snapShot.getLoadable(progressWidthState('percent'));
        expect(baseWidth.valueOrThrow()).toBe('100%');
        expect(hideWidth.valueOrThrow()).toBe(`${caculateWidth(min)}%`);
        expect(percentWidth.valueOrThrow()).toBe(`${caculateWidth(max)}%`);
      }
    }
  });

  it('should have progress style', () => {
    const snapShot = snapshot_UNSTABLE();
    const testStyle = snapShot.getLoadable(progressStyleState).valueOrThrow();
    expect(testStyle).toStrictEqual(progressStyle);
  });

  it('should return style attribute', () => {
    const snapShot = snapshot_UNSTABLE();
    const base = snapShot.getLoadable(progressBarStyleState('base')).valueOrThrow();
    expect(base).toStrictEqual(progressStyle['base']);

    const hide = snapShot.getLoadable(progressBarStyleState('hide')).valueOrThrow();
    expect(hide).toStrictEqual(progressStyle['hide']);

    const percent = snapShot.getLoadable(progressBarStyleState('percent')).valueOrThrow();
    expect(percent).toStrictEqual(progressStyle['percent']);
  });
});
