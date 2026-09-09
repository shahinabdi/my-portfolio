import { useEffect } from 'react';

/**
 * Adds `is-visible` class to all `.reveal` elements when they enter the viewport.
 * Respects prefers-reduced-motion (elements are visible immediately via CSS).
 */
export function useReveal(): void {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('.reveal');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -80px 0px', threshold: 0.1 },
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
