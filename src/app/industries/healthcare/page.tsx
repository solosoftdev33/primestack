import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Software Solutions for Healthcare',
  description:
    'PrimeStack builds HIPAA-aware patient portals, scheduling systems, practice management tools, and secure data workflows for healthcare providers.',
};

export default function HealthcarePage() {
  return (
    <main className="pt-32 pb-20 bg-background text-foreground">
      <div className="section-container">
        <Link href="/industries" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors mb-8 font-semibold">
          <ArrowLeft className="w-4 h-4" /> Back to Industries
        </Link>
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground font-heading">
            Healthcare
          </h1>
          <p className="text-lg text-muted-foreground mt-6 leading-relaxed">
            HIPAA-aware patient portals, scheduling systems, practice management tools, and secure data workflows.
            We help healthcare providers reduce administrative overhead and improve patient experience.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: 'Secure Patient Portals', description: 'HIPAA-compliant portals for patient communication, document sharing, and self-service scheduling.' },
            { title: 'Appointment Scheduling', description: 'Automated scheduling with reminders, waitlist management, and integrated calendar sync.' },
            { title: 'Practice Management', description: 'Dashboards for patient records, billing, staff coordination, and compliance reporting.' },
            { title: 'Compliant Data Handling', description: 'Secure data workflows with audit trails, access controls, and regulatory reporting.' },
          ].map((item) => (
            <div key={item.title} className="border border-border rounded-2xl p-6 bg-card hover:border-accent/30 transition-all duration-300 hover:shadow-2xl">
              <h3 className="text-lg font-bold text-foreground font-heading">{item.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link href="/#contact" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-full font-semibold hover:bg-[#D6B574] transition-all duration-300 shadow-lg hover:-translate-y-0.5 active:translate-y-0">
            Transform Your Practice <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
