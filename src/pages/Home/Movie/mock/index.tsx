import { movieCursorListState, movieCursorState, movieReTryCountState } from '@recoil/movie/movie.atom';
import {
  checkIsLastMovieItem,
  movieCountPerCursorState,
  movieItemState,
  movieTotlaCursorQuery,
} from '@recoil/movie/movie.selector';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';

export const Observer = ({ onChange }: { onChange: any }) => {
  const movieCountPerCursorStateValue = useRecoilValue(movieCountPerCursorState(1));
  const movieCursorListStateValue = useRecoilValue(movieCursorListState);
  const movieCursorStateValue = useRecoilValue(movieCursorState);
  const movieReTryCountStateValue = useRecoilValue(movieReTryCountState);
  const movieTotlaCursorQueryValue = useRecoilValue(movieTotlaCursorQuery);
  const checkIsLastMovieItemValue = useRecoilValue(checkIsLastMovieItem({ cursor: 1, index: 0 }));
  const movieItemStateValue = useRecoilValue(movieItemState({ cursor: 1, index: 0 }));

  useEffect(() => {
    onChange(movieCountPerCursorStateValue);
    onChange(movieTotlaCursorQueryValue);
    onChange(checkIsLastMovieItemValue);
    onChange(movieCursorListStateValue);
    onChange(movieCursorStateValue);
    onChange(movieReTryCountStateValue);
    onChange(movieItemStateValue);
  }, [
    movieCountPerCursorStateValue,
    movieTotlaCursorQueryValue,
    checkIsLastMovieItemValue,
    movieCursorListStateValue,
    movieCursorStateValue,
    movieReTryCountStateValue,
    movieItemStateValue,
    onChange,
  ]);

  return null;
};

export const mockMovies = {
  total_pages: 1,
  results: [
    {
      id: 1,
      release_date: '2022-10-10',
      title: 'title',
      adult: false,
      genre_ids: [1, 2, 3],
      overview: 'overview',
      poster_path: '',
      vote_average: 10,
    },
  ],
};

// window.IntersectionObserver = MockObserve;
