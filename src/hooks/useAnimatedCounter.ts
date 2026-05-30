'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

interface UseAnimatedCounterReturn {
  count: number;
  ref: React.RefCallback<HTMLElement>;
}

/**
 * Animated counter that triggers when the element scrolls into view.
 * Uses `requestAnimationFrame` with ease-out for smooth animation.
 *
 * @param end   - The target number to count up to.
 * @param duration - Animation duration in seconds (default: 2).
 */
export function useAnimatedCounter(
  end: number,
  duration: number = 2
): UseAnimatedCounterReturn {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const elementRef = useRef<HTMLElement | null>(null);

  const animate = useCallback(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    const startTime = performance.now();
    const durationMs = duration * 1000;

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / durationMs, 1);

      // Ease-out cubic: decelerates toward the end
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * end));

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    }

    requestAnimationFrame(tick);
  }, [end, duration]);

  const ref = useCallback(
    (node: HTMLElement | null) => {
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
            animate();
            observerRef.current?.disconnect();
          }
        },
        { threshold: 0.3 }
      );

      observerRef.current.observe(node);
    },
    [animate]
  );

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return { count, ref };
}
