'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Target } from 'lucide-react';
import { SectionContainer, AnimatedHeading } from '@/components/ui';
import { StaggerChildren, StaggerItem } from '@/components/animations';
import { solutionExamples } from '@/lib/site-content';

export default function SolutionExamplesSection() {
  return (
    <SectionContainer id="solutions" background="white">
      <AnimatedHeading as="h2" align="center">
        What We Can Build
      </AnimatedHeading>
      <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-muted-foreground">
        Real problems we solve every day, shown as examples of the work we do —
        built for your business, not lifted from a template.
      </p>
      <p className="mx-auto mt-3 max-w-2xl text-center text-xs text-muted-foreground/80">
        Illustrative solution examples — not client case studies.
      </p>

      <StaggerChildren className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {solutionExamples.map((example) => (
          <StaggerItem key={example.title} className="w-full">
            <motion.article
              className="h-full rounded-3xl border border-white/10 bg-white/[0.035] p-8 transition hover:border-accent/30 hover:bg-white/[0.055]"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-[10px] uppercase tracking-wider text-accent bg-accent/10 border border-accent/20 px-3.5 py-1.5 rounded-full font-bold">
                  {example.industry}
                </span>
              </div>

              <h3 className="mt-6 text-2xl font-bold text-foreground tracking-tight leading-tight font-heading">
                {example.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                {example.context}
              </p>

              <div className="mt-6 grid gap-3 border-t border-white/10 pt-5">
                {example.capabilities.map((capability) => (
                  <div key={capability} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-accent" />
                    <p className="text-sm font-semibold leading-6 text-foreground/85">
                      {capability}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-accent/20 bg-accent/[0.08] p-4 flex items-start gap-3">
                <Target className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <p className="text-sm font-bold leading-6 text-foreground">
                  {example.objective}
                </p>
              </div>
            </motion.article>
          </StaggerItem>
        ))}
      </StaggerChildren>

      <div className="mt-14 text-center">
        <a
          href="/solutions"
          className="inline-flex items-center gap-2 text-sm font-extrabold text-accent transition hover:gap-3"
        >
          See all solution examples
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </SectionContainer>
  );
}
