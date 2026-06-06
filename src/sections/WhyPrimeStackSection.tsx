'use client';

import React from 'react';
import { ShieldCheck, UserCheck, Zap, DollarSign, HeartHandshake, Target } from 'lucide-react';
import { SectionContainer, AnimatedHeading, Card } from '@/components/ui';
import { StaggerChildren, StaggerItem } from '@/components/animations';

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Enterprise-Quality Execution',
    description:
      'Production-grade systems with clean architecture, comprehensive testing, and scalable infrastructure — without the bloated agency overhead.',
  },
  {
    icon: UserCheck,
    title: 'Direct Developer Access',
    description:
      'You work directly with the engineers building your system. No account managers or layers of abstraction — just clear communication and fast decisions.',
  },
  {
    icon: Zap,
    title: 'Faster Turnaround',
    description:
      'Small, focused teams move faster. We ship working software in weeks, not quarters, and iterate based on real usage and feedback.',
  },
  {
    icon: DollarSign,
    title: 'Leaner Pricing',
    description:
      'We keep our overhead lean and pass the savings to you. Enterprise-grade deliverables at rates that make sense for growing businesses.',
  },
  {
    icon: HeartHandshake,
    title: 'Long-Term Partnership',
    description:
      'We don\'t disappear after launch. Every engagement includes ongoing support, monitoring, and strategic optimization as your business evolves.',
  },
  {
    icon: Target,
    title: 'ROI-Driven Everything',
    description:
      'Every feature, every sprint, every decision is measured against business impact. If it doesn\'t improve your bottom line, we don\'t build it.',
  },
];

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
        {reasons.map((reason) => (
          <StaggerItem key={reason.title}>
            <Card hover={true} padding="lg" className="h-full border-border hover:border-accent/30 transition-all duration-300 group">
              <div className="flex flex-col items-start text-left gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                  <reason.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-foreground font-heading tracking-tight">{reason.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
              </div>
            </Card>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </SectionContainer>
  );
}
