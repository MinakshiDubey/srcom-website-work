import { useEffect, useRef } from 'react';

export const useScrollReveal = (options = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      },
      { threshold: options.threshold || 0.1, ...options }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [options]);

  return ref;
};