import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';

const RecoilTestObserver = ({ node, onChange }: { node: any; onChange: any }) => {
  const value = useRecoilValue(node);
  useEffect(() => {
    onChange(value);
  }, [onChange, value]);
  return null;
};

export default RecoilTestObserver;
