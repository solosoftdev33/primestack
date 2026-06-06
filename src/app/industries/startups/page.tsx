import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Software Solutions for Startups & Tech',
  description:
    'PrimeStack offers MVP development, product engineering, scalable infrastructure, and technical co-founding support for early-stage startups.',
};

export default function StartupsPage() {
  return (
    <main className="pt-32 pb-20 bg-background text-foreground">
      <div className="section-container">
        <Link href="/industries" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors mb-8 font-semibold">
          <ArrowLeft className="w-4 h-4" /> Back to Industries
        </Link>
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground font-heading">
            Startups & Tech
          </h1>
          <p className="text-lg text-muted-foreground mt-6 leading-relaxed">
            MVP development, product engineering, scalable infrastructure, and technical co-founding support.
            We help early-stage startups ship faster and build the right foundation from day one.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: 'MVP & Prototype Development', description: 'Rapid iteration from concept to working product — designed for speed, feedback, and investor demos.' },
            { title: 'Scalable Cloud Infrastructure', description: 'AWS, Vercel, and Supabase architecture that grows with your user base without rewrites.' },
            { title: 'Product Engineering', description: 'Full-stack engineering with React, Next.js, and Python to build features your users actually need.' },
            { title: 'Technical Advisory', description: 'Architecture reviews, technology stack decisions, and engineering roadmap planning for founders.' },
          ].map((item) => (
            <div key={item.title} className="border border-border rounded-2xl p-6 bg-card hover:border-accent/30 transition-all duration-300 hover:shadow-2xl">
              <h3 className="text-lg font-bold text-foreground font-heading">{item.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link href="/#contact" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-full font-semibold hover:bg-[#D6B574] transition-all duration-300 shadow-lg hover:-translate-y-0.5 active:translate-y-0">
            Build Your MVP <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
