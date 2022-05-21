import { PathType } from './hooks.type';
import { useLocation } from 'react-router-dom';
const useCheckContent = (pathType?: PathType) => {
  const { pathname } = useLocation();
  const content = pathname.includes('tv') ? 'tv' : 'movie';
  const splited = pathname.split('/');

  switch (pathType) {
    case 'raw':
      return content;
    case 'first':
      return splited[1];
    case 'second':
      return splited[2];
    case undefined:
      return content;
    default:
      throw new Error('error on useCheckContent');
  }
};

export default useCheckContent;
