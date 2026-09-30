import Link from "next/link";
import { company } from "@/content/company";
import { divisions } from "@/content/divisions";
import { depotFacilities } from "@/content/nav";
import { ports } from "@/content/ports";

export function Alliances() {
  return (
    <section className="w-full bg-surface-card py-space-xl lg:py-24">
      <div className="mx-auto max-w-[1440px] px-gutter">
        <div className="mb-space-sm flex items-center gap-2 font-label text-label-sm font-semibold tracking-widest text-secondary uppercase">
          <span className="h-px w-6 bg-secondary" />
          <span>Corporate Pedigree & Liner Heritage</span>
        </div>
        <div className="mb-space-xl grid grid-cols-1 items-center gap-gutter lg:grid-cols-12">
          <div className="lg:col-span-8">
            <h2 className="font-headline text-headline-lg tracking-tight text-primary">
              {company.heritageHeadline}
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="font-body text-body-md leading-relaxed text-on-surface-variant">
              {company.heritageBody}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">
          {company.alliances.map((card) => (
            <div
              key={card.title}
              className="flex flex-col justify-between rounded-xl bg-surface-container-low p-space-lg transition-transform hover:-translate-y-1"
            >
              <div>
                <div className="mb-space-md flex items-center justify-between">
                  <span className="font-label text-label-sm font-bold tracking-wider text-secondary uppercase">
                    {card.badge}
                  </span>
                  <span className="material-symbols-outlined text-secondary">{card.icon}</span>
                </div>
                <h3 className="mb-space-xs font-headline text-headline-sm text-primary">
                  {card.title}
                </h3>
                <div className="mb-space-md font-label text-label-sm text-outline uppercase">
                  {card.subtitle}
                </div>
                <p className="mb-space-md font-body text-body-sm leading-relaxed text-on-surface-variant">
                  {card.body}
                </p>
              </div>
              <div className="flex items-center justify-between border-t border-border-hairline pt-space-md font-label text-label-sm text-on-surface-variant">
                <span>{card.footerLeft}</span>
                <span className="font-semibold text-secondary">{card.footerRight}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DivisionsGrid() {
  return (
    <section className="w-full bg-surface py-space-xl lg:py-24" id="divisions">
      <div className="mx-auto max-w-[1440px] px-gutter">
        <div className="mb-space-xl flex flex-col justify-between gap-space-md md:flex-row md:items-end">
          <div>
            <div className="mb-space-xs flex items-center gap-2 font-label text-label-sm font-semibold tracking-widest text-secondary uppercase">
              <span className="h-px w-6 bg-secondary" />
              <span>Comprehensive Vessel Husbandry</span>
            </div>
            <h2 className="font-headline text-headline-lg tracking-tight text-primary">
              Specialised Maritime Divisions
            </h2>
          </div>
          <p className="max-w-md font-body text-body-sm text-on-surface-variant">
            Handling the broadest range of vessels and cargoes across Pakistani sea lanes with
            uncompromising maritime discipline.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-gutter md:grid-cols-2 lg:grid-cols-3">
          {divisions
            .filter((d) => d.slug !== "container-depot")
            .map((d) => (
              <div
                key={d.slug}
                className={`group flex flex-col justify-between rounded-xl bg-surface-card p-space-lg shadow-sm transition-all hover:shadow-md ${
                  d.wide ? "lg:col-span-2" : ""
                }`}
              >
                <div>
                  <div className="mb-space-md flex h-12 w-12 items-center justify-center rounded-lg bg-surface-container-low text-primary transition-colors group-hover:bg-primary group-hover:text-on-primary">
                    <span className="material-symbols-outlined text-[26px]">{d.icon}</span>
                  </div>
                  <div className="mb-1 font-label text-label-sm tracking-wider text-outline uppercase">
                    {d.eyebrow}
                  </div>
                  <h3 className="mb-space-xs font-headline text-headline-sm text-primary">
                    {d.title}
                  </h3>
                  <p className="mb-space-md font-body text-body-sm leading-relaxed text-on-surface-variant">
                    {d.summary}
                  </p>
                  <div className="mb-space-md space-y-1.5 font-label text-label-sm text-on-surface">
                    {d.bullets.map((b) => (
                      <div key={b} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between border-t border-border-hairline pt-space-md font-label text-label-sm">
                  <span className="text-outline">{d.footerNote}</span>
                  <Link
                    href={d.href}
                    className="flex items-center gap-1 font-semibold text-primary hover:text-secondary"
                  >
                    Inquire →
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export function DepotFacilities() {
  return (
    <section className="w-full bg-surface-card py-space-xl lg:py-24">
      <div className="mx-auto max-w-[1440px] px-gutter">
        <div className="mb-space-xs flex items-center gap-2 font-label text-label-sm font-semibold tracking-widest text-secondary uppercase">
          <span className="h-px w-6 bg-secondary" />
          <span>Off-Dock Container Terminal Infrastructure</span>
        </div>
        <div className="mb-space-xl grid grid-cols-1 items-end gap-gutter lg:grid-cols-12">
          <div className="lg:col-span-8">
            <h2 className="font-headline text-headline-lg tracking-tight text-primary">
              24,000 Square Meters of Strategically Situated Depot Space.
            </h2>
            <p className="mt-space-sm max-w-2xl font-body text-body-lg text-on-surface-variant">
              Providing Empty Container Storage, receiving and delivery, and Container repair
              services directly catering to Container Main Line Operators (MLOs) and NVOCCs.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-gutter lg:grid-cols-2">
          {depotFacilities.map((f) => (
            <div
              key={f.title}
              className="flex flex-col justify-between rounded-xl bg-surface p-space-xl"
            >
              <div>
                <div className="mb-space-md flex items-center justify-between">
                  <span
                    className={`rounded px-2.5 py-1 font-label text-label-sm font-semibold tracking-wider uppercase ${
                      f.badgeTone === "primary"
                        ? "bg-primary text-on-primary"
                        : "bg-surface-container-high text-primary"
                    }`}
                  >
                    {f.badge}
                  </span>
                  <span className="font-label text-label-sm font-bold text-secondary">
                    {f.distance}
                  </span>
                </div>
                <h3 className="mb-2 font-headline text-headline-md text-primary">{f.title}</h3>
                <p className="mb-space-lg font-body text-body-md leading-relaxed text-on-surface-variant">
                  {f.body}
                </p>
                <div className="mb-space-lg grid grid-cols-3 gap-space-sm rounded-lg bg-surface-card p-space-md">
                  {f.metrics.map((m) => (
                    <div key={m.label}>
                      <div className="font-headline text-headline-sm font-bold text-primary">
                        {m.value}
                      </div>
                      <div className="font-label text-label-sm text-outline">{m.label}</div>
                    </div>
                  ))}
                </div>
                <h4 className="mb-space-sm font-label text-label-sm font-bold tracking-wider text-primary uppercase">
                  {f.listTitle}
                </h4>
                <ul className="mb-space-lg space-y-2 font-body text-body-sm text-on-surface-variant">
                  {f.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="material-symbols-outlined mt-0.5 shrink-0 text-[18px] text-secondary">
                        check_circle
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center justify-between border-t border-border-hairline pt-space-md font-label text-label-sm">
                <span className="text-outline">{f.terminalId}</span>
                <Link href={f.href} className="font-semibold text-secondary hover:text-primary">
                  Inquire Depot Space →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PortsDirectory() {
  return (
    <section className="w-full bg-surface py-space-xl lg:py-24">
      <div className="mx-auto max-w-[1440px] px-gutter">
        <div className="mb-space-xl flex flex-col justify-between gap-space-md md:flex-row md:items-end">
          <div>
            <div className="mb-space-xs flex items-center gap-2 font-label text-label-sm font-semibold tracking-widest text-secondary uppercase">
              <span className="h-px w-6 bg-secondary" />
              <span>National Maritime Gateway Coverage</span>
            </div>
            <h2 className="font-headline text-headline-lg tracking-tight text-primary">
              Pakistan Ports Directory
            </h2>
          </div>
          <p className="max-w-md font-body text-body-sm text-on-surface-variant">
            East Wind Shipping maintains full operational agency coverage across all major
            deep-water ports and specialized marine hubs across Pakistan.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-gutter md:grid-cols-2 lg:grid-cols-4">
          {ports.map((port) => (
            <Link
              key={port.slug}
              href={port.href}
              className="flex flex-col justify-between rounded-xl bg-surface-card p-space-lg shadow-sm transition-all hover:shadow-md"
            >
              <div>
                <div className="mb-space-sm flex items-center justify-between">
                  <span className="font-label text-label-sm font-bold text-secondary">
                    {port.code}
                  </span>
                  <span className="h-2 w-2 rounded-full bg-emerald-glow" />
                </div>
                <h3 className="mb-1 font-headline text-headline-sm text-primary">{port.title}</h3>
                <div className="mb-space-md font-label text-label-sm text-outline">
                  {port.subtitle}
                </div>
                <p className="mb-space-md font-body text-body-sm leading-relaxed text-on-surface-variant">
                  {port.summary}
                </p>
                <div className="mb-space-md space-y-1 rounded bg-surface-container-low p-space-sm font-label text-label-sm">
                  {port.stats.map((s) => (
                    <div key={s.label} className="flex justify-between gap-2">
                      <span className="text-outline">{s.label}</span>
                      <span className="font-semibold text-primary">{s.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between border-t border-border-hairline pt-space-sm font-label text-label-sm">
                <span className="text-outline">View details</span>
                <span className="font-medium text-primary">{port.deskEmail}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AllianceBanner() {
  return (
    <section className="w-full border-y border-border-hairline bg-surface-card py-space-lg">
      <div className="mx-auto max-w-[1440px] px-gutter">
        <div className="flex flex-col items-center justify-between gap-space-md lg:flex-row">
          <div className="shrink-0 font-label text-label-sm tracking-wider text-outline uppercase">
            Premier Shipping Enterprise Alliances & Representation:
          </div>
          <div className="grid w-full grid-cols-2 items-center gap-gutter md:grid-cols-4 lg:w-auto">
            {[
              ["GLOBAL FEEDER", "Shipping LLC (Managed Partner)", "directions_boat", "text-secondary"],
              ["GREEN PAK SHIPPING", "Evergreen Container Line", "inventory_2", "text-emerald-glow"],
              ["KARACHI PORT TRUST", "Licensed Ship Agency", "anchor", "text-tertiary-fixed-dim"],
              ["PORT QASIM (PQA)", "Terminal Port Operator", "domain", "text-primary"],
            ].map(([title, sub, icon, color]) => (
              <div key={title} className="flex items-center gap-2 rounded bg-surface-container-low p-3">
                <span className={`material-symbols-outlined text-[20px] ${color}`}>{icon}</span>
                <div>
                  <div className="font-label text-label-md font-bold text-primary">{title}</div>
                  <div className="font-label text-[10px] text-on-surface-variant">{sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
