'use client';

import React from 'react';
import {
  UtensilsCrossed,
  Thermometer,
  HardHat,
  ShoppingBag,
  Factory,
  Briefcase,
} from 'lucide-react';
import { StaggerChildren, StaggerItem } from '@/components/animations';
import {
  AnimatedHeading,
  SectionContainer,
  IndustryCard,
} from '@/components/ui';

const industries = [
  {
    icon: UtensilsCrossed,
    name: 'Restaurants & Food Chains',
    description:
      'Online ordering, table management, and customer engagement systems that drive more covers and repeat visits.',
  },
  {
    icon: Thermometer,
    name: 'HVAC & Home Services',
    description:
      'Lead tracking, scheduling automation, and customer management systems that fill your calendar.',
  },
  {
    icon: HardHat,
    name: 'Contractors & Construction',
    description:
      'Project management, bidding systems, and client portals that streamline operations.',
  },
  {
    icon: ShoppingBag,
    name: 'Retail & Ecommerce',
    description:
      'Inventory management, online storefronts, and customer analytics that boost sales.',
  },
  {
    icon: Factory,
    name: 'Manufacturing & Distribution',
    description:
      'ERP systems, supply chain visibility, and production dashboards for operational control.',
  },
  {
    icon: Briefcase,
    name: 'Professional Services',
    description:
      'CRM systems, client portals, and workflow automation that increase billable hours.',
  },
];

export default function IndustriesSection() {
  return (
    <SectionContainer id="industries" background="muted">
      <AnimatedHeading as="h2" align="center">
        Industries We Serve
      </AnimatedHeading>

      <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-muted-foreground">
        We understand the unique challenges of local and growing businesses. Our
        solutions are tailored to your industry.
      </p>

      <StaggerChildren className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map((industry) => (
          <StaggerItem key={industry.name}>
            <IndustryCard
              icon={industry.icon}
              name={industry.name}
              description={industry.description}
            />
          </StaggerItem>
        ))}
      </StaggerChildren>
    </SectionContainer>
  );
}
