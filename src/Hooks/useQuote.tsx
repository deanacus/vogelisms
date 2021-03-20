import { useState, useEffect } from 'react';

const randomIndex = (len: number): number => Math.ceil(Math.random() * len) - 1;

export const useQuote = (arr: string[]) => {
  const [ind, setInd] = useState<number | null>(randomIndex(arr.length));

  useEffect(() => {
    const updateIndex: EventListener = (e) => {
      if (e instanceof KeyboardEvent && e.keyCode === 32) {
        setInd(randomIndex(arr.length));
      }
    };
    document.addEventListener('keydown', updateIndex);
    return () => document.removeEventListener('keydown', updateIndex);
  }, [arr.length]);

  return ind ? arr[ind] : ind;
};
