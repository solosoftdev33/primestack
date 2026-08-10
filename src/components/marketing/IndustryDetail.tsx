import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { industries } from "@/lib/site-content";

type Industry = (typeof industries)[number];

export default function IndustryDetail({ industry }: { industry: Industry }) {
  return (
    <main className="pt-32">
      <section className="section-padding">
        <div className="section-container">
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 text-sm font-black text-muted-foreground transition hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to industries
          </Link>

          <div className="mt-9 grid gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:items-start">
            <div>
              <span className="eyebrow">Industry</span>
              <h1 className="mt-6 text-balance text-4xl font-black leading-tight md:text-6xl">
                {industry.title}
              </h1>
              <p className="mt-6 text-pretty text-lg leading-8 text-muted-foreground">
                {industry.description}
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 text-base font-black text-accent-foreground transition hover:bg-[#e2c37a]"
              >
                Get a Free Business Audit
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            <div className="premium-panel rounded-3xl p-6 md:p-8">
              <p className="text-sm font-black uppercase tracking-widest text-muted-foreground">
                The problem
              </p>
              <p className="mt-3 text-sm font-semibold leading-7 text-foreground/90">
                {industry.pain}
              </p>

              <p className="mt-8 text-sm font-black uppercase tracking-widest text-muted-foreground">
                How we help
              </p>
              <div className="mt-4 grid gap-4">
                {industry.outcomes.map((outcome) => (
                  <div key={outcome} className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent" />
                    <p className="text-sm font-semibold leading-7 text-foreground/90">
                      {outcome}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
