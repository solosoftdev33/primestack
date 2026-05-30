'use client';

import React from 'react';
import { SectionContainer, AnimatedHeading } from '@/components/ui';

interface ComparisonRow {
  topic: string;
  agency: string;
  primestack: string;
}

const COMPARISON_ROWS: ComparisonRow[] = [
  {
    topic: 'Product Deliverable',
    agency: 'Simple static websites or basic template portfolios',
    primestack: 'Sleek, integrated automation & growth systems',
  },
  {
    topic: 'Client Relationship',
    agency: 'One-time transactional, hands-off projects',
    primestack: 'Long-term scaling and active ROI partnerships',
  },
  {
    topic: 'Core Philosophy',
    agency: 'Generic code without tracking business outcomes',
    primestack: 'Business-first solutions focused on revenue',
  },
  {
    topic: 'Workflow Automation',
    agency: 'Manual administrative tasks and zero API links',
    primestack: 'Fully integrated AI agent & backend workflows',
  },
];

export default function WhyPrimeStackSection() {
  return (
    <SectionContainer id="why-primestack" background="muted">
      <AnimatedHeading as="h2" align="center">
        Why Businesses Choose PrimeStack
      </AnimatedHeading>
      <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mt-4">
        We don&apos;t just write code. We solve operational bottlenecks, improve
        customer experiences, and build systems that scale businesses.
      </p>

      {/* Comparison Grid Table */}
      <div className="mt-16 w-full max-w-4xl mx-auto overflow-hidden bg-card border border-border rounded-[24px] shadow-[0_4px_24px_rgba(0,0,0,0.4)] select-none">
        
        {/* Table Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 border-b border-border bg-muted py-6 px-6 font-bold text-[10px] uppercase tracking-widest gap-4 items-center">
          <div className="md:col-span-4 text-muted-foreground">Service Feature</div>
          <div className="md:col-span-4 text-muted-foreground">Traditional Agencies</div>
          <div className="md:col-span-4 text-accent font-extrabold border-l-0 md:border-l border-border md:pl-6">PrimeStack Approach</div>
        </div>

        {/* Table Body */}
        <div className="divide-y divide-border">
          {COMPARISON_ROWS.map((row, idx) => (
            <div 
              key={idx} 
              className="grid grid-cols-1 md:grid-cols-12 py-6 px-6 items-center gap-4 hover:bg-muted/30 transition-colors duration-200"
            >
              {/* Topic Column */}
              <div className="md:col-span-4 font-extrabold text-foreground text-sm md:text-[15px] leading-snug tracking-tight">
                {row.topic}
              </div>
              
              {/* Traditional Agencies Column */}
              <div className="md:col-span-4 text-xs md:text-sm text-muted-foreground flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-red-500/10 text-red-400 border border-red-500/20 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5" aria-hidden="true">✕</span>
                <span className="leading-relaxed">{row.agency}</span>
              </div>
              
              {/* PrimeStack Column */}
              <div className="md:col-span-4 text-xs md:text-sm text-foreground font-semibold flex items-start gap-3 bg-accent/5 md:bg-transparent -mx-2 px-3 py-3 md:py-0 md:px-0 rounded-2xl md:border-l border-border md:pl-6 md:-my-6 md:h-full md:flex-row md:items-center">
                <span className="w-5 h-5 rounded-full bg-accent/20 text-accent border border-accent/30 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 md:mt-0" aria-hidden="true">✓</span>
                <span className="leading-relaxed">{row.primestack}</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </SectionContainer>
  );
}
