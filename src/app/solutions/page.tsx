import Link from "next/link";
import { ArrowRight, CheckCircle2, Target } from "lucide-react";
import { createMetadata } from "@/lib/metadata";
import { solutionExamples } from "@/lib/site-content";

export const metadata = createMetadata({
  title: "Solutions",
  description:
    "Real business problems solved with websites, AI receptionists, automation, CRM/ERP, and custom software. See what PrimeStack US can build.",
  path: "/solutions",
});

export default function SolutionsPage() {
  return (
    <main className="pt-32">
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-3xl">
            <span className="eyebrow">Solutions</span>
            <h1 className="mt-6 text-balance text-5xl font-black leading-tight md:text-7xl">
              What We Can Build
            </h1>
            <p className="mt-6 text-pretty text-lg leading-8 text-muted-foreground">
              These are the kinds of problems we solve every day. Each example
              shows a real business situation, the capabilities we would bring,
              and the objective we would aim for — built around your business,
              not copied from a template.
            </p>
            <p className="mt-4 text-sm text-muted-foreground/80">
              Illustrative solution examples — not client case studies.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {solutionExamples.map((example) => (
              <article
                key={example.title}
                className="rounded-3xl border border-white/10 bg-white/[0.035] p-8 transition hover:border-accent/30 hover:bg-white/[0.055]"
              >
                <span className="inline-block text-[10px] uppercase tracking-wider text-accent bg-accent/10 border border-accent/20 px-3.5 py-1.5 rounded-full font-bold">
                  {example.industry}
                </span>
                <h2 className="mt-5 text-2xl font-black tracking-tight text-foreground">
                  {example.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  {example.context}
                </p>

                <div className="mt-6 grid gap-3 border-t border-white/10 pt-5">
                  {example.capabilities.map((capability) => (
                    <div key={capability} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-accent" />
                      <p className="text-sm font-semibold leading-6 text-foreground/85">
                        {capability}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-accent/20 bg-accent/[0.08] p-4 flex items-start gap-3">
                  <Target className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <p className="text-sm font-bold leading-6 text-foreground">
                    {example.objective}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 rounded-3xl premium-panel p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-black text-foreground">
              Have a problem like one of these?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-muted-foreground">
              Tell us what is slowing you down. We will review your current
              setup and send you a practical improvement plan — free and with
              no obligation.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 text-base font-black text-accent-foreground transition hover:bg-[#e2c37a]"
            >
              Get a Free Business Audit
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
