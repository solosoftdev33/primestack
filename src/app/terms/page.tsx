import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for PrimeStack. Understand the terms under which we offer our consulting and software services.",
};

export default function TermsPage() {
  return (
    <main className="pt-32 pb-20 bg-background text-foreground flex-1">
      <div className="section-container max-w-4xl">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors mb-8 font-semibold">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-foreground font-heading">
          Terms of Service
        </h1>
        <p className="text-sm text-muted-foreground mt-2">Last updated: May 30, 2026</p>

        <div className="mt-12 space-y-8 text-muted-foreground leading-relaxed text-sm md:text-base">
          <section>
            <h2 className="text-xl font-bold text-foreground font-heading mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using this website, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by these terms, please do not use this service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground font-heading mb-4">2. Services Offered</h2>
            <p>
              PrimeStack provides digital consulting, custom software development, workflow automation, and CRM/ERP integration solutions. The scope, timelines, deliverables, and fees for all custom development work are governed by separate master service agreements or statements of work.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground font-heading mb-4">3. Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, mockups, code snippets, and design layout, is the intellectual property of PrimeStack unless otherwise noted, and is protected by applicable copyright and trademark laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground font-heading mb-4">4. Limitation of Liability</h2>
            <p>
              Under no circumstances shall PrimeStack be liable for any direct, indirect, special, incidental, or consequential damages, including loss of data or profit, arising out of the use, or the inability to use, the materials on this site or our software implementations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground font-heading mb-4">5. Governing Law</h2>
            <p>
              Any claim relating to PrimeStack's website or services shall be governed by the laws of our operating jurisdiction, without regard to its conflict of law provisions.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
