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
                Discuss this service
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            <div className="premium-panel rounded-3xl p-6 md:p-8">
              <div className="flex items-end justify-between gap-4 border-b border-white/10 pb-6">
                <div>
                  <p className="text-sm font-black uppercase text-muted-foreground">
                    Expected lift
                  </p>
                  <p className="mt-2 text-6xl font-black text-accent">
                    {service.metric}
                  </p>
                </div>
                <p className="max-w-44 text-right text-sm font-black uppercase text-muted-foreground">
                  {service.metricLabel}
                </p>
              </div>

              <div className="mt-7 grid gap-4">
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
        </div>
      </section>
    </main>
  );
}
