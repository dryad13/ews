import Link from "next/link";
import { ASSETS } from "@/content/assets";
import { nav } from "@/content/nav";

export function SiteFooter() {
  return (
    <footer className="mt-margin w-full border-t border-border-hairline bg-surface-card">
      <div className="mx-auto max-w-[1440px] px-gutter py-space-xl">
        <div className="grid grid-cols-1 gap-gutter border-b border-border-hairline pb-space-xl md:grid-cols-2 lg:grid-cols-5">
          <div className="pr-0 lg:col-span-2 lg:pr-space-xl">
            <div className="mb-space-md flex items-center gap-space-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="East Wind Shipping Logo"
                className="h-8 w-auto object-contain"
                src={ASSETS.logo}
              />
              <span className="font-headline text-headline-sm tracking-tight text-primary">
                EAST WIND SHIPPING
              </span>
            </div>
            <p className="mb-space-md max-w-md font-body text-body-sm leading-relaxed text-on-surface-variant">
              East Wind Shipping Co. (Pvt) Ltd. is a premier ship agency, chartering broker, and
              multimodal freight services conglomerate operating continuously across all major
              maritime hubs and dry ports in Pakistan.
            </p>
            <div className="flex items-center gap-space-xs font-label text-label-sm text-outline">
              <span className="material-symbols-outlined text-[16px] text-secondary">
                verified_user
              </span>
              <span>LICENSED SHIP AGENCY • KARACHI & QASIM</span>
            </div>
          </div>

          <div>
            <h4 className="mb-space-md font-label text-label-md font-bold tracking-wider text-primary uppercase">
              Maritime Divisions
            </h4>
            <ul className="space-y-2.5 font-body text-body-sm">
              {nav.divisions.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-on-surface-variant transition-colors hover:text-on-surface"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-space-md font-label text-label-md font-bold tracking-wider text-primary uppercase">
              Pakistan Port Hubs
            </h4>
            <ul className="space-y-2.5 font-body text-body-sm">
              {nav.ports.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-on-surface-variant transition-colors hover:text-on-surface"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/country"
                  className="text-on-surface-variant transition-colors hover:text-on-surface"
                >
                  Pakistan Country Profile
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-space-md font-label text-label-md font-bold tracking-wider text-primary uppercase">
              Corporate & Alliances
            </h4>
            <ul className="space-y-2.5 font-body text-body-sm">
              {nav.about.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-on-surface-variant transition-colors hover:text-on-surface"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/news"
                  className="text-on-surface-variant transition-colors hover:text-on-surface"
                >
                  Maritime Advisories
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-on-surface-variant transition-colors hover:text-on-surface"
                >
                  Head Office & Branches
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-space-md border-b border-border-hairline py-space-lg">
          <div className="flex flex-wrap items-center gap-space-md">
            <span className="font-label text-label-sm tracking-wider text-outline uppercase">
              Principal Partners & Alliances:
            </span>
            <div className="flex items-center gap-space-md font-body text-body-sm text-on-surface-variant">
              <a
                href="http://www.globalfeeders.com/"
                className="transition-colors hover:text-primary"
                target="_blank"
                rel="noreferrer"
              >
                Global Feeder Shipping LLC
              </a>
              <span className="text-border-subtle">•</span>
              <a
                href="http://www.greenpakshipping.com/"
                className="transition-colors hover:text-primary"
                target="_blank"
                rel="noreferrer"
              >
                Green Pak Shipping / Evergreen Marine
              </a>
              <span className="text-border-subtle">•</span>
              <a
                href="https://www.cordelialine.com/"
                className="transition-colors hover:text-primary"
                target="_blank"
                rel="noreferrer"
              >
                Cordelia Container Line
              </a>
            </div>
          </div>
          <div className="flex items-center gap-space-sm font-label text-label-sm text-on-surface-variant">
            <span className="h-2 w-2 rounded-full bg-emerald-glow" />
            EDI & WebOC Automated Terminal Connection
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-space-md pt-space-lg font-label text-label-sm text-outline md:flex-row">
          <div>
            © {new Date().getFullYear()} East Wind Shipping Co. (Pvt) Ltd. All rights reserved.
            Registered Ship Agent & Multimodal Operator.
          </div>
          <div className="flex items-center gap-space-lg">
            <Link href="/country" className="transition-colors hover:text-on-surface">
              Port Regulations
            </Link>
            <Link href="/about" className="transition-colors hover:text-on-surface">
              Corporate Profile
            </Link>
            <Link href="/privacy" className="transition-colors hover:text-on-surface">
              Privacy Policy
            </Link>
            <Link href="/legal" className="transition-colors hover:text-on-surface">
              Legal Notice
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
