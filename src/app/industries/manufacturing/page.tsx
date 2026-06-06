import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Software Solutions for Manufacturing & Distribution',
  description:
    'PrimeStack builds ERP systems, supply chain visibility tools, and production dashboards for manufacturing and distribution businesses.',
};

export default function ManufacturingPage() {
  return (
    <main className="pt-32 pb-20 bg-background text-foreground">
      <div className="section-container">
        <Link href="/industries" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors mb-8 font-semibold">
          <ArrowLeft className="w-4 h-4" /> Back to Industries
        </Link>
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground font-heading">
            Manufacturing & Distribution
          </h1>
          <p className="text-lg text-muted-foreground mt-6 leading-relaxed">
            Eliminate production blind spots and supply chain friction. We build systems that give you real-time visibility, automated workflows, and data-driven control across every operation.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: 'Production Tracking', description: 'Real-time dashboards that monitor production lines, track throughput, and flag bottlenecks before they cause downtime.' },
            { title: 'Supply Chain Visibility', description: 'End-to-end supply chain tracking with automated reorder points, vendor performance analytics, and logistics coordination.' },
            { title: 'Inventory Optimization', description: 'AI-driven inventory management that reduces carrying costs while preventing stockouts across multiple warehouse locations.' },
            { title: 'Quality Control Workflows', description: 'Digital quality assurance systems with inspection tracking, defect reporting, and compliance documentation automation.' },
          ].map((item) => (
            <div key={item.title} className="border border-border rounded-2xl p-6 bg-card hover:border-accent/30 transition-all duration-300 hover:shadow-2xl">
              <h3 className="text-lg font-bold text-foreground font-heading">{item.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link href="/#contact" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-full font-semibold hover:bg-[#D6B574] transition-all duration-300 shadow-lg hover:-translate-y-0.5 active:translate-y-0">
            Optimize Your Operations <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
