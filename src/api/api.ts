import { getFetchByFetch } from './util';
import { Content, Response, MovieVideoList, SearchArgs } from './api.type';
import { Genre } from '@recoil/filter/filter.type';

export const apis = {
  movieDetail: async (movieId: number) => {
    const movie = await getFetchByFetch<Content>({
      url: `/movie/${movieId}`,
    });
    return movie || null;
  },

  genresMovie: async () => {
    const { genres } = await getFetchByFetch<{ genres: Genre[] }>({ url: '/genre/movie/list' });
    return genres;
  },

  genresTV: async () => {
    const { genres } = await getFetchByFetch<{ genres: Genre[] }>({ url: '/genre/tv/list' });
    return genres;
  },

  popularMovies: async (page: number) => {
    const { results } = await getFetchByFetch<Response<Content[]>>({
      url: '/movie/popular',
      params: { page },
    });
    return results;
  },

  upcomingMovies: async (page: number) => {
    const { results } = await getFetchByFetch<Response<Content[]>>({
      url: '/movie/upcoming',
      params: { page },
    });
    return results;
  },

  searchMovies: async ({ cursor, searchTerm }: SearchArgs) => {
    const { results } = await getFetchByFetch<Response<Content[]>>({
      url: '/search/movie',
      params: { page: cursor, query: searchTerm },
    });
    return results;
  },

  popularTVs: async (page: number) => {
    const { results } = await getFetchByFetch<Response<Content[]>>({
      url: '/tv/popular',
      params: { page },
    });
    return results;
  },

  onAirTVs: async (page: number) => {
    const { results } = await getFetchByFetch<Response<Content[]>>({
      url: '/tv/on_the_air',
      params: { page },
    });
    return results;
  },

  searchTVs: async ({ cursor, searchTerm }: SearchArgs) => {
    const { results } = await getFetchByFetch<Response<Content[]>>({
      url: '/search/tv',
      params: { page: cursor, query: searchTerm },
    });
    return results;
  },

  movieVideo: async (movieId: number) => {
    const { results } = await getFetchByFetch<MovieVideoList>({
      url: `/movie/${movieId}/videos`,
    });
    const videoKeyList = results?.map(({ key }) => key) || [];
    return videoKeyList;
  },
  tvVideo: async (tvId: number) => {
    const { results } = await getFetchByFetch<MovieVideoList>({
      url: `/tv/${tvId}/videos`,
    });
    if (results.some(({ key }) => key == undefined)) return [];
    const videoKeyList = results?.map(({ key }) => key) || [];
    return videoKeyList;
  },
};
