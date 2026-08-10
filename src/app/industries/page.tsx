import Link from 'next/link';
import {
  ArrowRight,
  UtensilsCrossed,
  Thermometer,
  HardHat,
  ShoppingBag,
  HeartPulse,
  Truck,
  Building2,
  Factory,
  Sparkles,
  Briefcase,
  Rocket,
  type LucideIcon,
} from 'lucide-react';
import { createMetadata } from '@/lib/metadata';
import { industries } from '@/lib/site-content';

export const metadata = createMetadata({
  title: 'Industries',
  description:
    'Software, AI, and automation for HVAC & home services, med spas, restaurants, contractors, manufacturing, retail, healthcare, logistics, real estate, professional services, and startups.',
  path: '/industries',
});

const industryIcons: Record<string, LucideIcon> = {
  restaurants: UtensilsCrossed,
  hvac: Thermometer,
  contractors: HardHat,
  retail: ShoppingBag,
  healthcare: HeartPulse,
  logistics: Truck,
  'real-estate': Building2,
  manufacturing: Factory,
  'med-spas': Sparkles,
  'professional-services': Briefcase,
  startups: Rocket,
};

export default function IndustriesPage() {
  return (
    <main className="pt-32 pb-20 bg-background text-foreground">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="eyebrow">Industries</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground font-heading mt-6">
            Industries We Serve
          </h1>
          <p className="text-lg text-muted-foreground mt-6 leading-relaxed">
            Every business we work with faces a slightly different problem. We
            build systems around how your industry actually operates — not a
            one-size-fits-all template.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry) => {
            const Icon = industryIcons[industry.slug] || Briefcase;
            return (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="border border-border rounded-2xl p-8 bg-card hover:shadow-2xl hover:border-accent/30 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-white/5 border border-white/[0.08] rounded-xl flex items-center justify-center group-hover:bg-accent/10 group-hover:border-accent/30 transition-all duration-300">
                  <Icon className="w-6 h-6 text-accent group-hover:scale-105 transition-all duration-300" />
                </div>
                <h2 className="text-xl font-bold mt-5 text-foreground font-heading">
                  {industry.title}
                </h2>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                  {industry.description}
                </p>
                <span className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-accent">
                  Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
