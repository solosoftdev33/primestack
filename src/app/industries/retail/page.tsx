import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Software Solutions for Retail & Ecommerce',
  description:
    'PrimeStack builds inventory management, online storefronts, and customer analytics solutions for retail and ecommerce businesses.',
};

export default function RetailPage() {
  return (
    <main className="pt-32 pb-20 bg-background text-foreground">
      <div className="section-container">
        <Link href="/industries" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors mb-8 font-semibold">
          <ArrowLeft className="w-4 h-4" /> Back to Industries
        </Link>
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground font-heading">
            Retail & Ecommerce
          </h1>
          <p className="text-lg text-muted-foreground mt-6 leading-relaxed">
            Boost sales, manage inventory in real-time, and deliver exceptional
            shopping experiences with custom retail technology solutions.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: 'Ecommerce Platforms', description: 'Custom online stores with seamless checkout, payment processing, and mobile-optimized shopping experiences.' },
            { title: 'Inventory Management', description: 'Real-time inventory tracking across all channels with automated reorder alerts and supplier management.' },
            { title: 'Customer Analytics', description: 'Understand buying patterns, track customer lifetime value, and personalize marketing with data-driven insights.' },
            { title: 'POS Integration', description: 'Connect your in-store and online operations with unified POS systems and synchronized inventory.' },
          ].map((item) => (
            <div key={item.title} className="border border-border rounded-2xl p-6 bg-card hover:border-accent/30 transition-all duration-300 hover:shadow-2xl">
              <h3 className="text-lg font-bold text-foreground font-heading">{item.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link href="/#contact" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-full font-semibold hover:bg-[#D6B574] transition-all duration-300 shadow-lg hover:-translate-y-0.5 active:translate-y-0">
            Scale Your Retail Business <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
