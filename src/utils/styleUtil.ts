import empty from '@assets/empty.jpg';

export const joinClass = (...classes: string[]) => classes.join(' ');

export const imgUrlMaker = (url: string) => `https://image.tmdb.org/t/p/w500${url}`;

export const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
  (event.target as HTMLImageElement).src =
    'https://imagedelivery.net/0ZP-N9B45ji28JoChYUvWw/ab54fe5f-6119-4fc4-b881-c22b2dbb3100/public';
};
