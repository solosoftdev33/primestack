'use client';

import React from 'react';
import { UserCheck, ShieldCheck, Zap, FileText, HeartHandshake, Layers, type LucideIcon } from 'lucide-react';
import { SectionContainer, AnimatedHeading, Card } from '@/components/ui';
import { StaggerChildren, StaggerItem } from '@/components/animations';
import { whyPrimeStack } from '@/lib/site-content';

const icons: Record<string, LucideIcon> = {
  'Direct Developer Access': UserCheck,
  'Technical Depth': ShieldCheck,
  'Working Prototypes, Fast': Zap,
  'Transparent Scope & Pricing': FileText,
  'Long-Term Partnership': HeartHandshake,
  'Built Around Your Stack': Layers,
};

export default function WhyPrimeStackSection() {
  return (
    <SectionContainer id="why-primestack" background="white">
      <AnimatedHeading as="h2" align="center">
        Why PrimeStack US
      </AnimatedHeading>
      <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mt-4">
        Enterprise-quality execution with the speed and pricing of a lean, focused team.
      </p>

      <StaggerChildren className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {whyPrimeStack.map((reason) => {
          const Icon = icons[reason.title] || ShieldCheck;
          return (
            <StaggerItem key={reason.title}>
              <Card hover={true} padding="lg" className="h-full border-border hover:border-accent/30 transition-all duration-300 group">
                <div className="flex flex-col items-start text-left gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground font-heading tracking-tight">{reason.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
                </div>
              </Card>
            </StaggerItem>
          );
        })}
      </StaggerChildren>
    </SectionContainer>
  );
}
