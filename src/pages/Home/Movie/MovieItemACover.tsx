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

  //  여기다 여기서 각 커서 벼로 몇개 결과를 얻었는지 저장 작업을 해야한다. 아래 해놨는데... 왜  잘 안될까 ㅠ

  const setMovieCursorList = useSetRecoilState(movieCursorListState);

  useEffect(() => {
    setMovieCursorList((pre) =>
      produce(pre, (draft) => {
        //여기가 문제인것 같다 아 졸려 일단 자고 내일 해야겠다..
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
