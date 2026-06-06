import Image from "next/image";
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
      <Image
        src="/logo.png"
        alt="PrimeStack US"
        width={36}
        height={36}
        className="rounded-lg shrink-0"
      />
      <span className="text-xl">PrimeStack <span className="text-accent">US</span></span>
    </Link>
  );
}
