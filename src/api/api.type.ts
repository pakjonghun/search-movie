export type FetchPayload = { url: string; params?: any };

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
  genre_ids: number[];
  adult: boolean;
  id: number;
  overview: string;
  vote_average: number;
  first_air_date?: string;
  title?: string;
  name?: string;
  release_date?: string;
};

type MovieVideo = {
  key: string;
};

export type MovieVideoList = {
  results: MovieVideo[];
};
