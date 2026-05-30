'use client';

import React from 'react';
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
    name: 'Business Systems',
    items: ['Odoo', 'ERP', 'CRM'],
  },
  {
    name: 'Automation',
    items: ['AI', 'Integrations', 'Workflows'],
  },
];

export default function TechnologySection() {
  return (
    <SectionContainer id="technology" background="white">
      <AnimatedHeading as="h2" align="center">
        Enterprise Technology Stack
      </AnimatedHeading>
      <p className="text-muted-foreground text-center mt-4 text-lg">
        Enterprise-grade tools for every layer of your business.
      </p>

      <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 max-w-6xl mx-auto select-none">
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
    </SectionContainer>
  );
}
