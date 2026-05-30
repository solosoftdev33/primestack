import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Software Solutions for Contractors & Construction',
  description:
    'PrimeStack builds project management, bidding systems, and client portals for contractors and construction companies.',
};

export default function ContractorsPage() {
  return (
    <main className="pt-32 pb-20 bg-background text-foreground">
      <div className="section-container">
        <Link href="/industries" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors mb-8 font-semibold">
          <ArrowLeft className="w-4 h-4" /> Back to Industries
        </Link>
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground font-heading">
            Contractors & Construction
          </h1>
          <p className="text-lg text-muted-foreground mt-6 leading-relaxed">
            Streamline project management, automate bidding, and give clients
            real-time visibility into their projects with custom-built tools for
            the construction industry.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: 'Project Management', description: 'Track projects, timelines, budgets, and resources from a single dashboard built for construction workflows.' },
            { title: 'Bidding & Estimating', description: 'Streamline your bidding process with templates, automated calculations, and proposal generation.' },
            { title: 'Client Portals', description: 'Give clients real-time project updates, document sharing, and communication in one secure portal.' },
            { title: 'Field Operations', description: 'Mobile-friendly tools for field teams including time tracking, daily reports, and photo documentation.' },
          ].map((item) => (
            <div key={item.title} className="border border-border rounded-2xl p-6 bg-card hover:border-accent/30 transition-all duration-300 hover:shadow-2xl">
              <h3 className="text-lg font-bold text-foreground font-heading">{item.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link href="/#contact" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-full font-semibold hover:bg-[#D6B574] transition-all duration-300 shadow-lg hover:-translate-y-0.5 active:translate-y-0">
            Streamline Your Operations <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
