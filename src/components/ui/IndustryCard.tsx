import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, type LucideIcon } from 'lucide-react';

interface IndustryCardProps {
  icon: LucideIcon;
  name: string;
  description: string;
  className?: string;
}

export default function IndustryCard({
  icon: Icon,
  name,
  description,
  className = '',
}: IndustryCardProps) {
  return (
    <motion.div
      className={`rounded-[24px] border border-border bg-card p-7 flex flex-col justify-between h-full select-none group relative ${className}`}
      whileHover={{
        y: -4,
        boxShadow:
          '0 20px 40px -4px rgba(0, 0, 0, 0.5), 0 8px 16px -6px rgba(0, 0, 0, 0.3)',
        borderColor: 'rgba(197, 160, 89, 0.3)',
      }}
      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div>
        {/* Glass Icon Container */}
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 border border-white/[0.08] shadow-md transition-all duration-300 group-hover:scale-105 group-hover:bg-accent/10 group-hover:border-accent/30">
          <Icon size={20} className="text-accent" strokeWidth={1.75} />
        </div>

        <h3 className="mt-5 text-[17px] font-bold text-foreground tracking-tight">{name}</h3>

        <p className="mt-2 text-sm leading-relaxed text-muted-foreground font-sans">
          {description}
        </p>
      </div>

      {/* Floating Arrow Indicator */}
      <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 text-accent bg-accent/10 border border-accent/20 p-1.5 rounded-lg">
        <ArrowUpRight size={14} strokeWidth={2.5} />
      </div>
    </motion.div>
  );
}
