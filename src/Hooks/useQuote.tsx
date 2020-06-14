import { useState, useEffect } from "react";

export const useQuote = (arr: any[]) => {
  const [ind, setInd] = useState<number | null>(null);
  const randomIndex = (len: number): number =>
    Math.ceil(Math.random() * len) - 1;

  useEffect(() => {

    setInd(randomIndex(arr.length));
    window.addEventListener("keydown", (e) => {
      if (e.keyCode === 32) {
        setInd(randomIndex(arr.length))
      }
    });
    return () => window.removeEventListener("keydown", (e) => {
      if (e.keyCode === 32) {
        setInd(randomIndex(arr.length))
      }
    });
  }, [arr.length]);

  return ind ? arr[ind] : ind;
};
