import React from 'react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  company: string;
  className?: string;
}

export default function TestimonialCard({
  quote,
  name,
  role,
  company,
  className = '',
}: TestimonialCardProps) {
  return (
    <figure
      className={`rounded-[24px] border border-border bg-card p-8 ${className}`}
    >
      {/* Decorative quote mark */}
      <span
        className="block select-none text-5xl font-bold leading-none text-accent/20 font-heading"
        aria-hidden="true"
      >
        &ldquo;
      </span>

      <blockquote className="mt-2">
        <p className="text-base leading-relaxed text-foreground italic">
          {quote}
        </p>
      </blockquote>

      <figcaption className="mt-6 flex flex-col">
        <span className="text-sm font-semibold text-foreground">{name}</span>
        <span className="mt-0.5 text-sm text-muted-foreground">
          {role}, {company}
        </span>
      </figcaption>
    </figure>
  );
}
