import priority from '@assets/popularity/priority.jpg';
import top from '@assets/popularity/top.jpg';
import soso from '@assets/popularity/soso.jpg';
import bottom from '@assets/popularity/bottom.jpg';
import thrill from '@assets/genre/thrill.jpg';
import love from '@assets/genre/love.jpg';
import action from '@assets/genre/action.jpg';
import sf from '@assets/genre/sf.jpg';
import animation from '@assets/genre/animation.jpg';
import impressive from '@assets/genre/impressive.jpg';

export const contentSelector = {
  ['none' as string]: '구분없음',
  popularity: '평점구분',
  genre: '장르구분',
};

export const popularitySelector = [
  {
    title: '높은평점',
    subTitle: '10~8',
    description: '재미있어요',
    image: priority,
  },
  {
    title: '우수한 평점',
    subTitle: '5~7',
    description: '볼만해요',
    image: top,
  },
  {
    title: '중간 평점',
    subTitle: '2~4',
    description: '호불호가 갈려요',
    image: soso,
  },
  {
    title: '낮은 평점',
    subTitle: '0~1',
    description: '글쎄요...',
    image: bottom,
  },
];

export const genreSelector = [
  {
    title: '액션',
    image: action,
    ids: [28, 12, 10752],
  },
  {
    title: '멜로',
    image: love,
    ids: [10749, 37],
  },
  {
    title: 'SF',
    ids: [14, 36, 878, 10770],
    image: sf,
  },
  {
    title: '스릴',
    ids: [80, 27, 9648, 53],
    image: thrill,
  },
  {
    title: '감동',
    ids: [35, 18, 99, 10751, 10402],

    image: impressive,
  },
  {
    title: '애니',
    ids: [16],
    image: animation,
  },
];
