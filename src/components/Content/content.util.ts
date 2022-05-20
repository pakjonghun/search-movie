export function checkIsGenresInclude(genre_ids: number[], genres: number[]) {
  switch (true) {
    case genres.length == 0:
      return true;
    case genres.length > 0: {
      const isInclude = genre_ids.some((genreId) => genres.includes(genreId));
      return isInclude;
    }
    default:
      throw new Error('error on movieItemState');
  }
}

export function checkIsPopularityMatch(vote_average: number, popularities: number[]) {
  switch (popularities.length) {
    case 0:
      return true;
    case 1:
      return popularities[0] == vote_average;
    case 2: {
      const [min, max] = popularities;
      return min <= vote_average && vote_average <= max;
    }
    default:
      throw new Error('error on moviesByPopularities');
  }
}
