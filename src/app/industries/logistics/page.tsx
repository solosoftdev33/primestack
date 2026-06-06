import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Software Solutions for Logistics & Supply Chain',
  description:
    'PrimeStack builds fleet management, route optimization, warehouse tracking, and real-time shipment visibility systems for logistics operators.',
};

export default function LogisticsPage() {
  return (
    <main className="pt-32 pb-20 bg-background text-foreground">
      <div className="section-container">
        <Link href="/industries" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors mb-8 font-semibold">
          <ArrowLeft className="w-4 h-4" /> Back to Industries
        </Link>
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground font-heading">
            Logistics & Supply Chain
          </h1>
          <p className="text-lg text-muted-foreground mt-6 leading-relaxed">
            Fleet management, route optimization, warehouse tracking, and real-time shipment visibility systems.
            We help logistics operators reduce costs and improve delivery performance.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: 'Real-Time Fleet Tracking', description: 'Live GPS tracking, route history, geofencing, and driver performance dashboards.' },
            { title: 'Route Optimization', description: 'AI-powered route planning that reduces fuel costs and improves on-time delivery rates.' },
            { title: 'Warehouse Management', description: 'Inventory tracking, bin location management, and pick-pack-ship workflow automation.' },
            { title: 'Client Communication Portals', description: 'Real-time shipment visibility, automated notifications, and carrier coordination.' },
          ].map((item) => (
            <div key={item.title} className="border border-border rounded-2xl p-6 bg-card hover:border-accent/30 transition-all duration-300 hover:shadow-2xl">
              <h3 className="text-lg font-bold text-foreground font-heading">{item.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link href="/#contact" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-full font-semibold hover:bg-[#D6B574] transition-all duration-300 shadow-lg hover:-translate-y-0.5 active:translate-y-0">
            Optimize Your Logistics <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
