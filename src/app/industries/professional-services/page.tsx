import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Software Solutions for Professional Services',
  description:
    'PrimeStack builds CRM systems, client portals, and workflow automation that increase billable hours for professional services firms.',
};

export default function ProfessionalServicesPage() {
  return (
    <main className="pt-32 pb-20 bg-background text-foreground">
      <div className="section-container">
        <Link href="/industries" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors mb-8 font-semibold">
          <ArrowLeft className="w-4 h-4" /> Back to Industries
        </Link>
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground font-heading">
            Professional Services
          </h1>
          <p className="text-lg text-muted-foreground mt-6 leading-relaxed">
            Stop losing revenue to manual admin and scattered client data. We build systems that centralize accounts, automate billing, and give your team more time for billable work.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: 'Client Portals & Communication', description: 'Secure client portals with document sharing, messaging, and project status visibility that reduce admin overhead.' },
            { title: 'Automated Billing & Invoicing', description: 'Smart billing workflows that track time, generate invoices, process payments, and reconcile accounts automatically.' },
            { title: 'Project & Resource Management', description: 'Capacity planning, resource allocation, and project tracking tools that maximize utilization across your team.' },
            { title: 'Account Reporting Dashboards', description: 'Real-time dashboards that surface account health, pipeline velocity, and revenue forecasts at a glance.' },
          ].map((item) => (
            <div key={item.title} className="border border-border rounded-2xl p-6 bg-card hover:border-accent/30 transition-all duration-300 hover:shadow-2xl">
              <h3 className="text-lg font-bold text-foreground font-heading">{item.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link href="/#contact" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-full font-semibold hover:bg-[#D6B574] transition-all duration-300 shadow-lg hover:-translate-y-0.5 active:translate-y-0">
            Scale Your Firm <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
