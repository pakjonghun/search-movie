import { cursorState } from '@recoil/common/atom';
import { useRecoilValue } from 'recoil';

const useGetCursor = (path: string) => {
  const cursor = useRecoilValue(cursorState(path));
  return cursor;
};

export default useGetCursor;
