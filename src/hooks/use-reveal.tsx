import { useEffect, useRef, useState } from 'react';

/**
 * Мягкое появление секции при попадании во вьюпорт.
 * Возвращает ref и className-модификатор.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(threshold = 0.15) {
  const ref = useRef<T | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === 'undefined') {
      setShown(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            observer.disconnect();
          }
        });
      },
      { threshold, rootMargin: '0px 0px -60px 0px' },
    );

    observer.observe(node);

    // Подстраховка: контент не должен остаться невидимым,
    // если наблюдатель по какой-то причине не сработал.
    const timer = window.setTimeout(() => setShown(true), 2500);

    return () => {
      observer.disconnect();
      window.clearTimeout(timer);
    };
  }, [threshold]);

  return { ref, shown, className: shown ? 'reveal reveal-in' : 'reveal' };
}

export default useReveal;