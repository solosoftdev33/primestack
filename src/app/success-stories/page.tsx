import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Success Stories',
  description:
    'See how PrimeStack has helped businesses increase revenue, automate operations, and scale efficiently through custom software solutions.',
};

const STORIES = [
  {
    title: 'Restaurant Growth Platform',
    industry: 'Food & Hospitality',
    duration: '8 Weeks',
    problem:
      'Outdated website with zero online presence, losing customers to competitors with modern digital experiences.',
    solution:
      'Complete website modernization with SEO optimization, online ordering system, and automated customer engagement.',
    impact:
      '3x increase in online orders, 40% more walk-in traffic from local search.',
    technologies: ['Next.js', 'PostgreSQL', 'AI Automation'],
  },
  {
    title: 'HVAC Lead Automation',
    industry: 'Home Services',
    duration: '6 Weeks',
    problem:
      'Manual lead tracking causing delayed responses and lost potential customers worth thousands in revenue.',
    solution:
      'Automated lead capture, instant follow-up workflows, and centralized customer management system.',
    impact:
      '60% reduction in response time, 2x lead conversion rate.',
    technologies: ['Python', 'FastAPI', 'Odoo'],
  },
  {
    title: 'Retail Operations Dashboard',
    industry: 'Retail & Ecommerce',
    duration: '10 Weeks',
    problem:
      'No real-time visibility into inventory levels and order status, leading to stockouts and delayed fulfillment.',
    solution:
      'Custom dashboard with real-time inventory tracking, order management, and automated reporting.',
    impact:
      '45% fewer stockouts, 30% faster order processing.',
    technologies: ['Next.js', 'PostgreSQL', 'Cloud Infrastructure'],
  },
];

export default function SuccessStoriesPage() {
  return (
    <main className="pt-32 pb-20 bg-background text-foreground">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground font-heading">
            Success Stories
          </h1>
          <p className="text-lg text-muted-foreground mt-6 leading-relaxed">
            Real results for real businesses. See how we help companies grow,
            automate operations, and increase profitability.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {STORIES.map((story) => (
            <div
              key={story.title}
              className="border border-border rounded-2xl p-8 bg-card hover:shadow-2xl hover:border-accent/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs uppercase tracking-wider text-accent bg-accent/10 border border-accent/20 px-3 py-1 rounded-full font-bold">
                  {story.industry}
                </span>
                <span className="text-xs text-muted-foreground font-medium">{story.duration}</span>
              </div>
              <h2 className="text-xl font-bold text-foreground font-heading">
                {story.title}
              </h2>

              <div className="mt-6 space-y-4">
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-accent font-extrabold">
                    Challenge
                  </p>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{story.problem}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-accent font-extrabold">
                    Solution
                  </p>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{story.solution}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-accent font-extrabold">
                    Impact
                  </p>
                  <p className="text-sm font-semibold text-foreground mt-1 leading-relaxed">
                    {story.impact}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-border">
                {story.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs bg-white/5 text-muted-foreground border border-white/[0.08] px-2.5 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-full font-semibold hover:bg-[#D6B574] transition-all duration-300 shadow-lg hover:-translate-y-0.5 active:translate-y-0"
          >
            Start Your Success Story
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
