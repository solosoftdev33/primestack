import Link from "next/link";

type LogoProps = {
  className?: string;
};

export default function Logo({ className = "" }: LogoProps) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3 font-heading font-black text-foreground ${className}`}
      aria-label="PrimeStack home"
    >
      <span className="grid h-9 w-9 place-items-center rounded-xl border border-accent/30 bg-accent/10 text-accent">
        <svg
          aria-hidden="true"
          viewBox="0 0 32 32"
          className="h-5 w-5"
          fill="none"
        >
          <path d="M16 5 27 10.5 16 16 5 10.5 16 5Z" fill="currentColor" />
          <path
            d="m5 16 11 5.5L27 16M5 21.5 16 27l11-5.5"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.4"
          />
        </svg>
      </span>
      <span className="text-xl">PrimeStack</span>
    </Link>
  );
}
