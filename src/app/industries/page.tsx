import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, UtensilsCrossed, Thermometer, HardHat, ShoppingBag, HeartPulse, Truck, Building2, Factory, Briefcase, Rocket } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Industries We Serve',
  description:
    'PrimeStack builds custom software solutions for restaurants, HVAC companies, contractors, retail, healthcare, logistics, real estate, manufacturing, professional services, and startups.',
};

const INDUSTRIES = [
  {
    icon: UtensilsCrossed,
    name: 'Restaurants & Food Chains',
    description: 'Online ordering, table management, and customer engagement systems that drive more covers and repeat visits.',
    href: '/industries/restaurants',
  },
  {
    icon: Thermometer,
    name: 'HVAC & Home Services',
    description: 'Lead tracking, scheduling automation, and customer management systems that fill your calendar.',
    href: '/industries/hvac',
  },
  {
    icon: HardHat,
    name: 'Contractors & Construction',
    description: 'Project management, bidding systems, and client portals that streamline operations.',
    href: '/industries/contractors',
  },
  {
    icon: ShoppingBag,
    name: 'Retail & Ecommerce',
    description: 'Inventory management, online storefronts, and customer analytics that boost sales.',
    href: '/industries/retail',
  },
  {
    icon: HeartPulse,
    name: 'Healthcare',
    description: 'HIPAA-aware patient portals, scheduling systems, practice management tools, and secure data workflows.',
    href: '/industries/healthcare',
  },
  {
    icon: Truck,
    name: 'Logistics & Supply Chain',
    description: 'Fleet management, route optimization, warehouse tracking, and real-time shipment visibility.',
    href: '/industries/logistics',
  },
  {
    icon: Building2,
    name: 'Real Estate',
    description: 'Property management portals, lead tracking, CMA tools, and client communication platforms.',
    href: '/industries/real-estate',
  },
  {
    icon: Factory,
    name: 'Manufacturing & Distribution',
    description: 'ERP systems, supply chain visibility, and production dashboards for operational control.',
    href: '/industries/manufacturing',
  },
  {
    icon: Briefcase,
    name: 'Professional Services',
    description: 'CRM systems, client portals, and workflow automation that increase billable hours.',
    href: '/industries/professional-services',
  },
  {
    icon: Rocket,
    name: 'Startups & Tech',
    description: 'MVP development, product engineering, scalable infrastructure, and technical co-founding support.',
    href: '/industries/startups',
  },
];

export default function IndustriesPage() {
  return (
    <main className="pt-32 pb-20 bg-background text-foreground">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground font-heading">
            Industries We Serve
          </h1>
          <p className="text-lg text-muted-foreground mt-6 leading-relaxed">
            We understand the unique challenges of local and growing businesses.
            Our solutions are tailored to your industry.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {INDUSTRIES.map((industry) => {
            const Icon = industry.icon;
            return (
              <Link
                key={industry.name}
                href={industry.href}
                className="border border-border rounded-2xl p-8 bg-card hover:shadow-2xl hover:border-accent/30 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-white/5 border border-white/[0.08] rounded-xl flex items-center justify-center group-hover:bg-accent/10 group-hover:border-accent/30 transition-all duration-300">
                  <Icon className="w-6 h-6 text-accent group-hover:scale-105 transition-all duration-300" />
                </div>
                <h2 className="text-xl font-bold mt-5 text-foreground font-heading">
                  {industry.name}
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
