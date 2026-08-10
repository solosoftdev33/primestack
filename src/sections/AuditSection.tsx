'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Send, Search, ListChecks, Handshake, ArrowRight } from 'lucide-react';
import { AnimatedHeading, SectionContainer } from '@/components/ui';
import { StaggerChildren, StaggerItem } from '@/components/animations';

const steps = [
  {
    icon: Send,
    title: 'Tell us what is slowing you down',
    description:
      'You fill in a short form — what you sell, what is frustrating, what you want to improve.',
  },
  {
    icon: Search,
    title: 'An engineer reviews your setup',
    description:
      'We look at your website, how you capture and follow up on leads, and where your team spends manual time.',
  },
  {
    icon: ListChecks,
    title: 'You receive a practical improvement plan',
    description:
      'A short, specific list of opportunities — ranked by what would move the needle most. No jargon.',
  },
  {
    icon: Handshake,
    title: 'You decide what happens next',
    description:
      'No obligation, no pushy sales call. If you like a recommendation, we can scope it properly. If not, keep the plan.',
  },
];

export default function AuditSection() {
  return (
    <SectionContainer id="audit" background="white">
      <AnimatedHeading as="h2" align="center">
        Start with a free business audit
      </AnimatedHeading>
      <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-muted-foreground">
        Before we talk about building anything, we want to understand where
        you are losing time and money. Here is exactly what happens.
      </p>

      <div className="relative mx-auto mt-16 max-w-5xl">
        <div className="absolute left-0 right-0 top-8 hidden lg:block">
          <div className="mx-auto h-px w-[75%] bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
        </div>

        <StaggerChildren className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, idx) => (
            <StaggerItem key={step.title} className="w-full">
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.035] p-7 transition hover:border-accent/30 hover:bg-white/[0.055]"
              >
                <div className="relative flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/25 bg-accent/[0.1] text-accent">
                    <step.icon size={20} strokeWidth={1.75} />
                  </div>
                  <span className="text-4xl font-extrabold tracking-tighter text-white/[0.06]">
                    {idx + 1}
                  </span>
                </div>
                <h3 className="mt-6 text-lg font-bold tracking-tight text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {step.description}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>

      <div className="mt-16 text-center">
        <a
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-black text-accent-foreground transition hover:bg-[#e2c37a]"
        >
          Get a Free Business Audit
          <ArrowRight className="h-5 w-5" aria-hidden="true" />
        </a>
        <p className="mt-4 text-xs text-muted-foreground">
          No spam. Your information is only used to respond to your inquiry.
        </p>
      </div>
    </SectionContainer>
  );
}
