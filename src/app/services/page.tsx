import Link from "next/link";
import { ArrowRight, Globe, Smartphone, TrendingUp, Settings, Code, Zap, GitMerge, ArrowLeftRight } from "lucide-react";
import { createMetadata } from "@/lib/metadata";
import { services } from "@/lib/site-content";

export const metadata = createMetadata({
  title: "Services — Software, AI, CRM/ERP & Automation",
  description:
    "Websites, mobile apps, custom software, CRM/ERP systems, Odoo development, AI automation, and system integrations for growing US businesses.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <main className="pt-32">
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-3xl">
            <span className="eyebrow">Services</span>
            <h1 className="mt-6 text-balance text-5xl font-black leading-tight md:text-7xl">
              Software systems built around business outcomes.
            </h1>
            <p className="mt-6 text-pretty text-lg leading-8 text-muted-foreground">
              PrimeStack helps businesses modernize websites, automate manual
              work, centralize operations, and launch custom software that
              creates measurable leverage.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group rounded-3xl border border-white/10 bg-white/[0.035] p-6 transition hover:border-accent/35 hover:bg-white/[0.055] md:p-8"
              >
                <div className="flex items-start justify-between gap-5">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl border border-accent/20 bg-accent/[0.09] text-accent">
                    <ServiceIcon slug={service.slug} />
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-accent" />
                </div>
                <h2 className="mt-6 text-2xl font-black text-foreground">
                  {service.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {service.description}
                </p>
                <div className="mt-6 grid gap-3 border-t border-white/10 pt-5">
                  {service.outcomes.slice(0, 3).map((outcome) => (
                    <p
                      key={outcome}
                      className="text-sm font-semibold text-foreground/85"
                    >
                      {outcome}
                    </p>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function ServiceIcon({ slug }: { slug: string }) {
  switch (slug) {
    case "website-development": return <Globe className="h-5 w-5" />;
    case "mobile-apps": return <Smartphone className="h-5 w-5" />;
    case "custom-software": return <TrendingUp className="h-5 w-5" />;
    case "crm-erp": return <Settings className="h-5 w-5" />;
    case "odoo-development": return <Code className="h-5 w-5" />;
    case "ai-automation": return <Zap className="h-5 w-5" />;
    case "system-integrations": return <GitMerge className="h-5 w-5" />;
    case "digital-transformation": return <ArrowLeftRight className="h-5 w-5" />;
    default: return <Globe className="h-5 w-5" />;
  }
}
