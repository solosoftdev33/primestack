'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionContainer, AnimatedHeading } from '@/components/ui';
import { StaggerChildren, StaggerItem } from '@/components/animations';

interface MetricDetail {
  val: string;
  label: string;
}

interface ProjectData {
  title: string;
  industry: string;
  duration: string;
  problem: string;
  solution: string;
  impact: string;
  technologies: string[];
  metrics: MetricDetail[];
}

const projects: ProjectData[] = [
  {
    title: 'Restaurant Growth Platform',
    industry: 'Food & Hospitality',
    duration: '8 Weeks',
    problem:
      'Outdated website with zero online presence, losing customers to competitors with modern digital experiences.',
    solution:
      'Complete website modernization with SEO optimization, online ordering system, and automated customer engagement.',
    impact:
      '3x increase in online orders, 40% more walk-in traffic from local search',
    technologies: ['Next.js', 'PostgreSQL', 'AI Automation'],
    metrics: [
      { val: '+37%', label: 'Online Sales Growth' },
      { val: '-52%', label: 'Manual Admin Work' },
    ],
  },
  {
    title: 'HVAC Lead Automation',
    industry: 'Home Services',
    duration: '6 Weeks',
    problem:
      'Manual lead tracking causing delayed responses and lost potential customers worth thousands in revenue.',
    solution:
      'Automated lead capture, instant follow-up workflows, and centralized customer management system.',
    impact: '60% reduction in response time, 2x lead conversion rate',
    technologies: ['Python', 'FastAPI', 'Odoo'],
    metrics: [
      { val: '2.1x', label: 'Lead Conversion Rate' },
      { val: '-60%', label: 'Response Time' },
    ],
  },
  {
    title: 'Retail Operations Dashboard',
    industry: 'Retail & Ecommerce',
    duration: '10 Weeks',
    problem:
      'No real-time visibility into inventory levels and order status, leading to stockouts and delayed fulfillment.',
    solution:
      'Custom dashboard with real-time inventory tracking, order management, and automated reporting.',
    impact: '45% fewer stockouts, 30% faster order processing',
    technologies: ['Next.js', 'PostgreSQL', 'Cloud Infrastructure'],
    metrics: [
      { val: '-45%', label: 'Stockout Rates' },
      { val: '+30%', label: 'Faster Fulfillment' },
    ],
  },
];

function ProjectCard({ project }: { project: ProjectData }) {
  return (
    <motion.div
      className="w-full bg-card border border-border rounded-[24px] p-8 md:p-12 shadow-[0_4px_24px_rgba(0,0,0,0.3)] hover:shadow-[0_24px_50px_rgba(0,0,0,0.5)] hover:border-accent/30 transition-all duration-300 select-none group"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
        
        {/* Left Column: Title, Industry, Technologies and METRICS FIRST */}
        <div className="lg:col-span-5 flex flex-col justify-start">
          <div className="flex items-center gap-2.5 mb-5">
            <span className="text-[10px] uppercase tracking-wider text-accent bg-accent/10 border border-accent/20 px-3.5 py-1.5 rounded-full font-bold">
              {project.industry}
            </span>
            <span className="text-[10px] uppercase tracking-wider text-accent bg-accent/10 border border-accent/20 px-3.5 py-1.5 rounded-full font-bold">
              {project.duration}
            </span>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight leading-tight mb-8 font-heading">
            {project.title}
          </h3>

          {/* Metrics first */}
          <div className="flex flex-col gap-4 border-y border-border py-6 mb-6">
            {project.metrics.map((metric) => (
              <div key={metric.label} className="flex items-baseline gap-3">
                <span className="text-3xl md:text-4xl font-extrabold text-accent tracking-tighter shrink-0 w-24 font-heading">
                  {metric.val}
                </span>
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-semibold bg-white/5 text-muted-foreground border border-white/[0.08] px-2.5 py-1.5 rounded-lg"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Right Column: Challenge, Solution, Outcome */}
        <div className="lg:col-span-7 space-y-8 flex flex-col justify-start pt-2 lg:pt-0">
          
          <div>
            <h4 className="text-[11px] uppercase tracking-wider text-accent font-extrabold mb-2.5">
              Challenge
            </h4>
            <p className="text-sm md:text-[15px] text-muted-foreground leading-relaxed font-sans">
              {project.problem}
            </p>
          </div>

          <div className="border-t border-border pt-6">
            <h4 className="text-[11px] uppercase tracking-wider text-accent font-extrabold mb-2.5">
              Solution
            </h4>
            <p className="text-sm md:text-[15px] text-muted-foreground leading-relaxed font-sans">
              {project.solution}
            </p>
          </div>

          <div className="border-t border-border pt-6">
            <h4 className="text-[11px] uppercase tracking-wider text-accent font-extrabold mb-2.5">
              Outcome
            </h4>
            <p className="text-sm md:text-[15px] font-bold text-foreground leading-relaxed font-sans">
              {project.impact}
            </p>
          </div>

        </div>

      </div>
    </motion.div>
  );
}

export default function SuccessStoriesSection() {
  return (
    <SectionContainer id="success-stories" background="white">
      <AnimatedHeading as="h2" align="center">
        Success Stories
      </AnimatedHeading>
      <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mt-4">
        Real results for real businesses. See how we help companies grow.
      </p>

      <StaggerChildren className="mt-20 flex flex-col gap-10">
        {projects.map((project) => (
          <StaggerItem key={project.title} className="w-full">
            <ProjectCard project={project} />
          </StaggerItem>
        ))}
      </StaggerChildren>
    </SectionContainer>
  );
}
