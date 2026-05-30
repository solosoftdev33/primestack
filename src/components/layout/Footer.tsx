import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import Logo from "./Logo";
import { industries, services, siteConfig } from "@/lib/site-content";

const companyLinks = [
  { label: "Success Stories", href: "/success-stories" },
  { label: "Process", href: "/process" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
] as const;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#08090b]">
      <div className="section-container py-14 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_2fr_0.9fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-7 text-muted-foreground">
              Revenue-focused websites, automation, CRM/ERP systems, and custom
              software for businesses that want cleaner operations and measurable
              growth.
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-accent"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              {siteConfig.email}
            </a>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            <FooterColumn title="Services">
              {services.map((service) => (
                <FooterLink
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  label={service.title}
                />
              ))}
            </FooterColumn>
            <FooterColumn title="Industries">
              {industries.map((industry) => (
                <FooterLink
                  key={industry.slug}
                  href={`/industries/${industry.slug}`}
                  label={industry.title}
                />
              ))}
            </FooterColumn>
            <FooterColumn title="Company">
              {companyLinks.map((link) => (
                <FooterLink key={link.href} href={link.href} label={link.label} />
              ))}
            </FooterColumn>
          </div>

          <div className="rounded-2xl border border-accent/20 bg-accent/[0.08] p-6">
            <p className="text-sm font-extrabold text-foreground">
              Ready to upgrade the system behind your business?
            </p>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Book a strategy call and we will map the highest-ROI opportunities
              first.
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-accent"
            >
              Start the conversation
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} PrimeStack. All rights reserved.</p>
          <p>Built for growth, automation, and operational clarity.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="text-xs font-black uppercase text-accent">{title}</h2>
      <ul className="mt-4 grid gap-3">{children}</ul>
    </div>
  );
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm font-semibold text-muted-foreground transition hover:text-foreground"
      >
        {label}
      </Link>
    </li>
  );
}
