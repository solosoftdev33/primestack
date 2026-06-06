'use client';

import React from 'react';
import { TrendingUp, Zap, Settings, Code, Globe, Smartphone, GitMerge, ArrowLeftRight } from 'lucide-react';
import { StaggerChildren, StaggerItem } from '@/components/animations';
import {
  AnimatedHeading,
  SectionContainer,
  ServiceCard,
} from '@/components/ui';
import { motion } from 'framer-motion';

const FunnelVisual = () => (
  <div className="w-full h-full bg-background border border-border rounded-2xl p-5 flex flex-col justify-between relative overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.2)] shrink-0 select-none">
    <div className="flex items-center justify-between border-b border-border pb-2 mb-3">
      <span className="text-[9px] uppercase tracking-wider text-muted-foreground font-bold">Acquisition Funnel</span>
      <span className="text-[10px] font-extrabold text-accent bg-accent/10 px-2 py-0.5 rounded-full">$24,800 Generated</span>
    </div>
    <div className="space-y-2.5 mt-2 flex-1 flex flex-col justify-center">
      <div className="flex items-center justify-between text-[10px] font-semibold bg-card border border-border p-2.5 rounded-xl">
        <span className="text-muted-foreground">Google Maps (Local SEO)</span>
        <span className="font-bold text-accent">+42% leads</span>
      </div>
      <div className="flex items-center justify-between text-[10px] font-semibold bg-card border border-border p-2.5 rounded-xl">
        <span className="text-muted-foreground">Inbound Landing Page</span>
        <span className="font-bold text-accent">+18% Conv.</span>
      </div>
      <div className="flex items-center justify-between text-[10px] font-semibold bg-accent/20 border border-accent/30 text-foreground p-2.5 rounded-xl shadow-lg shadow-black/5">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Lead Sync API Qualified
        </span>
        <span className="font-extrabold text-emerald-400">Success</span>
      </div>
    </div>
  </div>
);

const WorkflowVisual = () => (
  <div className="w-full h-full bg-background border border-border rounded-2xl p-5 flex flex-col justify-between relative overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.2)] shrink-0 select-none">
    <div className="text-[9px] uppercase tracking-wider text-muted-foreground font-bold border-b border-border pb-2 mb-3">Automation Workflows</div>
    <div className="space-y-3 flex-1 flex flex-col justify-center">
      <div className="flex items-center gap-3">
        <div className="w-6 h-6 rounded-lg bg-accent text-accent-foreground text-[10px] font-extrabold flex items-center justify-center shadow-md">⚡</div>
        <div className="text-left">
          <div className="text-[9px] font-bold text-foreground leading-none">Form Inbound Trigger</div>
          <div className="text-[8px] text-muted-foreground mt-0.5">Capturing raw user data</div>
        </div>
      </div>
      <div className="w-[1px] h-3 bg-border ml-3" />
      <div className="flex items-center gap-3">
        <div className="w-6 h-6 rounded-lg bg-card border border-border text-[10px] font-extrabold flex items-center justify-center">🧠</div>
        <div className="text-left">
          <div className="text-[9px] font-bold text-foreground leading-none">AI Agent Filter</div>
          <div className="text-[8px] text-muted-foreground mt-0.5">Qualifying budget & intent</div>
        </div>
      </div>
      <div className="w-[1px] h-3 bg-border ml-3" />
      <div className="flex items-center gap-3">
        <div className="w-6 h-6 rounded-lg bg-card border border-border text-[10px] font-extrabold flex items-center justify-center">💬</div>
        <div className="text-left">
          <div className="text-[9px] font-bold text-foreground leading-none">SMS Auto-Booked</div>
          <div className="text-[8px] text-accent mt-0.5 font-bold">Synced with CRM database</div>
        </div>
      </div>
    </div>
  </div>
);

const DashboardVisual = () => (
  <div className="w-full h-full bg-background border border-border rounded-2xl p-5 flex flex-col justify-between relative overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.2)] shrink-0 select-none">
    <div className="flex items-center justify-between border-b border-border pb-2 mb-2">
      <span className="text-[9px] uppercase tracking-wider text-muted-foreground font-bold">CRM Integrations</span>
      <span className="text-[10px] font-bold text-foreground">Active Sync</span>
    </div>
    <div className="flex items-center gap-4 mt-2 flex-1">
      <div className="flex-1 space-y-2.5">
        <div>
          <div className="text-[8px] text-muted-foreground font-bold uppercase tracking-wider">API Latency</div>
          <div className="text-base font-extrabold text-accent leading-none mt-0.5 font-heading">14ms</div>
        </div>
        <div>
          <div className="text-[8px] text-muted-foreground font-bold uppercase tracking-wider">Automation Rate</div>
          <div className="text-base font-extrabold text-accent leading-none mt-0.5 font-heading">99.8%</div>
        </div>
      </div>
      <div className="w-14 h-14 rounded-full border-[3.5px] border-white/5 flex items-center justify-center relative shrink-0">
        <div className="absolute inset-0 rounded-full border-[3.5px] border-accent border-r-transparent rotate-[45deg]" />
        <span className="text-[10px] font-extrabold text-accent font-heading">+40%</span>
      </div>
    </div>
  </div>
);

