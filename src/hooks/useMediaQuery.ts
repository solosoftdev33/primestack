'use client';

import { useEffect, useState } from 'react';

/**
 * SSR-safe hook that evaluates a CSS media query string.
 * Returns `false` on the server and resolves on the client.
 *
 * @param query - A valid CSS media query, e.g. `'(min-width: 768px)'`
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQueryList = window.matchMedia(query);

    function handleChange(event: MediaQueryListEvent) {
      setMatches(event.matches);
    }

    mediaQueryList.addEventListener('change', handleChange);

    return () => {
      mediaQueryList.removeEventListener('change', handleChange);
    };
  }, [query]);

  return matches;
}
