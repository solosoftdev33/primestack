'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

interface UseScrollRevealReturn {
  ref: React.RefCallback<HTMLElement>;
  isInView: boolean;
}

/**
 * Scroll-reveal hook that detects when an element enters the viewport.
 * Triggers only once (does not reset when scrolling away).
 *
 * @returns `{ ref, isInView }` — attach `ref` to the target element.
 */
export function useScrollReveal(): UseScrollRevealReturn {
  const [isInView, setIsInView] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const elementRef = useRef<HTMLElement | null>(null);

  const ref = useCallback((node: HTMLElement | null) => {
    // Cleanup previous observer
    if (observerRef.current && elementRef.current) {
      observerRef.current.unobserve(elementRef.current);
      observerRef.current.disconnect();
    }

    elementRef.current = node;

    if (!node || typeof IntersectionObserver === 'undefined') return;

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observerRef.current?.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observerRef.current.observe(node);
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return { ref, isInView };
}
