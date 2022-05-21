import { Genre } from '@recoil/filter/filter.type';
export type FetchPayload = { url: string; params?: any };
export type SearchArgs = { cursor: number; searchTerm: string };

export type Response<T> = {
  page?: number;
  results?: T;
  total_pages?: number;
  total_results?: number;
  status_message?: string;
  status_code?: number;
};

export type Content = {
  poster_path: string;
  adult: boolean;
  id: number;
  overview: string;
  vote_average: number;
  first_air_date?: string;
  genre_ids?: number[];
  title?: string;
  name?: string;
  release_date?: string;
  genres?: Genre[];
};

type Video = {
  key: string;
};

export type VideoList = {
  results: Video[];
};
