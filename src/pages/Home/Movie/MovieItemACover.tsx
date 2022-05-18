import React, { useEffect, useMemo } from 'react';
import VirtualizedItem from '@components/VirtualizedItem';
import { popularityState, searchTermState, selectedGenreIdsState } from '@recoil/filter/filter.atom';
import { Movie } from 'api/api.type';
import { useRecoilCallback, useRecoilValue, useSetRecoilState } from 'recoil';
import { checkIsGenresInclude, checkIsPopularityMatch } from './movie.util';
import MovieItemB from './MovieItemB';
import { movieCursorListState, movieCursorState, movieReTryCountState } from '@recoil/movie/movie.atom';
import produce from 'immer';
import { filterList } from '../Filter/FilterList/filter.constants';

interface props {
  movieList: Movie[];
}

const MovieItemACover: React.FC<props> = ({ movieList }) => {
  const searchTerm = useRecoilValue(searchTermState);
  const popularities = useRecoilValue(popularityState);
  const genres = useRecoilValue(selectedGenreIdsState);

  const filteredList = useMemo(
    () =>
      movieList.filter(({ adult, title, genre_ids, vote_average }) => {
        const isNotAdult = !adult;
        const isTitleContain = title.includes(searchTerm);
        const isGenresContain = checkIsGenresInclude(genre_ids, genres);
        const isPopularityMatch = checkIsPopularityMatch(vote_average, popularities);
        return isNotAdult && isTitleContain && isGenresContain && isPopularityMatch;
      }),
    [movieList, genres, searchTerm, popularities],
  );

  const setMovieCursorList = useSetRecoilState(movieCursorListState);

  useEffect(() => {
    setMovieCursorList((pre) =>
      produce(pre, (draft) => {
        draft.push(filteredList.length);
        return draft;
      }),
    );
  }, [filteredList.length, setMovieCursorList]);

  return (
    <>
      {filteredList.map((movie) => (
        <VirtualizedItem key={movie.id} offset={1000} height={150}>
          <MovieItemB movie={movie} />
        </VirtualizedItem>
      ))}
    </>
  );
};

export default MovieItemACover;
