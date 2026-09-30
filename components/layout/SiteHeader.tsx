"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ASSETS } from "@/content/assets";
import { company } from "@/content/company";
import { nav } from "@/content/nav";

function NavDropdown({
  label,
  href,
  items,
}: {
  label: string;
  href: string;
  items: readonly { label: string; href: string }[];
}) {
  return (
    <div className="group relative py-2">
      <Link
        href={href}
        className="inline-flex items-center gap-1 font-body text-body-sm text-on-surface-variant transition-colors hover:text-on-surface"
      >
        {label}
        <span className="material-symbols-outlined text-[16px] text-outline transition-transform group-hover:rotate-180">
          expand_more
        </span>
      </Link>
      <div className="invisible absolute top-full left-0 z-50 w-64 rounded-lg border border-border-hairline bg-surface-card p-2 opacity-0 shadow-[0_12px_32px_-4px_rgba(7,21,38,0.06)] transition-all duration-200 group-hover:visible group-hover:opacity-100">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block rounded px-3 py-2 font-body text-body-sm text-on-surface-variant transition-colors hover:bg-surface-container-low hover:text-on-surface"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const homeActive = pathname === "/";

  return (
    <div className="fixed top-0 right-0 left-0 z-50">
      <div className="flex h-9 items-center justify-between bg-abyssal-navy px-gutter text-surface-container-lowest shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between">
          <div className="flex items-center gap-space-sm overflow-hidden">
            <span className="inline-flex items-center gap-1.5 rounded-DEFAULT bg-secondary/20 px-2 py-0.5 font-label text-label-sm tracking-wider text-secondary-fixed uppercase">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-secondary-fixed" />
              Advisory
            </span>
            <p className="truncate font-label text-label-sm text-surface-variant">
              {company.advisory}
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-space-md">
            <Link
              href="/news"
              className="font-label text-label-sm text-secondary-fixed underline-offset-4 transition-colors hover:text-on-secondary hover:underline"
            >
              Learn More →
            </Link>
            <div className="hidden items-center gap-space-sm border-l border-white/10 pl-space-md font-label text-label-sm text-surface-variant md:flex">
              <span>PORT OPS: 24/7 ACTIVE</span>
              <span className="text-border-subtle">•</span>
              <span>KARACHI • QASIM • GWADAR</span>
            </div>
          </div>
        </div>
      </div>

      <header className="w-full border-b border-border-hairline bg-surface-card/95 shadow-[0_1px_8px_rgba(7,21,38,0.03)] backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-gutter">
          <Link href="/" className="group flex shrink-0 items-center gap-space-sm">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="East Wind Shipping Logo"
              className="h-9 w-auto object-contain"
              src={ASSETS.logo}
            />
            <div className="flex flex-col">
              <span className="font-headline text-headline-sm leading-none tracking-tight text-primary transition-colors group-hover:text-secondary">
                {company.shortName}
              </span>
              <span className="mt-0.5 font-label text-label-sm tracking-widest text-on-surface-variant uppercase">
                {company.tagline}
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-space-lg xl:flex">
            <Link
              href="/"
              className={`py-2 transition-colors ${
                homeActive
                  ? "font-headline text-headline-sm text-secondary"
                  : "font-body text-body-sm text-on-surface-variant hover:text-on-surface"
              }`}
            >
              Home
            </Link>
            <NavDropdown label="About & Profile" href="/about" items={nav.about} />
            <NavDropdown label="Maritime Divisions" href="/divisions" items={nav.divisions} />
            <NavDropdown label="Pakistan Ports" href="/ports/karachi" items={nav.ports} />
            <Link
              href="/country"
              className="py-2 font-body text-body-sm text-on-surface-variant transition-colors hover:text-on-surface"
            >
              Country Profile
            </Link>
            <Link
              href="/news"
              className="py-2 font-body text-body-sm text-on-surface-variant transition-colors hover:text-on-surface"
            >
              News & Updates
            </Link>
          </nav>

          <div className="flex shrink-0 items-center gap-space-sm">
            <Link
              href="/contact"
              className="hidden items-center rounded-lg border border-border-hairline bg-surface-container-low px-4 py-2 font-body text-body-sm text-on-surface transition-colors hover:bg-surface-container sm:inline-flex"
            >
              Quick Tracking / Inquiry
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-lg border border-abyssal-navy bg-abyssal-navy px-4 py-2 font-body text-body-sm text-on-primary shadow-[0_1px_8px_rgba(7,21,38,0.06)] transition-all hover:border-secondary hover:bg-primary"
            >
              Contact Us
            </Link>
            <button
              type="button"
              aria-label="Open menu"
              className="ml-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-on-primary xl:hidden"
              onClick={() => setOpen((v) => !v)}
            >
              <span className="material-symbols-outlined text-[18px]">
                {open ? "close" : "menu"}
              </span>
            </button>
            <div className="ml-1 hidden h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary xl:flex">
              <span className="material-symbols-outlined text-[18px] text-on-primary">person</span>
            </div>
          </div>
        </div>

        {open && (
          <div className="border-t border-border-hairline bg-surface-card px-gutter py-space-md xl:hidden">
            <div className="mx-auto flex max-w-[1440px] flex-col gap-2">
              <Link href="/" className="py-2 font-body text-body-sm" onClick={() => setOpen(false)}>
                Home
              </Link>
              {[...nav.about, ...nav.divisions, ...nav.ports].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="py-2 font-body text-body-sm text-on-surface-variant"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/country" className="py-2 font-body text-body-sm" onClick={() => setOpen(false)}>
                Country Profile
              </Link>
              <Link href="/news" className="py-2 font-body text-body-sm" onClick={() => setOpen(false)}>
                News & Updates
              </Link>
              <Link href="/contact" className="py-2 font-body text-body-sm" onClick={() => setOpen(false)}>
                Contact
              </Link>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
