'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from './Button';

interface CTABannerProps {
  heading: string;
  subtext: string;
  buttonText: string;
  buttonHref: string;
  className?: string;
}

export default function CTABanner({
  heading,
  subtext,
  buttonText,
  buttonHref,
  className = '',
}: CTABannerProps) {
  return (
    <motion.div
      className={`rounded-[32px] bg-card border border-accent/20 px-8 py-20 md:py-24 text-center relative overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.5)] select-none ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Premium radial gradient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.08)_0%,transparent_60%)] pointer-events-none" />
      
      {/* Decorative ambient points */}
      <div className="absolute top-0 left-0 w-44 h-44 bg-accent/[0.03] rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-52 h-52 bg-accent/[0.02] rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl font-bold leading-[1.1] tracking-tighter text-foreground md:text-4xl lg:text-5xl max-w-2xl font-heading">
          {heading}
        </h2>

        <p className="mt-5 text-sm md:text-base leading-relaxed text-muted-foreground max-w-xl font-medium">
          {subtext}
        </p>

        <div className="mt-10">
          <Button
            id="cta-banner-btn"
            href={buttonHref}
            variant="primary"
            size="lg"
            className="text-[14px]"
          >
            {buttonText}
            <ArrowRight size={16} strokeWidth={2.5} className="ml-1 shrink-0" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
