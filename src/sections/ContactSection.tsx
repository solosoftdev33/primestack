"use client";

import { useState, type FormEvent } from "react";
import {
  AlertCircle,
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  Search,
  Send,
} from "lucide-react";
import { siteConfig } from "@/lib/site-content";

type ContactFormData = {
  name: string;
  company: string;
  email: string;
  phone: string;
  website: string;
  description: string;
};

const initialData: ContactFormData = {
  name: "",
  company: "",
  email: "",
  phone: "",
  website: "",
  description: "",
};

const inputClass =
  "w-full rounded-2xl border border-white/10 bg-black/24 px-4 py-3.5 text-sm font-semibold text-foreground outline-none transition placeholder:text-muted-foreground/55 focus:border-accent/45 focus:bg-black/35";

const labelClass = "mb-2 block text-xs font-black uppercase text-accent";

const nextSteps = [
  {
    icon: Send,
    title: "Tell us what is slowing you down",
    description: "A short form is all it takes — no sales call required.",
  },
  {
    icon: Search,
    title: "We review your setup",
    description:
      "An engineer looks at your website, lead flow, and manual work.",
  },
  {
    icon: CheckCircle2,
    title: "You get a practical plan",
    description:
      "Specific opportunities, ranked by impact. Keep it whether you hire us or not.",
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>(initialData);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function updateField(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  }

  async function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to send your message.");
      }

      setSuccess(true);
      setFormData(initialData);
    } catch (caught) {
      setError(
        caught instanceof Error
          ? caught.message
          : "Something went wrong. Please email us directly."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      className="section-padding border-t border-white/10 bg-[#0c0e12]"
      id="contact"
    >
      <div className="section-container grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <span className="eyebrow">Get a free business audit</span>
          <h2 className="mt-6 text-balance text-4xl font-black leading-tight md:text-6xl">
            Tell us what&apos;s slowing you down. We&apos;ll tell you what we&apos;d fix.
          </h2>
          <p className="mt-5 text-pretty text-lg leading-8 text-muted-foreground">
            You don&apos;t need a polished pitch. Just describe the problem —
            missed calls, manual data entry, a website that doesn&apos;t bring in
            work. An engineer will review it and send you a practical
            improvement plan. Free, and with no obligation.
          </p>

          <div className="mt-9 grid gap-4">
            <ContactPoint
              icon={<Mail className="h-5 w-5" />}
              label="Email"
              value={siteConfig.email}
              href={`mailto:${siteConfig.email}`}
            />
            <ContactPoint
              icon={<Clock className="h-5 w-5" />}
              label="Response Time"
              value="Typically within 24 hours"
            />
            <ContactPoint
              icon={<MapPin className="h-5 w-5" />}
              label="Location"
              value="Remote team, working with US businesses"
            />
          </div>

          <div className="mt-9 rounded-2xl border border-accent/20 bg-accent/[0.08] p-6">
            <p className="text-sm font-black uppercase tracking-widest text-accent">
              What happens next
            </p>
            <div className="mt-5 grid gap-5">
              {nextSteps.map((step, idx) => (
                <div key={step.title} className="flex items-start gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-accent/25 bg-accent/10 text-accent">
                    <step.icon className="h-4.5 w-4.5" size={18} strokeWidth={1.75} />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-foreground">
                      <span className="mr-1.5 text-accent">{idx + 1}.</span>
                      {step.title}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="premium-panel rounded-3xl p-5 md:p-8">
          {success ? (
            <div className="grid min-h-[420px] place-items-center text-center">
              <div>
                <CheckCircle2 className="mx-auto h-14 w-14 text-accent" />
                <h3 className="mt-6 text-3xl font-black text-foreground">
                  Request received
                </h3>
                <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-muted-foreground">
                  Thanks. An engineer will review your current setup and get
                  back to you within 24 hours with first thoughts.
                </p>
                <button
                  type="button"
                  onClick={() => setSuccess(false)}
                  className="mt-7 rounded-full border border-white/10 px-5 py-3 text-sm font-black text-foreground transition hover:border-accent/35"
                >
                  Send another request
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={submitForm} className="grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" htmlFor="contact-name" required>
                  <input
                    id="contact-name"
                    name="name"
                    required
                    autoComplete="name"
                    value={formData.name}
                    onChange={updateField}
                    placeholder="Your name"
                    className={inputClass}
                  />
                </Field>
                <Field label="Company" htmlFor="contact-company" required>
                  <input
                    id="contact-company"
                    name="company"
                    required
                    autoComplete="organization"
                    value={formData.company}
                    onChange={updateField}
                    placeholder="Company name"
                    className={inputClass}
                  />
                </Field>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Email" htmlFor="contact-email" required>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={formData.email}
                    onChange={updateField}
                    placeholder="you@company.com"
                    className={inputClass}
                  />
                </Field>
                <Field label="Phone" htmlFor="contact-phone">
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={formData.phone}
                    onChange={updateField}
                    placeholder="Optional"
                    className={inputClass}
                  />
                </Field>
              </div>

              <Field label="Website" htmlFor="contact-website">
                <input
                  id="contact-website"
                  name="website"
                  type="url"
                  value={formData.website}
                  onChange={updateField}
                  placeholder="Optional — your website or social page"
                  className={inputClass}
                />
              </Field>

              <Field
                label="What are you trying to improve?"
                htmlFor="contact-description"
                required
              >
                <textarea
                  id="contact-description"
                  name="description"
                  required
                  rows={5}
                  value={formData.description}
                  onChange={updateField}
                  placeholder="For example: we miss calls after 5pm, our quote process runs on spreadsheets, or our website hasn't brought in a lead in months."
                  className={`${inputClass} resize-none`}
                />
              </Field>

              {error ? (
                <div className="flex gap-3 rounded-2xl border border-red-400/20 bg-red-500/10 p-4 text-sm font-semibold text-red-200">
                  <AlertCircle className="h-5 w-5 shrink-0" />
                  <span>{error}</span>
                </div>
              ) : null}

              <button
                type="submit"
                disabled={loading}
                className="rounded-2xl bg-accent px-6 py-4 text-base font-black text-accent-foreground transition hover:bg-[#e2c37a] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Sending..." : "Get a Free Business Audit"}
              </button>
              <p className="text-center text-xs text-muted-foreground">
                Your information is only used to respond to your inquiry. No
                spam, ever.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor}>
      <span className={labelClass}>
        {label}
        {required ? <span className="text-foreground"> *</span> : null}
      </span>
      {children}
    </label>
  );
}

function ContactPoint({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <span className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] text-accent">
        {icon}
      </span>
      <span>
        <span className="block text-xs font-black uppercase text-muted-foreground">
          {label}
        </span>
        <span className="mt-1 block text-sm font-black text-foreground">
          {value}
        </span>
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} className="flex items-center gap-4">
        {content}
      </a>
    );
  }

  return <div className="flex items-center gap-4">{content}</div>;
}
