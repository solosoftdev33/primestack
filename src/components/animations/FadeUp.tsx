'use client';

import { type ReactNode } from 'react';
import { motion } from 'framer-motion';

interface FadeUpProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export function FadeUp({
  children,
  className,
  delay = 0,
  duration = 0.6,
}: FadeUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration, ease: 'easeOut', delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
