import { useEffect, useState } from 'react';

export const b = 1;

function useApp() {
    const [a, setA] = useState<string>('');
    const b = 1;
    useEffect(() => {
        setA('1');
        console.log(b, a);
    }, [a]);
}

export default useApp;
