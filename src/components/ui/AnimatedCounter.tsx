'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  label?: string;
  className?: string;
}

export default function AnimatedCounter({
  end,
  duration = 2,
  suffix = '',
  prefix = '',
  label,
  className = '',
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [hasTriggered, setHasTriggered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const animate = useCallback(() => {
    const startTime = performance.now();
    const durationMs = duration * 1000;

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / durationMs, 1);

      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * end);

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    }

    requestAnimationFrame(tick);
  }, [end, duration]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered) {
          setHasTriggered(true);
          animate();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [hasTriggered, animate]);

  return (
    <div
      ref={ref}
      className={`relative flex flex-col justify-between rounded-[24px] border border-border bg-card p-8 md:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.3)] overflow-hidden transition-all duration-300 hover:shadow-[0_24px_50px_rgba(0,0,0,0.5)] hover:border-accent/30 hover:-translate-y-0.5 group ${className}`}
    >
      {/* Sparkline background graphic */}
      <div className="absolute inset-x-0 bottom-0 h-16 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-300 pointer-events-none select-none">
        <svg className="w-full h-full" viewBox="0 0 100 20" preserveAspectRatio="none">
          <path
            d="M0 20 L10 18 L20 19 L30 15 L40 16 L50 12 L60 14 L70 8 L80 10 L90 3 L100 2 L100 20 Z"
            fill="currentColor"
            className="text-accent"
          />
          <path
            d="M0 20 L10 18 L20 19 L30 15 L40 16 L50 12 L60 14 L70 8 L80 10 L90 3 L100 2"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-accent"
          />
        </svg>
      </div>

      <div className="z-10 flex flex-col items-start text-left">
        {label && (
          <span className="text-[11px] uppercase tracking-wider text-muted-foreground font-bold mb-4">
            {label}
          </span>
        )}
        <span className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-accent leading-none font-heading">
          {prefix}
          {count.toLocaleString()}
          {suffix}
        </span>
      </div>
    </div>
  );
}
