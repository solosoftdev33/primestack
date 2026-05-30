import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Software Solutions for HVAC & Home Services',
  description:
    'PrimeStack builds lead tracking, scheduling automation, and customer management systems for HVAC and home service businesses.',
};

export default function HVACPage() {
  return (
    <main className="pt-32 pb-20 bg-background text-foreground">
      <div className="section-container">
        <Link href="/industries" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors mb-8 font-semibold">
          <ArrowLeft className="w-4 h-4" /> Back to Industries
        </Link>
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground font-heading">
            HVAC & Home Services
          </h1>
          <p className="text-lg text-muted-foreground mt-6 leading-relaxed">
            Never miss a lead again. We build automated systems that capture
            inquiries, schedule appointments, and keep your calendar full — so you
            can focus on the work.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: 'Lead Capture & Tracking', description: 'Automated lead capture from your website, Google, and social media with instant follow-up workflows.' },
            { title: 'Scheduling Automation', description: 'Online booking, automated reminders, and dispatch management for efficient service delivery.' },
            { title: 'Customer Management', description: 'CRM systems that track service history, maintenance schedules, and customer preferences.' },
            { title: 'Reviews & Reputation', description: 'Automated review requests and reputation management to build trust and win more jobs.' },
          ].map((item) => (
            <div key={item.title} className="border border-border rounded-2xl p-6 bg-card hover:border-accent/30 transition-all duration-300 hover:shadow-2xl">
              <h3 className="text-lg font-bold text-foreground font-heading">{item.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link href="/#contact" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-full font-semibold hover:bg-[#D6B574] transition-all duration-300 shadow-lg hover:-translate-y-0.5 active:translate-y-0">
            Automate Your Business <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
