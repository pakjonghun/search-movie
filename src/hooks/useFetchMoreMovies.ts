import { useCallback } from 'react';
import { movieCursor } from '../recoil/atoms/movieAtom';
import { useSetRecoilState } from 'recoil';

const useFetchMoreMovies = () => {
  const setCursor = useSetRecoilState(movieCursor);

  return () => setCursor((previousCursor) => previousCursor + 1);
};
export default useFetchMoreMovies;
