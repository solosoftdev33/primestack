'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  href?: string;
  loading?: boolean;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  id?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-accent text-accent-foreground hover:bg-[#D6B574] border border-transparent shadow-[0_4px_20px_rgba(197,160,89,0.15)] transition-all duration-300',
  secondary:
    'bg-white/5 text-foreground border border-white/[0.08] hover:bg-white/10 hover:border-white/[0.15] shadow-[0_2px_6px_rgba(0,0,0,0.15)] transition-all duration-300',
  outline:
    'border border-white/[0.08] text-foreground hover:bg-white/5 hover:border-accent/30 transition-all duration-300',
  ghost:
    'text-muted-foreground hover:text-foreground hover:bg-white/5 bg-transparent transition-all duration-300',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

const MotionLink = motion.create(Link);

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  loading = false,
  disabled = false,
  onClick,
  type = 'button',
  id,
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 cursor-pointer select-none';
  const disabledStyles = 'opacity-50 pointer-events-none';

  const combinedClassName = [
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    (disabled || loading) ? disabledStyles : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const content = (
    <>
      {loading && (
        <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
      )}
      {children}
    </>
  );

  if (href && !disabled && !loading) {
    return (
      <MotionLink
        id={id}
        href={href}
        className={combinedClassName}
        whileHover={{ y: -2 }}
        whileTap={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      >
        {content}
      </MotionLink>
    );
  }

  return (
    <motion.button
      id={id}
      type={type}
      className={combinedClassName}
      disabled={disabled || loading}
      onClick={onClick}
      whileHover={disabled || loading ? undefined : { y: -2 }}
      whileTap={disabled || loading ? undefined : { y: 0 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
    >
      {content}
    </motion.button>
  );
}
