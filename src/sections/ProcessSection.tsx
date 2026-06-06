'use client';

import { motion } from 'framer-motion';
import { SectionContainer, AnimatedHeading } from '@/components/ui';
import { StaggerChildren, StaggerItem } from '@/components/animations';
import { ArrowRight } from 'lucide-react';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

const steps: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery & Audit',
    description:
      'We map your current operations, identify bottlenecks, and assess the highest-impact opportunities across your business systems.',
  },
  {
    number: '02',
    title: 'Strategy & Architecture',
    description:
      'We design the solution architecture, choose the right technology stack, and scope the smallest build that delivers measurable ROI.',
  },
  {
    number: '03',
    title: 'Agile Development',
    description:
      'We build in focused sprints with regular checkpoints, transparent progress, and continuous stakeholder feedback.',
  },
  {
    number: '04',
    title: 'Deploy & Optimize',
    description:
      'We ship, monitor, measure results, and iterate — treating launch as the beginning, not the end.',
  },
];

export default function ProcessSection() {
  return (
    <SectionContainer id="process" background="muted">
      <AnimatedHeading as="h2" align="center">
        Our Process
      </AnimatedHeading>
      <p className="text-muted-foreground text-center max-w-2xl mx-auto mt-4">
        A proven methodology focused on delivering maximum ROI at every stage — from discovery
        through deployment and beyond.
      </p>

      <StaggerChildren className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 lg:gap-8 relative">
        {steps.map((step, index) => (
          <StaggerItem key={step.number}>
            <motion.div
              className="relative flex flex-col items-center text-center group"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="relative">
                <div className="w-20 h-20 rounded-full border-2 border-accent/30 bg-accent/5 flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition-all duration-300">
                  <span className="text-2xl font-extrabold text-accent font-heading">{step.number}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-accent/30 to-transparent">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2">
                      <ArrowRight className="w-4 h-4 text-accent/40" />
                    </div>
                  </div>
                )}
              </div>
              <h3 className="text-xl font-bold mt-6 text-foreground tracking-tight group-hover:text-accent transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mt-3 font-sans max-w-xs">
                {step.description}
              </p>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </SectionContainer>
  );
}
