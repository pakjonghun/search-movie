import empty from '@assets/empty.jpg';

export const joinClass = (...classes: string[]) => classes.join(' ');

export const imgUrlMaker = (url: string) => `https://image.tmdb.org/t/p/w500${url}`;

export const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
  (event.target as HTMLImageElement).src = empty;
};
