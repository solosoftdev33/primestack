'use client';

import React from 'react';
import { TrendingUp, Zap, Settings, Code, Globe, Smartphone, GitMerge, ArrowLeftRight } from 'lucide-react';
import {
  AnimatedHeading,
  SectionContainer,
  ServiceCard,
} from '@/components/ui';

/* Clean, honest capability diagrams — no fake metrics, no fake dashboards. */

const LeadFlowVisual = () => (
  <div className="w-full bg-background border border-border rounded-2xl p-4 flex flex-col gap-2.5 relative overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.2)] select-none">
    <div className="flex items-center justify-between border-b border-border pb-2">
      <span className="text-[9px] uppercase tracking-wider text-muted-foreground font-bold">How leads flow to your team</span>
    </div>
    {[
      { step: 'Visit', note: 'Customer finds your site or ad' },
      { step: 'Inquire', note: 'Calls, books, or messages' },
      { step: 'Follow up', note: 'Auto-reply, SMS, or routing' },
      { step: 'Booked', note: 'Job or order captured in your CRM' },
    ].map((item, idx) => (
      <div key={item.step} className="flex items-center gap-3 text-[10px] font-semibold bg-card border border-border p-2.5 rounded-xl">
        <span className="w-5 h-5 rounded-full bg-accent/10 border border-accent/25 text-accent font-extrabold flex items-center justify-center shrink-0">
          {idx + 1}
        </span>
        <span className="text-foreground">{item.step}</span>
        <span className="text-muted-foreground ml-auto text-right">{item.note}</span>
      </div>
    ))}
  </div>
);

const PhoneVisual = () => (
  <div className="w-full bg-background border border-border rounded-2xl p-4 relative overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.2)] select-none">
    <div className="border-b border-border pb-2 mb-3">
      <span className="text-[9px] uppercase tracking-wider text-muted-foreground font-bold">One app for iOS & Android</span>
    </div>
    <div className="mx-auto w-40 rounded-[18px] border border-white/10 bg-card p-3">
      <div className="h-1.5 w-16 rounded-full bg-white/10 mx-auto mb-3" />
      {['Book a service', 'Track your order', 'Message your crew'].map((row) => (
        <div key={row} className="flex items-center gap-2 py-1.5 border-b border-white/[0.05] last:border-0">
          <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
          <span className="text-[9px] text-foreground/80">{row}</span>
        </div>
      ))}
    </div>
  </div>
);

