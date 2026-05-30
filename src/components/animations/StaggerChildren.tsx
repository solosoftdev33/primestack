'use client';

import { type ReactNode } from 'react';
import { motion, type Variants } from 'framer-motion';

interface StaggerChildrenProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  delay?: number;
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (custom: { staggerDelay: number; delay: number }) => ({
    opacity: 1,
    transition: {
      delayChildren: custom.delay,
      staggerChildren: custom.staggerDelay,
    },
  }),
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export function StaggerChildren({
  children,
  className,
  staggerDelay = 0.1,
  delay = 0,
}: StaggerChildrenProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      custom={{ staggerDelay, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: StaggerItemProps) {
  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}
