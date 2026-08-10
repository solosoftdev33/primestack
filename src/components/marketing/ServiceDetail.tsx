import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { services } from "@/lib/site-content";

type Service = (typeof services)[number];

export default function ServiceDetail({ service }: { service: Service }) {
  return (
    <main className="pt-32">
      <section className="section-padding">
        <div className="section-container">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-black text-muted-foreground transition hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to services
          </Link>

          <div className="mt-9 grid gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:items-start">
            <div>
              <span className="eyebrow">{service.shortTitle}</span>
              <h1 className="mt-6 text-balance text-5xl font-black leading-tight md:text-7xl">
                {service.title}
              </h1>
              <p className="mt-6 text-pretty text-lg leading-8 text-muted-foreground">
                {service.hero}
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
              <div className="flex items-start gap-4 border-b border-white/10 pb-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-accent/25 bg-accent/10 text-accent">
                  <span className="text-sm font-black">01</span>
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-muted-foreground">
                    The problem
                  </p>
                  <p className="mt-2 text-sm font-semibold leading-7 text-foreground/90">
                    {service.problem}
                  </p>
                </div>
              </div>

              <p className="mt-7 text-sm font-black uppercase tracking-widest text-muted-foreground">
                What you get
              </p>
              <div className="mt-4 grid gap-4">
                {service.outcomes.map((outcome) => (
                  <div key={outcome} className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent" />
                    <p className="text-sm font-semibold leading-7 text-foreground/90">
                      {outcome}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-accent/20 bg-accent/[0.08] p-5">
                <p className="text-sm font-semibold leading-7 text-foreground/90">
                  {service.proof}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-14 rounded-3xl border border-white/10 bg-white/[0.035] p-6 md:p-8">
            <p className="text-sm font-black uppercase tracking-widest text-muted-foreground">
              Technology we typically use
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {service.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-foreground/90"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
