import { useLocation } from 'react-router-dom';
const useCheckContent = () => {
  const { pathname } = useLocation();
  const content = pathname.includes('tv') ? 'tv' : 'movie';
  return content;
};

export default useCheckContent;
