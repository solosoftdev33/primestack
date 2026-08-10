'use client';

import { motion } from 'framer-motion';
import { SectionContainer, AnimatedHeading } from '@/components/ui';
import { StaggerChildren, StaggerItem } from '@/components/animations';
import { ArrowRight } from 'lucide-react';
import { processSteps } from '@/lib/site-content';

export default function ProcessSection() {
  const steps = processSteps;

  return (
    <SectionContainer id="process" background="muted">
      <AnimatedHeading as="h2" align="center">
        How We Work
      </AnimatedHeading>
      <p className="text-muted-foreground text-center max-w-2xl mx-auto mt-4">
        A practical process with clear milestones — from a free audit to a
        system that keeps improving after launch.
      </p>

      <StaggerChildren className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 lg:gap-8 relative">
        {steps.map((step, index) => (
          <StaggerItem key={step.step}>
            <motion.div
              className="relative flex flex-col items-center text-center group"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="relative">
                <div className="w-20 h-20 rounded-full border-2 border-accent/30 bg-accent/5 flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition-all duration-300">
                  <span className="text-2xl font-extrabold text-accent font-heading">{step.step}</span>
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
