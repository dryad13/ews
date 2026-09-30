"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ASSETS } from "@/content/assets";
import { company } from "@/content/company";
import { nav } from "@/content/nav";

function DesktopDropdown({
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

function MobileSection({
  title,
  overviewHref,
  items,
  open,
  onToggle,
  onNavigate,
  pathname,
}: {
  title: string;
  overviewHref: string;
  items: readonly { label: string; href: string }[];
  open: boolean;
  onToggle: () => void;
  onNavigate: () => void;
  pathname: string;
}) {
  const sectionActive =
    pathname === overviewHref || items.some((i) => pathname.startsWith(i.href));

  return (
    <div className="border-b border-border-hairline last:border-b-0">
      <button
        type="button"
        aria-expanded={open}
        onClick={onToggle}
        className={`flex w-full items-center justify-between py-3.5 text-left font-headline text-[15px] tracking-tight transition-colors ${
          sectionActive ? "text-secondary" : "text-primary"
        }`}
      >
        <span>{title}</span>
        <span
          className={`material-symbols-outlined text-[20px] text-outline transition-transform ${
            open ? "rotate-180" : ""
          }`}
        >
          expand_more
        </span>
      </button>
      {open && (
        <div className="mb-3 space-y-0.5 rounded-lg bg-surface-container-low/80 p-1.5">
          <Link
            href={overviewHref}
            onClick={onNavigate}
            className={`block rounded-md px-3 py-2.5 font-body text-body-sm font-medium ${
              pathname === overviewHref
                ? "bg-surface-card text-secondary shadow-sm"
                : "text-on-surface hover:bg-surface-card"
            }`}
          >
            Overview
          </Link>
          {items.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onNavigate}
                className={`block rounded-md px-3 py-2.5 font-body text-body-sm ${
                  active
                    ? "bg-surface-card font-medium text-secondary shadow-sm"
                    : "text-on-surface-variant hover:bg-surface-card hover:text-on-surface"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const homeActive = pathname === "/";

  useEffect(() => {
    setOpen(false);
    setExpanded(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function toggleSection(key: string) {
    setExpanded((prev) => (prev === key ? null : key));
  }

  function closeMenu() {
    setOpen(false);
    setExpanded(null);
  }

  return (
    <div className="fixed top-0 right-0 left-0 z-50">
      {/* Advisory strip */}
      <div className="flex h-8 items-center bg-abyssal-navy px-4 text-surface-container-lowest sm:h-9 sm:px-gutter">
        <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between gap-2">
          <div className="flex min-w-0 flex-1 items-center gap-2 overflow-hidden">
            <span className="inline-flex shrink-0 items-center gap-1 rounded-DEFAULT bg-secondary/20 px-1.5 py-0.5 font-label text-[10px] tracking-wider text-secondary-fixed uppercase sm:gap-1.5 sm:px-2 sm:text-label-sm">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-secondary-fixed" />
              Advisory
            </span>
            <p className="truncate font-label text-[10px] text-surface-variant sm:text-label-sm">
              {company.advisory}
            </p>
          </div>
          <Link
            href="/news"
            className="shrink-0 font-label text-[10px] text-secondary-fixed underline-offset-2 hover:underline sm:text-label-sm"
          >
            News →
          </Link>
        </div>
      </div>

      <header className="w-full border-b border-border-hairline bg-surface-card/95 shadow-[0_1px_8px_rgba(7,21,38,0.03)] backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-[1440px] items-center justify-between gap-2 px-4 sm:h-16 sm:px-gutter lg:h-20">
          <Link href="/" className="group flex min-w-0 shrink items-center gap-2 sm:gap-space-sm">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="East Wind Shipping Logo"
              className="h-7 w-auto object-contain sm:h-9"
              src={ASSETS.logo}
            />
            <div className="min-w-0 flex-col">
              <span className="block truncate font-headline text-[15px] leading-none tracking-tight text-primary transition-colors group-hover:text-secondary sm:text-headline-sm">
                {company.shortName}
              </span>
              <span className="mt-0.5 hidden font-label text-label-sm tracking-widest text-on-surface-variant uppercase sm:block">
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
            <DesktopDropdown label="About" href="/about" items={nav.about} />
            <DesktopDropdown label="Divisions" href="/divisions" items={nav.divisions} />
            <DesktopDropdown label="Ports" href="/ports/karachi" items={nav.ports} />
            <Link
              href="/country"
              className="py-2 font-body text-body-sm text-on-surface-variant transition-colors hover:text-on-surface"
            >
              Country
            </Link>
            <Link
              href="/news"
              className="py-2 font-body text-body-sm text-on-surface-variant transition-colors hover:text-on-surface"
            >
              News
            </Link>
          </nav>

          <div className="flex shrink-0 items-center gap-1.5 sm:gap-space-sm">
            <Link
              href="/contact"
              className="hidden items-center rounded-lg border border-border-hairline bg-surface-container-low px-3 py-2 font-body text-body-sm text-on-surface transition-colors hover:bg-surface-container lg:inline-flex"
            >
              Inquiry
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-lg border border-abyssal-navy bg-abyssal-navy px-3 py-2 font-body text-body-sm text-on-primary shadow-[0_1px_8px_rgba(7,21,38,0.06)] transition-all hover:border-secondary hover:bg-primary sm:px-4"
            >
              <span className="sm:hidden">Contact</span>
              <span className="hidden sm:inline">Contact Us</span>
            </Link>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border-hairline bg-surface-container-low text-primary xl:hidden"
              onClick={() => setOpen((v) => !v)}
            >
              <span className="material-symbols-outlined text-[22px]">
                {open ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {open && (
          <div className="absolute inset-x-0 top-full flex max-h-[calc(100dvh-3.5rem-2rem)] flex-col border-t border-border-hairline bg-surface-card shadow-[0_16px_40px_-8px_rgba(7,21,38,0.12)] xl:hidden sm:max-h-[calc(100dvh-4rem-2.25rem)]">
            <nav className="flex-1 overflow-y-auto overscroll-contain px-4 py-2 sm:px-gutter">
              <div className="mx-auto max-w-[1440px]">
                <Link
                  href="/"
                  onClick={closeMenu}
                  className={`block border-b border-border-hairline py-3.5 font-headline text-[15px] ${
                    homeActive ? "text-secondary" : "text-primary"
                  }`}
                >
                  Home
                </Link>

                <MobileSection
                  title="About"
                  overviewHref="/about"
                  items={nav.about.filter((i) => i.href !== "/about")}
                  open={expanded === "about"}
                  onToggle={() => toggleSection("about")}
                  onNavigate={closeMenu}
                  pathname={pathname}
                />
                <MobileSection
                  title="Divisions"
                  overviewHref="/divisions"
                  items={nav.divisions}
                  open={expanded === "divisions"}
                  onToggle={() => toggleSection("divisions")}
                  onNavigate={closeMenu}
                  pathname={pathname}
                />
                <MobileSection
                  title="Ports"
                  overviewHref="/ports/karachi"
                  items={nav.ports}
                  open={expanded === "ports"}
                  onToggle={() => toggleSection("ports")}
                  onNavigate={closeMenu}
                  pathname={pathname}
                />

                <Link
                  href="/country"
                  onClick={closeMenu}
                  className={`block border-b border-border-hairline py-3.5 font-headline text-[15px] ${
                    pathname.startsWith("/country") ? "text-secondary" : "text-primary"
                  }`}
                >
                  Country Profile
                </Link>
                <Link
                  href="/news"
                  onClick={closeMenu}
                  className={`block border-b border-border-hairline py-3.5 font-headline text-[15px] ${
                    pathname.startsWith("/news") ? "text-secondary" : "text-primary"
                  }`}
                >
                  News & Updates
                </Link>
              </div>
            </nav>

            <div className="shrink-0 border-t border-border-hairline bg-surface-container-low px-4 py-3 sm:px-gutter">
              <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-2">
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="rounded-lg border border-border-hairline bg-surface-card py-3 text-center font-body text-body-sm font-medium text-primary"
                >
                  Inquiry Desk
                </Link>
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="rounded-lg bg-abyssal-navy py-3 text-center font-body text-body-sm font-semibold text-on-primary"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {open && (
        <button
          type="button"
          aria-label="Dismiss menu"
          className="fixed inset-0 top-[calc(2rem+3.5rem)] z-[-1] bg-abyssal-navy/40 sm:top-[calc(2.25rem+4rem)] xl:hidden"
          onClick={closeMenu}
        />
      )}
    </div>
  );
}
