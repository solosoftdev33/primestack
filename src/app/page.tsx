import Link from "next/link";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  DatabaseZap,
  Layers3,
  ShieldCheck,
} from "lucide-react";
import ContactSection from "@/sections/ContactSection";
import {
  industries,
  processSteps,
  services,
  successStories,
} from "@/lib/site-content";

const platformStats = [
  { value: "3x", label: "faster lead follow-up" },
  { value: "40%", label: "more qualified inbound leads" },
  { value: "60%", label: "less manual admin work" },
] as const;

const technology = [
  "Next.js",
  "Python",
  "FastAPI",
  "PostgreSQL",
  "Odoo",
  "Flutter",
  "AI Workflows",
  "Cloud Infrastructure",
] as const;

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <ImpactSection />
      <IndustriesSection />
      <StoriesSection />
      <ProcessSection />
      <TechnologySection />
      <ContactSection />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-32 md:pt-40">
      <div className="subtle-grid absolute inset-0" aria-hidden="true" />
      <div className="section-container relative pb-20 md:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
          <div>
            <span className="eyebrow">ROI-driven software systems</span>
            <h1 className="mt-7 max-w-3xl text-balance text-[clamp(3rem,7vw,6.8rem)] font-black leading-[0.98] text-foreground">
              Build the systems your growth depends on.
            </h1>
            <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-muted-foreground md:text-xl md:leading-9">
              PrimeStack turns messy websites, manual operations, and scattered
              tools into polished revenue systems: custom software, AI
              automation, CRM/ERP workflows, and conversion-focused digital
              experiences.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-4 text-base font-black text-accent-foreground shadow-[0_18px_45px_rgba(210,173,99,0.2)] transition hover:bg-[#e2c37a]"
              >
                Book a Strategy Call
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
              <Link
                href="/success-stories"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.04] px-7 py-4 text-base font-black text-foreground transition hover:border-accent/35"
              >
                View Success Stories
              </Link>
            </div>

            <div className="mt-10 grid max-w-2xl gap-3 border-t border-white/10 pt-6 sm:grid-cols-3">
              {platformStats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-black text-accent">{stat.value}</div>
                  <div className="mt-1 text-xs font-bold uppercase text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <SystemVisual />
        </div>
      </div>
    </section>
  );
}

