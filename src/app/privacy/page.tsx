import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for PrimeStack. Understand how we collect, use, and protect your data.",
};

export default function PrivacyPage() {
  return (
    <main className="pt-32 pb-20 bg-background text-foreground flex-1">
      <div className="section-container max-w-4xl">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors mb-8 font-semibold">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-foreground font-heading">
          Privacy Policy
        </h1>
        <p className="text-sm text-muted-foreground mt-2">Last updated: May 30, 2026</p>

        <div className="mt-12 space-y-8 text-muted-foreground leading-relaxed text-sm md:text-base">
          <section>
            <h2 className="text-xl font-bold text-foreground font-heading mb-4">1. Information We Collect</h2>
            <p>
              We collect information that you provide directly to us when filling out our contact form, subscribing to our newsletter, or contacting us for support. This may include your name, email address, phone number, company name, and details about your project or business operations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground font-heading mb-4">2. How We Use Your Information</h2>
            <p>
              We use the collected information to:
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-2">
              <li>Respond to your inquiries and schedule strategy consultations.</li>
              <li>Analyze your project needs and formulate custom software/automation roadmaps.</li>
              <li>Provide and maintain our services.</li>
              <li>Improve, personalize, and expand our website and operations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground font-heading mb-4">3. Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, please note that no method of transmission over the Internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground font-heading mb-4">4. Sharing Your Information</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to outside parties. This does not include trusted third parties who assist us in operating our website or servicing you, so long as those parties agree to keep this information confidential.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground font-heading mb-4">5. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, you can contact us at{" "}
              <a href="mailto:primestackus@gmail.com" className="text-accent hover:underline font-bold">
                primestackus@gmail.com
              </a>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
