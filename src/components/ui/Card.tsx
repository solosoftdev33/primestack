'use client';

import React from 'react';
import { motion } from 'framer-motion';

type CardPadding = 'sm' | 'md' | 'lg';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: CardPadding;
}

const paddingStyles: Record<CardPadding, string> = {
  sm: 'p-6',
  md: 'p-8',
  lg: 'p-10 md:p-12',
};

export default function Card({
  children,
  className = '',
  hover = true,
  padding = 'md',
}: CardProps) {
  const baseStyles = [
    'rounded-[24px] border border-border bg-card shadow-[0_4px_20px_rgba(0,0,0,0.2)]',
    paddingStyles[padding],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (hover) {
    return (
      <motion.div
        className={baseStyles}
        whileHover={{ y: -4, boxShadow: '0 24px 50px -12px rgba(0, 0, 0, 0.5), 0 16px 24px -16px rgba(0, 0, 0, 0.3)' }}
        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {children}
      </motion.div>
    );
  }

  return <div className={baseStyles}>{children}</div>;
}