function SystemVisual() {
  return (
    <div className="premium-panel relative min-h-[520px] overflow-hidden rounded-[28px] p-5 md:p-7">
      <div
        className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(210,173,99,0.18),transparent_25rem)]" />

      <div className="relative grid gap-4">
        <div className="rounded-2xl border border-white/10 bg-black/24 p-5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase text-muted-foreground">
                Revenue Command Center
              </p>
              <h2 className="mt-2 text-2xl font-black text-foreground">
                Live operating system
              </h2>
            </div>
            <span className="rounded-full bg-emerald-400/12 px-3 py-1 text-xs font-black text-emerald-300">
              Healthy
            </span>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {[
              ["Inbound leads", "+42%"],
              ["Response time", "14m"],
              ["Automation rate", "81%"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
              >
                <p className="text-xs font-bold text-muted-foreground">{label}</p>
                <p className="mt-2 text-2xl font-black text-accent">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
            <div className="flex items-center gap-3">
              <Bot className="h-5 w-5 text-accent" aria-hidden="true" />
              <p className="text-sm font-black text-foreground">
                AI Qualification
              </p>
            </div>
            <div className="mt-5 grid gap-3">
              {["Capture", "Score", "Route", "Follow up"].map((item, index) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-accent/[0.12] text-xs font-black text-accent">
                    {index + 1}
                  </span>
                  <span className="text-sm font-bold text-muted-foreground">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/28 p-5 font-mono">
            <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-xs font-black uppercase text-muted-foreground">
                Integration log
              </span>
              <span className="text-xs text-emerald-300">200 OK</span>
            </div>
            <div className="space-y-3 text-xs leading-6 text-muted-foreground">
              <p>
                <span className="text-emerald-300">sync</span> crm.leads
              </p>
              <p>
                <span className="text-sky-300">route</span> high-intent inquiry
              </p>
              <p>
                <span className="text-accent">notify</span> sales pipeline
              </p>
              <p className="text-white/35">report monthly ROI delta</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-accent/20 bg-accent/[0.08] p-5">
          <p className="text-sm font-black text-foreground">
            Sarah Jenkins, Apex HVAC
          </p>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Qualified lead booked automatically with estimated monthly ROI of{" "}
            <span className="font-black text-accent">$14,850</span>.
          </p>
        </div>
      </div>
    </div>
  );
}

function ServicesSection() {
  return (
    <section className="section-padding border-t border-white/10 bg-[#0c0e12]" id="services">
      <div className="section-container">
        <SectionHeader
          eyebrow="What we build"
          title="A cleaner operating layer for your business"
          text="Every service is designed to connect revenue, operations, customer experience, and reporting into systems your team can actually use."
          href="/services"
          linkLabel="Explore all services"
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group rounded-3xl border border-white/10 bg-white/[0.035] p-6 transition hover:border-accent/35 hover:bg-white/[0.055] md:p-8"
            >
              <div className="flex items-start justify-between gap-5">
                <div className="grid h-12 w-12 place-items-center rounded-2xl border border-accent/20 bg-accent/[0.09] text-accent">
                  {service.slug === "custom-software" ? <Layers3 className="h-5 w-5" /> : null}
                  {service.slug === "ai-automation" ? <Bot className="h-5 w-5" /> : null}
                  {service.slug === "crm-erp" ? <DatabaseZap className="h-5 w-5" /> : null}
                  {service.slug === "odoo-development" ? <ShieldCheck className="h-5 w-5" /> : null}
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-accent" />
              </div>
              <h3 className="mt-6 text-2xl font-black text-foreground">
                {service.title}
              </h3>
              <p className="mt-3 text-pretty text-sm leading-7 text-muted-foreground">
                {service.description}
              </p>
              <div className="mt-6 flex items-end justify-between gap-4 border-t border-white/10 pt-5">
                <span className="text-3xl font-black text-accent">
                  {service.metric}
                </span>
                <span className="text-right text-xs font-black uppercase text-muted-foreground">
                  {service.metricLabel}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function ImpactSection() {
  const items = [
    "Centralize business data instead of chasing scattered spreadsheets.",
    "Respond to qualified leads before competitors get the conversation.",
    "Give teams dashboards, portals, and automations that reduce repetitive admin.",
    "Measure the operational and revenue impact of what gets shipped.",
  ];

  return (
    <section className="section-padding">
      <div className="section-container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <span className="eyebrow">Measurable impact</span>
          <h2 className="mt-6 text-balance text-4xl font-black leading-tight md:text-6xl">
            Build less noise. Ship more leverage.
          </h2>
          <p className="mt-5 text-pretty text-lg leading-8 text-muted-foreground">
            The site should not just look premium. It should explain how
            PrimeStack improves the business: better conversion, fewer manual
            tasks, and cleaner operational visibility.
          </p>
        </div>
        <div className="grid gap-4">
          {items.map((item) => (
            <div
              key={item}
              className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-5"
            >
              <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent" />
              <p className="text-pretty text-base font-semibold leading-7 text-foreground/90">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function IndustriesSection() {
  return (
    <section className="section-padding border-y border-white/10 bg-[#0c0e12]" id="industries">
      <div className="section-container">
        <SectionHeader
          eyebrow="Industries"
          title="Built for local and operational businesses"
          text="PrimeStack is strongest where revenue depends on speed, follow-up, scheduling, customer data, and clean operations."
          href="/industries"
          linkLabel="See industry pages"
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => (
            <Link
              key={industry.slug}
              href={`/industries/${industry.slug}`}
              className="rounded-3xl border border-white/10 bg-black/20 p-6 transition hover:border-accent/35 hover:bg-white/[0.045]"
            >
              <h3 className="text-xl font-black text-foreground">
                {industry.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                {industry.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function StoriesSection() {
  return (
    <section className="section-padding" id="success-stories">
      <div className="section-container">
        <SectionHeader
          eyebrow="Proof"
          title="Premium design anchored in business outcomes"
          text="Success stories are presented as scannable case studies with challenge, solution, and outcome instead of loose cards."
          href="/success-stories"
          linkLabel="Read success stories"
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {successStories.map((story) => (
            <article
              key={story.title}
              className="rounded-3xl border border-white/10 bg-white/[0.035] p-6"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-full bg-accent/[0.12] px-3 py-1 text-xs font-black text-accent">
                  {story.industry}
                </span>
                <span className="text-xs font-black uppercase text-muted-foreground">
                  {story.timeline}
                </span>
              </div>
              <h3 className="mt-6 text-2xl font-black text-foreground">
                {story.title}
              </h3>
              <div className="mt-6 border-y border-white/10 py-5">
                <p className="text-5xl font-black text-accent">{story.metric}</p>
                <p className="mt-2 text-xs font-black uppercase text-muted-foreground">
                  {story.metricLabel}
                </p>
              </div>
              <p className="mt-5 text-sm leading-7 text-muted-foreground">
                {story.outcome}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="section-padding border-y border-white/10 bg-[#0c0e12]" id="process">
      <div className="section-container">
        <SectionHeader
          eyebrow="Process"
          title="A practical path from messy to measurable"
          text="The process is structured around ROI, not endless discovery. Each step has a clear business purpose."
          href="/process"
          linkLabel="View our process"
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <div
              key={step.step}
              className="rounded-3xl border border-white/10 bg-black/20 p-6"
            >
              <span className="text-sm font-black text-accent">{step.step}</span>
              <h3 className="mt-5 text-xl font-black text-foreground">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TechnologySection() {
  return (
    <section className="section-padding">
      <div className="section-container">
        <div className="premium-panel rounded-3xl p-6 md:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <span className="eyebrow">Technology stack</span>
              <h2 className="mt-6 text-balance text-4xl font-black leading-tight md:text-5xl">
                Modern tools, chosen for business durability.
              </h2>
              <p className="mt-5 text-pretty text-base leading-8 text-muted-foreground">
                The stack is intentionally practical: fast interfaces, reliable
                APIs, strong databases, and integration-friendly systems.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {technology.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-center text-sm font-black text-foreground"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({
  eyebrow,
  title,
  text,
  href,
  linkLabel,
}: {
  eyebrow: string;
  title: string;
  text: string;
  href: string;
  linkLabel: string;
}) {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div className="max-w-3xl">
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="mt-6 text-balance text-4xl font-black leading-tight md:text-6xl">
          {title}
        </h2>
        <p className="mt-5 text-pretty text-base leading-8 text-muted-foreground md:text-lg">
          {text}
        </p>
      </div>
      <Link
        href={href}
        className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.04] px-5 py-3 text-sm font-black text-foreground transition hover:border-accent/35"
      >
        {linkLabel}
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </div>
  );
}
