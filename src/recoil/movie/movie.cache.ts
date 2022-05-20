import { apis } from '@api/api';
import { Content } from '@api/api.type';

export class MovieCache {
  private movieList: Record<number, Content | null> = {};
  static instance: MovieCache;

  public static getInstance() {
    return this.instance || new this();
  }

  async getMovie(movieId: number) {
    if (this.movieList[movieId]) return this.movieList[movieId];
    this.movieList[movieId] = await apis.movieDetail(movieId);
    return this.movieList[movieId];
  }
}
