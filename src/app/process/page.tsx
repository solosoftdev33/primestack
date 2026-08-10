import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { createMetadata } from "@/lib/metadata";
import { processSteps } from "@/lib/site-content";

export const metadata: Metadata = createMetadata({
  title: "Process",
  description:
    "How PrimeStack US works: a free business audit, a practical improvement plan, short build cycles, and launch, support & iterate.",
  path: "/process",
});

export default function ProcessPage() {
  return (
    <main className="pt-32 pb-20 bg-background text-foreground flex-1">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="eyebrow">How we work</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-foreground font-heading mt-6">
            From messy to measurable, step by step
          </h1>
          <p className="text-lg text-muted-foreground mt-6 leading-relaxed">
            No endless discovery meetings. Every stage has a clear business
            purpose, and you stay in control of what gets built.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {processSteps.map((step) => (
            <div
              key={step.step}
              className="border border-white/10 rounded-3xl p-8 bg-card hover:border-accent/30 transition-all duration-300 hover:shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute top-4 right-6 text-7xl font-extralight tracking-tighter text-accent/15 font-heading select-none group-hover:text-accent/25 transition-colors">
                {step.step}
              </div>
              <span className="text-sm font-black text-accent uppercase tracking-wider">
                Step {step.step}
              </span>
              <h2 className="text-2xl font-black mt-4 text-foreground font-heading">
                {step.title}
              </h2>
              <p className="text-muted-foreground mt-4 leading-relaxed text-sm md:text-base">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="premium-panel max-w-3xl mx-auto rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(210,173,99,0.08)_0%,transparent_60%)] pointer-events-none" />
            <h3 className="text-2xl md:text-3xl font-black text-foreground font-heading">
              Not sure where to start?
            </h3>
            <p className="text-muted-foreground mt-4 leading-relaxed text-sm md:text-base max-w-lg mx-auto">
              Start with a free business audit. Tell us what is slowing you
              down and get a practical improvement plan — no obligation.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-full font-black hover:bg-[#e2c37a] transition-all duration-300 shadow-lg hover:-translate-y-0.5 active:translate-y-0"
              >
                Get a Free Business Audit
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
