'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionContainer, AnimatedHeading, Card } from '@/components/ui';
import { StaggerChildren, StaggerItem } from '@/components/animations';

interface TechGroup {
  name: string;
  items: string[];
}

const techGroups: TechGroup[] = [
  {
    name: 'Frontend',
    items: ['Next.js', 'React', 'TypeScript'],
  },
  {
    name: 'Backend',
    items: ['Python', 'FastAPI', 'PostgreSQL'],
  },
  {
    name: 'Database & Infrastructure',
    items: ['PostgreSQL', 'Supabase', 'Cloud'],
  },
  {
    name: 'Mobile',
    items: ['Flutter', 'React Native', 'Dart'],
  },
  {
    name: 'Business Systems',
    items: ['Odoo', 'ERP', 'CRM'],
  },
  {
    name: 'AI & Automation',
    items: ['OpenAI', 'LangChain', 'Custom Agents'],
  },
];

const marqueeTech = [
  'Next.js', 'React', 'TypeScript', 'Python', 'FastAPI',
  'PostgreSQL', 'Supabase', 'Flutter', 'Odoo', 'OpenAI',
  'Docker', 'AWS', 'Vercel', 'Tailwind CSS', 'Framer Motion',
  'LangChain', 'Redis', 'GraphQL', 'REST APIs', 'CI/CD',
];

function MarqueeBar() {
  return (
    <div className="relative mt-20 overflow-hidden w-full">
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      <motion.div
        className="flex gap-12 items-center"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        {[...marqueeTech, ...marqueeTech].map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="text-xs font-bold uppercase tracking-widest text-accent/30 hover:text-accent transition-colors duration-300 whitespace-nowrap select-none cursor-default"
          >
            {tech}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function TechnologySection() {
  return (
    <SectionContainer id="technology" background="muted">
      <AnimatedHeading as="h2" align="center">
        Enterprise Technology Stack
      </AnimatedHeading>
      <p className="text-muted-foreground text-center mt-4 text-lg">
        Modern tools, battle-tested infrastructure. We choose technologies that scale.
      </p>

      <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 max-w-6xl mx-auto select-none">
        {techGroups.map((group) => (
          <StaggerItem key={group.name}>
            <Card hover={true} padding="md" className="h-full flex flex-col justify-start">
              <h3 className="text-base font-bold text-foreground border-b border-border pb-3.5 mb-4 tracking-tight">
                {group.name}
              </h3>
              <ul className="space-y-3">
                {group.items.map((tech) => (
                  <li key={tech} className="flex items-center gap-2.5 text-[13.5px] text-muted-foreground font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    <span className="hover:text-foreground transition-colors duration-200">{tech}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </StaggerItem>
        ))}
      </StaggerChildren>

      <MarqueeBar />
    </SectionContainer>
  );
}
