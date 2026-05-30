import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Software Solutions for Restaurants & Food Chains',
  description:
    'PrimeStack builds custom software for restaurants including online ordering, table management, SEO, and customer engagement systems that increase revenue.',
};

export default function RestaurantsPage() {
  return (
    <main className="pt-32 pb-20 bg-background text-foreground">
      <div className="section-container">
        <Link href="/industries" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors mb-8 font-semibold">
          <ArrowLeft className="w-4 h-4" /> Back to Industries
        </Link>
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground font-heading">
            Restaurants & Food Chains
          </h1>
          <p className="text-lg text-muted-foreground mt-6 leading-relaxed">
            Increase covers, drive online orders, and build customer loyalty with
            technology designed for the food industry. From modern websites to
            automated customer engagement, we help restaurants grow.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: 'Online Ordering Systems', description: 'Custom online ordering that integrates with your kitchen workflow and reduces third-party commission fees.' },
            { title: 'Website & Local SEO', description: 'High-converting restaurant websites optimized for local search to drive more walk-in traffic.' },
            { title: 'Customer Engagement', description: 'Automated loyalty programs, review management, and personalized marketing campaigns.' },
            { title: 'Operations Management', description: 'Table management, staff scheduling, and inventory tracking systems for smooth operations.' },
          ].map((item) => (
            <div key={item.title} className="border border-border rounded-2xl p-6 bg-card hover:border-accent/30 transition-all duration-300 hover:shadow-2xl">
              <h3 className="text-lg font-bold text-foreground font-heading">{item.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link href="/#contact" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-full font-semibold hover:bg-[#D6B574] transition-all duration-300 shadow-lg hover:-translate-y-0.5 active:translate-y-0">
            Grow Your Restaurant <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
