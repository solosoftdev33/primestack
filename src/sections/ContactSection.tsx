"use client";

import { useState, type FormEvent } from "react";
import { AlertCircle, CheckCircle2, Mail, MessageSquare, Phone } from "lucide-react";
import { industries, services, siteConfig } from "@/lib/site-content";

type PreferredContact = "Email" | "Call" | "WhatsApp";

type ContactFormData = {
  name: string;
  company: string;
  email: string;
  phone: string;
  businessType: string;
  budget: string;
  service: string;
  description: string;
  preferredContact: PreferredContact;
};

const initialData: ContactFormData = {
  name: "",
  company: "",
  email: "",
  phone: "",
  businessType: "",
  budget: "",
  service: "",
  description: "",
  preferredContact: "Email",
};

const budgetRanges = [
  "Under $5,000",
  "$5,000 - $15,000",
  "$15,000 - $50,000",
  "$50,000+",
] as const;

const inputClass =
  "w-full rounded-2xl border border-white/10 bg-black/24 px-4 py-3.5 text-sm font-semibold text-foreground outline-none transition placeholder:text-muted-foreground/55 focus:border-accent/45 focus:bg-black/35";

const labelClass = "mb-2 block text-xs font-black uppercase text-accent";

export default function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>(initialData);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function updateField(
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
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
        body: JSON.stringify({
          ...formData,
          message: [
            formData.description,
            formData.service ? `Preferred service: ${formData.service}` : "",
          ]
            .filter(Boolean)
            .join("\n\n"),
        }),
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
    <section className="section-padding border-t border-white/10 bg-[#0c0e12]" id="contact">
      <div className="section-container grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <span className="eyebrow">Start here</span>
          <h2 className="mt-6 text-balance text-4xl font-black leading-tight md:text-6xl">
            Let us map the highest-ROI system first.
          </h2>
          <p className="mt-5 text-pretty text-lg leading-8 text-muted-foreground">
            Tell us what feels messy: missed leads, slow operations, outdated
            web presence, disconnected tools, or a custom product idea. We will
            turn that into a practical roadmap.
          </p>

          <div className="mt-9 grid gap-4">
            <ContactPoint
              icon={<Mail className="h-5 w-5" />}
              label="Email"
              value={siteConfig.email}
              href={`mailto:${siteConfig.email}`}
            />
            <ContactPoint
              icon={<MessageSquare className="h-5 w-5" />}
              label="Consultation"
              value="Free strategy call, no commitment"
            />
          </div>
        </div>

        <div className="premium-panel rounded-3xl p-5 md:p-8">
          {success ? (
            <div className="grid min-h-[420px] place-items-center text-center">
              <div>
                <CheckCircle2 className="mx-auto h-14 w-14 text-accent" />
                <h3 className="mt-6 text-3xl font-black text-foreground">
                  Message sent
                </h3>
                <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-muted-foreground">
                  Thanks. We will review the details and get back to you within
                  24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSuccess(false)}
                  className="mt-7 rounded-full border border-white/10 px-5 py-3 text-sm font-black text-foreground transition hover:border-accent/35"
                >
                  Send another message
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
                    value={formData.name}
                    onChange={updateField}
                    placeholder="Your name"
                    className={inputClass}
                  />
                </Field>
                <Field label="Company" htmlFor="contact-company">
                  <input
                    id="contact-company"
                    name="company"
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
                    value={formData.phone}
                    onChange={updateField}
                    placeholder="Optional"
                    className={inputClass}
                  />
                </Field>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Business type" htmlFor="contact-business-type">
                  <select
                    id="contact-business-type"
                    name="businessType"
                    value={formData.businessType}
                    onChange={updateField}
                    className={inputClass}
                  >
                    <option value="">Select industry</option>
                    {industries.map((industry) => (
                      <option key={industry.slug} value={industry.title}>
                        {industry.title}
                      </option>
                    ))}
                    <option value="Other">Other</option>
                  </select>
                </Field>
                <Field label="Budget" htmlFor="contact-budget">
                  <select
                    id="contact-budget"
                    name="budget"
                    value={formData.budget}
                    onChange={updateField}
                    className={inputClass}
                  >
                    <option value="">Select range</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              <Field label="Priority service" htmlFor="contact-service">
                <select
                  id="contact-service"
                  name="service"
                  value={formData.service}
                  onChange={updateField}
                  className={inputClass}
                >
                  <option value="">Not sure yet</option>
                  {services.map((service) => (
                    <option key={service.slug} value={service.title}>
                      {service.title}
                    </option>
                  ))}
                </select>
              </Field>

              <div>
                <span className={labelClass}>Preferred contact</span>
                <div className="flex flex-wrap gap-3">
                  {(["Email", "Call", "WhatsApp"] as const).map((method) => {
                    const active = formData.preferredContact === method;

                    return (
                      <button
                        key={method}
                        type="button"
                        onClick={() =>
                          setFormData((current) => ({
                            ...current,
                            preferredContact: method,
                          }))
                        }
                        className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-black transition ${
                          active
                            ? "border-accent bg-accent text-accent-foreground"
                            : "border-white/10 bg-black/20 text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {method === "Email" ? <Mail className="h-4 w-4" /> : null}
                        {method === "Call" ? <Phone className="h-4 w-4" /> : null}
                        {method === "WhatsApp" ? (
                          <MessageSquare className="h-4 w-4" />
                        ) : null}
                        {method}
                      </button>
                    );
                  })}
                </div>
              </div>

              <Field label="What needs fixing?" htmlFor="contact-description" required>
                <textarea
                  id="contact-description"
                  name="description"
                  required
                  rows={5}
                  value={formData.description}
                  onChange={updateField}
                  placeholder="Tell us about the website, workflow, automation, or business system you want to improve."
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
                {loading ? "Sending..." : "Send Message"}
              </button>
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
