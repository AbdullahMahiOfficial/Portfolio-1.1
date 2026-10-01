import { useState, useEffect } from 'react';

export const useAnimatedCounter = (target: number, duration: number = 2000, startAnimation: boolean = false) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;

    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCurrent(target);
        clearInterval(timer);
      } else {
        setCurrent(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, duration, startAnimation]);

  return current;
};