'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, type LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  items: string[];
  className?: string;
  layout?: 'wide' | 'tall';
  visual?: React.ReactNode;
}

export default function ServiceCard({
  icon: Icon,
  title,
  items,
  className = '',
  layout = 'tall',
  visual,
}: ServiceCardProps) {
  const isWide = layout === 'wide';

  return (
    <motion.div
      className={`rounded-[24px] border border-border bg-card p-8 md:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.3)] flex flex-col justify-between overflow-hidden relative group ${
        isWide ? 'md:flex-row md:items-center gap-8 md:col-span-2' : 'gap-6 col-span-1'
      } ${className}`}
      whileHover={{
        y: -4,
        boxShadow: '0 24px 50px -12px rgba(0, 0, 0, 0.6), 0 16px 24px -16px rgba(0, 0, 0, 0.4)',
        borderColor: 'rgba(197, 160, 89, 0.3)',
      }}
      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className={`flex-1 flex flex-col justify-start z-10 ${isWide ? 'max-w-md' : ''}`}>
        {/* Icon Squircle Container */}
        <div className="w-12 h-12 bg-white/5 border border-white/[0.08] rounded-2xl flex items-center justify-center mb-6 shadow-md transition-all duration-300 group-hover:scale-105 group-hover:border-accent/30 group-hover:bg-accent/5">
          <Icon size={22} className="text-accent" strokeWidth={1.75} />
        </div>

        <h3 className="text-xl md:text-2xl font-bold text-foreground tracking-tight">{title}</h3>

        <ul className="mt-5 space-y-3">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
              <Check
                size={16}
                className="mt-0.5 shrink-0 text-accent"
                strokeWidth={2.5}
                aria-hidden="true"
              />
              <span className="font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {visual && (
        <div className={`w-full z-10 flex items-center justify-center ${
          isWide 
            ? 'md:w-1/2 aspect-[4/3] w-full md:max-w-none' 
            : 'aspect-[4/3] mt-2'
        }`}>
          {visual}
        </div>
      )}
    </motion.div>
  );
}