const WorkflowVisual = () => (
  <div className="w-full bg-background border border-border rounded-2xl p-4 flex flex-col gap-3 relative overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.2)] select-none">
    <div className="text-[9px] uppercase tracking-wider text-muted-foreground font-bold border-b border-border pb-2">Custom software fits your workflow</div>
    <div className="space-y-3">
      {[
        { label: 'Input', note: 'Forms, files, or imports' },
        { label: 'Process', note: 'Your rules, approvals, logic' },
        { label: 'Output', note: 'Dashboards, reports, exports' },
      ].map((row, idx) => (
        <div key={row.label} className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-accent text-accent-foreground text-[10px] font-extrabold flex items-center justify-center shadow-md shrink-0">
            {idx + 1}
          </div>
          <div className="text-left">
            <div className="text-[10px] font-bold text-foreground leading-none">{row.label}</div>
            <div className="text-[9px] text-muted-foreground mt-1">{row.note}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const PipelineVisual = () => (
  <div className="w-full bg-background border border-border rounded-2xl p-4 flex flex-col gap-3 relative overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.2)] select-none">
    <div className="flex items-center justify-between border-b border-border pb-2">
      <span className="text-[9px] uppercase tracking-wider text-muted-foreground font-bold">One source of truth</span>
      <span className="text-[10px] font-bold text-foreground">CRM / ERP</span>
    </div>
    <div className="flex items-center gap-2">
      {['Leads', 'Jobs', 'Invoices', 'Inventory'].map((stage) => (
        <div key={stage} className="flex-1 rounded-lg bg-card border border-border py-3 text-center">
          <div className="text-[8px] uppercase tracking-wider text-muted-foreground font-bold">{stage}</div>
          <div className="mt-1 mx-auto w-8 h-1.5 rounded-full bg-accent/30" />
        </div>
      ))}
    </div>
    <div className="rounded-xl border border-accent/20 bg-accent/[0.08] p-3 text-center">
      <span className="text-[10px] font-bold text-foreground">One system, connected data, no re-entry</span>
    </div>
  </div>
);

const OdooVisual = () => (
  <div className="w-full bg-background border border-border rounded-2xl p-4 flex flex-col gap-3 relative overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.2)] select-none">
    <div className="text-[9px] uppercase tracking-wider text-muted-foreground font-bold border-b border-border pb-2">Odoo built around your business</div>
    <div className="grid grid-cols-2 gap-2">
      {['CRM', 'Inventory', 'Quotes', 'Jobs', 'Invoices', 'Support'].map((mod) => (
        <div key={mod} className="rounded-lg bg-card border border-border px-3 py-2 text-center">
          <span className="text-[10px] font-bold text-foreground">{mod}</span>
        </div>
      ))}
    </div>
    <div className="rounded-xl border border-accent/20 bg-accent/[0.08] p-3 text-center">
      <span className="text-[10px] font-bold text-foreground">Configured to match your process — not the other way around</span>
    </div>
  </div>
);

const ChatVisual = () => (
  <div className="w-full bg-background border border-border rounded-2xl p-4 flex flex-col gap-2.5 relative overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.2)] select-none">
    <div className="border-b border-border pb-2">
      <span className="text-[9px] uppercase tracking-wider text-muted-foreground font-bold">AI receptionist / chatbot</span>
    </div>
    <div className="max-w-[85%] self-start rounded-2xl rounded-bl-md bg-card border border-border px-3 py-2">
      <span className="text-[10px] text-foreground/80">Do you have availability this week?</span>
    </div>
    <div className="max-w-[85%] self-end rounded-2xl rounded-br-md bg-accent/[0.15] border border-accent/25 px-3 py-2">
      <span className="text-[10px] text-foreground">Yes — I can get you scheduled right now.</span>
    </div>
    <div className="max-w-[85%] self-start rounded-2xl rounded-bl-md bg-card border border-border px-3 py-2">
      <span className="text-[10px] text-foreground/80">Great, what time works best?</span>
    </div>
  </div>
);

const ConnectVisual = () => (
  <div className="w-full bg-background border border-border rounded-2xl p-4 flex flex-col gap-3 relative overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.2)] select-none">
    <div className="text-[9px] uppercase tracking-wider text-muted-foreground font-bold border-b border-border pb-2">Your tools, connected</div>
    <div className="flex items-center justify-center gap-2">
      {['CRM', 'ERP', 'Payments', 'Email', 'SMS'].map((node) => (
        <div key={node} className="rounded-lg bg-card border border-border px-2.5 py-1.5">
          <span className="text-[9px] font-bold text-foreground">{node}</span>
        </div>
      ))}
    </div>
    <div className="rounded-xl border border-accent/20 bg-accent/[0.08] p-3 text-center">
      <span className="text-[10px] font-bold text-foreground">Data flows automatically — no manual re-entry</span>
    </div>
  </div>
);

const ProcessVisual = () => (
  <div className="w-full bg-background border border-border rounded-2xl p-4 flex flex-col gap-3 relative overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.2)] select-none">
    <div className="text-[9px] uppercase tracking-wider text-muted-foreground font-bold border-b border-border pb-2">From manual to digital</div>
    <div className="space-y-2">
      {['Paper & spreadsheets', 'Connected digital workflows', 'Reports you can trust'].map((row, idx) => (
        <div key={row} className="flex items-center gap-3 text-[10px] font-semibold bg-card border border-border p-2.5 rounded-xl">
          <span className="w-5 h-5 rounded-full bg-accent/10 border border-accent/25 text-accent font-extrabold flex items-center justify-center shrink-0">
            {idx + 1}
          </span>
          <span className="text-foreground">{row}</span>
        </div>
      ))}
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
      'Clear calls-to-action: call, book, or message',
      'CMS your team can update',
    ],
    layout: 'wide' as const,
    visual: <LeadFlowVisual />,
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
    visual: <PhoneVisual />,
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
  },
  {
    icon: Settings,
    title: 'CRM & ERP Systems',
    items: [
      'CRM setup and customization',
      'Inventory and order workflows',
      'Pipeline management',
      'Team dashboards',
    ],
    layout: 'wide' as const,
    visual: <PipelineVisual />,
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
    visual: <OdooVisual />,
  },
  {
    icon: Zap,
    title: 'AI Automation',
    items: [
      'AI receptionist and chatbots',
      'Lead follow-up workflows',
      'Email, SMS, and CRM automation',
      'Automated reporting',
    ],
    layout: 'tall' as const,
    visual: <ChatVisual />,
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
    visual: <ConnectVisual />,
  },
  {
    icon: ArrowLeftRight,
    title: 'Digital Transformation',
    items: [
      'Legacy system modernization',
      'Paperless workflows',
      'Cloud migration',
      'Operations redesign',
    ],
    layout: 'wide' as const,
    visual: <ProcessVisual />,
  },
];

export default function ServicesSection() {
  return (
    <SectionContainer id="services" background="muted">
      <AnimatedHeading as="h2" align="center">
        Software systems built around business outcomes
      </AnimatedHeading>
      <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-muted-foreground">
        From websites and AI receptionists to CRM/ERP and custom software —
        we build the systems that help you capture more business and automate the work.
      </p>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service) => (
          <div key={service.title} className={service.layout === 'wide' ? 'md:col-span-2' : 'md:col-span-1'}>
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
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