const TerminalVisual = () => (
  <div className="w-full h-full bg-background border border-border rounded-2xl p-4 flex flex-col relative overflow-hidden shadow-[0_12px_24px_rgba(0,0,0,0.3)] shrink-0 select-none">
    <div className="flex items-center justify-between border-b border-white/[0.08] pb-2 mb-3 shrink-0">
      <div className="flex items-center gap-1">
        <span className="w-2 h-2 rounded-full bg-white/10" />
        <span className="w-2 h-2 rounded-full bg-white/10" />
        <span className="w-2 h-2 rounded-full bg-white/10" />
      </div>
      <span className="text-[8px] font-mono text-white/40 font-semibold">app-deploy.ts</span>
      <div className="w-6" />
    </div>
    <div className="flex-1 font-mono text-[9px] text-white/80 leading-relaxed flex flex-col justify-center">
      <div><span className="text-violet-400">const</span> app = <span className="text-blue-400">new</span> Application(stack);</div>
      <div><span className="text-violet-400">await</span> app.deploy(<span className="text-orange-400">'production'</span>);</div>
      <div className="text-white/30">{"// Build complete"}</div>
      <div><span className="text-emerald-400">✓</span> Deployed 4 services</div>
      <div><span className="text-violet-400">await</span> app.monitor();</div>
    </div>
  </div>
);

const services = [
  {
    icon: Globe,
    title: 'Website Development',
    items: [
      'High-conversion marketing sites',
      'Local SEO optimization',
      'Performance-optimized landing pages',
      'CMS-driven content management',
    ],
    layout: 'wide' as const,
    visual: <FunnelVisual />,
    accent: '+42% leads',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    items: [
      'Cross-platform iOS and Android apps',
      'Customer-facing mobile experiences',
      'Field operations tools',
      'Real-time backend sync',
    ],
    layout: 'tall' as const,
    visual: <TerminalVisual />,
    accent: '2 platforms',
  },
  {
    icon: TrendingUp,
    title: 'Custom Software',
    items: [
      'Web applications and portals',
      'Admin dashboards',
      'Internal operations tools',
      'Database-backed systems',
    ],
    layout: 'tall' as const,
    visual: <WorkflowVisual />,
    accent: '30%+ faster',
  },
  {
    icon: Settings,
    title: 'CRM & ERP Solutions',
    items: [
      'CRM setup and customization',
      'Inventory and order workflows',
      'Pipeline management',
      'Team dashboards',
    ],
    layout: 'wide' as const,
    visual: <DashboardVisual />,
    accent: '1 source of truth',
  },
  {
    icon: Code,
    title: 'Odoo Development',
    items: [
      'Odoo implementation and migration',
      'Custom module development',
      'Third-party integrations',
      'Training and support',
    ],
    layout: 'tall' as const,
    visual: <TerminalVisual />,
    accent: 'Built around you',
  },
  {
    icon: Zap,
    title: 'AI Automation',
    items: [
      'Lead follow-up workflows',
      'Email, SMS, and CRM automation',
      'AI qualification and routing',
      'Automated reporting',
    ],
    layout: 'tall' as const,
    visual: <WorkflowVisual />,
    accent: '3x faster',
  },
  {
    icon: GitMerge,
    title: 'System Integrations',
    items: [
      'CRM and ERP platform connections',
      'Payment gateway integrations',
      'Marketing automation sync',
      'Custom API development',
    ],
    layout: 'tall' as const,
    visual: <DashboardVisual />,
    accent: 'Unified stack',
  },
  {
    icon: ArrowLeftRight,
    title: 'Digital Transformation',
    items: [
      'Legacy system modernization',
      'Paperless workflows',
      'Cloud migration',
      'Full-stack operations redesign',
    ],
    layout: 'wide' as const,
    visual: <FunnelVisual />,
    accent: 'Future-ready',
  },
];

export default function ServicesSection() {
  return (
    <SectionContainer id="services" background="muted">
      <AnimatedHeading as="h2" align="center">
        Full-Service Software & Automation
      </AnimatedHeading>
      <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-muted-foreground">
        From websites and mobile apps to AI automation and enterprise ERP — we build
        the systems that power growing businesses.
      </p>

      <StaggerChildren className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service) => (
          <StaggerItem key={service.title} className={service.layout === 'wide' ? 'md:col-span-2' : 'md:col-span-1'}>
            <div className="group relative h-full">
              <div className="absolute -inset-0.5 rounded-3xl bg-accent/10 opacity-0 blur-sm transition duration-300 group-hover:opacity-100" />
              <div className="relative h-full">
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  items={service.items}
                  layout={service.layout}
                  visual={service.visual}
                />
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </SectionContainer>
  );
}
