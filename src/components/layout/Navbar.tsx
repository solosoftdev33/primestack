"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";
import Logo from "./Logo";
import { navLinks } from "@/lib/site-content";

function isActive(pathname: string, href: string) {
  return pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-[#0d0f14]/88 px-4 shadow-[0_18px_60px_rgba(0,0,0,0.36)] backdrop-blur-xl md:px-5"
      >
        <Logo />

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active = isActive(pathname, link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                  active
                    ? "bg-accent/[0.12] text-accent"
                    : "text-muted-foreground hover:bg-white/[0.06] hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-extrabold text-accent-foreground shadow-[0_12px_30px_rgba(210,173,99,0.18)] transition hover:bg-[#e2c37a]"
          >
            Book a Strategy Call
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 text-foreground lg:hidden"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open ? (
        <div className="mx-auto mt-3 max-w-6xl rounded-2xl border border-white/10 bg-[#0d0f14] p-3 shadow-2xl lg:hidden">
          <div className="grid gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-xl px-4 py-3 text-sm font-bold ${
                  isActive(pathname, link.href)
                    ? "bg-accent/[0.12] text-accent"
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-4 py-3 text-sm font-extrabold text-accent-foreground"
            >
              Book a Strategy Call
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
