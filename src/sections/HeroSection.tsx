'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui';
import {
  Globe,
  Bot,
  DatabaseZap,
  Workflow,
  CalendarCheck,
  ArrowRight,
} from 'lucide-react';

const techStack = [
  'Next.js',
  'React',
  'TypeScript',
  'Python',
  'FastAPI',
  'PostgreSQL',
  'Supabase',
  'Flutter',
  'Odoo',
  'OpenAI',
];

const capabilities = [
  {
    icon: Globe,
    title: 'Websites',
    description: 'Fast, clear sites built to capture leads and rank locally.',
  },
  {
    icon: Bot,
    title: 'AI Receptionist',
    description: 'Answers calls and chats after hours, so no lead goes cold.',
  },
  {
    icon: DatabaseZap,
    title: 'CRM & ERP',
    description: 'One source of truth for customers, inventory, and jobs.',
  },
  {
    icon: Workflow,
    title: 'Automation',
    description: 'Follow-ups, routing, and admin work handled automatically.',
  },
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-background"
    >
      <div className="absolute inset-0 bg-radial-glow pointer-events-none z-0 opacity-70" />
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none z-0 animate-pulse-slow" />

      <div className="section-container relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">

          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/25 text-xs font-semibold text-accent mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              For growing US businesses
            </motion.div>

            <motion.h1
              className="max-w-[720px] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-[-0.04em] text-foreground leading-[1.02] mb-6 font-heading"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            >
              Build Better Systems. Capture More Business. Automate the Work.
            </motion.h1>

            <motion.p
              className="max-w-[600px] text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 font-sans"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              PrimeStack US builds websites, AI-powered customer experiences,
              CRM/ERP workflows, and custom software for growing US businesses.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-10"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              <Button id="hero-cta-audit" href="/contact" variant="primary" size="lg">
                Get a Free Business Audit
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Button>
              <Button id="hero-cta-engineer" href="/contact" variant="outline" size="lg">
                Talk to an Engineer
              </Button>
            </motion.div>

            <motion.div
              className="flex flex-col gap-3 pt-6 border-t border-border w-full max-w-[600px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.35 }}
            >
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">
                Technologies we build with
              </span>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] text-foreground/90 font-semibold">
                {techStack.map((tech, idx) => (
                  <React.Fragment key={tech}>
                    {idx > 0 && <span className="text-white/10 font-light">•</span>}
                    <span className="hover:text-accent transition-colors cursor-default">{tech}</span>
                  </React.Fragment>
                ))}
              </div>
            </motion.div>

          </div>

          {/* Right Column: Clean capability panels (no fake metrics) */}
          <div className="lg:col-span-5 mt-12 lg:mt-0">
            <div className="relative">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {capabilities.map((cap, idx) => (
                  <motion.div
                    key={cap.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="rounded-[20px] border border-white/[0.08] bg-card p-5 shadow-[0_12px_36px_rgba(0,0,0,0.4)]"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-accent/20 bg-accent/[0.09] text-accent">
                      <cap.icon size={18} strokeWidth={1.75} />
                    </div>
                    <h3 className="mt-4 text-[15px] font-bold text-foreground tracking-tight">
                      {cap.title}
                    </h3>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground font-sans">
                      {cap.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="mt-4 rounded-[20px] border border-accent/25 bg-accent/[0.08] p-5 flex items-center gap-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                  <CalendarCheck size={18} strokeWidth={2} />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">
                    Start with a free business audit
                  </p>
                  <p className="text-[13px] text-muted-foreground">
                    We review your current setup and give you a practical improvement plan. No obligation.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
          className="mt-16 md:mt-24 pt-8 border-t border-border w-full"
        >
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold text-center mb-6">
            We build for businesses across these industries
          </p>
          <div className="flex flex-wrap items-center justify-center md:justify-between gap-x-12 gap-y-6 opacity-70 transition-opacity duration-300">
            <span className="font-bold text-xs tracking-wider text-foreground/80 uppercase">HVAC & Home Services</span>
            <span className="font-bold text-xs tracking-wider text-foreground/80 uppercase">Med Spas</span>
            <span className="font-bold text-xs tracking-wider text-foreground/80 uppercase">Manufacturing</span>
            <span className="font-bold text-xs tracking-wider text-foreground/80 uppercase">Contractors</span>
            <span className="font-bold text-xs tracking-wider text-foreground/80 uppercase">Restaurants</span>
            <span className="font-bold text-xs tracking-wider text-foreground/80 uppercase">Professional Services</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
