import { fallbackwatchlist } from '@/utils/constant';
import { useState, useEffect } from 'react';

const useLocalStorage = (key: string) => {
  const [value, setValue] = useState(() => {
    let currentValue;

    const initialState = JSON.stringify(fallbackwatchlist);
    try {
      currentValue = JSON.parse(localStorage.getItem(key) || String(initialState));
    } catch (error) {
      currentValue = initialState;
    }

    return currentValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};

export default useLocalStorage;
