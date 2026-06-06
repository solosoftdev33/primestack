'use client';

import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { StaggerChildren, StaggerItem } from '@/components/animations';
import {
  AnimatedHeading,
  SectionContainer,
  Card,
} from '@/components/ui';
import { useAnimatedCounter } from '@/hooks';

function AnimatedStat({ val, label }: { val: string; label: string }) {
  const numVal = parseInt(val.replace(/[^0-9]/g, ''));
  const suffix = val.endsWith('x') ? 'x' : '%';
  const prefix = val.includes('-') ? '-' : '';
  const { count, ref } = useAnimatedCounter(numVal, 2.5);

  return (
    <div ref={ref} className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
      <span className="text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-[-0.05em] text-accent font-heading leading-none">
        {prefix}{count}{suffix}
      </span>
      <span className="text-xs md:text-[13px] font-bold text-muted-foreground uppercase tracking-wider">
        {label}
      </span>
    </div>
  );
}

const stats = [
  { val: '60%', label: 'Reduction in Manual Work' },
  { val: '3x', label: 'Faster Customer Follow-ups' },
  { val: '40%', label: 'More Qualified Inbound Leads' },
];

const impactItems = [
  'Centralized business operations & reporting',
  'Better lead tracking & instant conversion loops',
  'Improved customer retention through automatic replies',
  'More efficient, zero-latency workflows',
  'Data-driven decision making and database integrations',
  'Reduced operational costs through optimized pipelines',
];

export default function ROISection() {
  return (
    <SectionContainer id="roi" background="white">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-start max-w-6xl mx-auto">
        <div className="lg:col-span-5 flex flex-col justify-start">
          <AnimatedHeading as="h2" align="left">
            Measurable Business Impact
          </AnimatedHeading>
          <p className="mt-5 text-muted-foreground leading-relaxed text-sm md:text-base mb-10 max-w-sm">
            Our solutions deliver tangible results that directly improve your bottom line,
            eliminating administrative overhead and speeding up sales cycles.
          </p>

          <div className="space-y-10 border-t border-border pt-10">
            {stats.map((stat, idx) => (
              <AnimatedStat key={idx} val={stat.val} label={stat.label} />
            ))}
          </div>
        </div>

        <div className="lg:col-span-7 w-full pt-4 lg:pt-0">
          <StaggerChildren className="grid grid-cols-1 gap-5">
            {impactItems.map((item, idx) => (
              <StaggerItem key={idx}>
                <Card hover={true} padding="md" className="border-border hover:border-accent/30 transition-all duration-200">
                  <div className="flex items-start gap-4">
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0 text-accent"
                      strokeWidth={2.5}
                      aria-hidden="true"
                    />
                    <span className="text-sm font-semibold leading-relaxed text-foreground/90">
                      {item}
                    </span>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </div>
    </SectionContainer>
  );
}
