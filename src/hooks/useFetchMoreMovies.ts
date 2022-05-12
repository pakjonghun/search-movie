import { movieCursor } from '../recoil/atoms/movieAtom';
import { useSetRecoilState } from 'recoil';

const useFetchMoreMovies = () => {
  const setCursor = useSetRecoilState(movieCursor);
  return () => setCursor((cursor) => cursor + 1);
};
export default useFetchMoreMovies;
