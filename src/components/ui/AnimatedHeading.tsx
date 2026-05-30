'use client';

import React from 'react';
import { motion } from 'framer-motion';

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4';
type HeadingAlign = 'left' | 'center';

interface AnimatedHeadingProps {
  children: React.ReactNode;
  as?: HeadingTag;
  className?: string;
  align?: HeadingAlign;
}

// Pre-create motion components outside render to avoid re-creation on each render
const motionHeadings = {
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  h4: motion.h4,
} as const;

const tagStyles: Record<HeadingTag, string> = {
  h1: 'text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl tracking-tighter leading-[1.05]',
  h2: 'text-3xl font-bold md:text-4xl lg:text-5xl xl:text-6xl tracking-tight leading-[1.1]',
  h3: 'text-2xl font-semibold md:text-3xl lg:text-4xl tracking-tight leading-[1.15]',
  h4: 'text-xl font-semibold md:text-2xl lg:text-3xl tracking-tight',
};

const alignStyles: Record<HeadingAlign, string> = {
  left: 'text-left',
  center: 'text-center',
};

export default function AnimatedHeading({
  children,
  as = 'h2',
  className = '',
  align = 'left',
}: AnimatedHeadingProps) {
  const MotionTag = motionHeadings[as];

  const combinedClassName = [
    'text-foreground leading-tight tracking-tight',
    tagStyles[as],
    alignStyles[align],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <MotionTag
      className={combinedClassName}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {children}
    </MotionTag>
  );
}
