"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { ASSETS } from "@/content/assets";
import { company } from "@/content/company";
import { mailtoInquiry } from "@/lib/mailto";

type Tab = "cargo" | "depot" | "schedule";

export function HeroShip() {
  const [tab, setTab] = useState<Tab>("cargo");

  function onCargo(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    mailtoInquiry(
      "ops@ews.com.pk",
      "Port Agency Inquiry",
      `Vessel/Commodity: ${fd.get("commodity")}\nPort: ${fd.get("port")}\nService: ${fd.get("service")}\nEmail: ${fd.get("email")}`,
    );
  }

  function onDepot(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    mailtoInquiry(
      "tpx@ews.com.pk",
      "Depot Space Inquiry",
      `Yard: ${fd.get("yard")}\nService: ${fd.get("demand")}\nTEU: ${fd.get("teu")}\nEmail: ${fd.get("email")}`,
    );
  }

  const tabClass = (t: Tab) =>
    t === tab
      ? "flex-1 rounded py-2 text-center font-label text-label-sm font-medium bg-surface-card text-primary shadow-sm transition-all"
      : "flex-1 rounded py-2 text-center font-label text-label-sm text-on-surface-variant transition-all hover:text-primary";

  return (
    <section className="relative w-full overflow-hidden bg-abyssal-navy text-surface-container-lowest">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="relative h-full w-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="East Wind Shipping Container Vessel in Karachi Waters"
            className="animate-nautical-bob absolute -top-12 -right-12 -bottom-16 -left-12 h-[calc(100%+7rem)] w-[calc(100%+6rem)] object-cover object-[center_42%] opacity-65 select-none"
            src={ASSETS.heroShip}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-abyssal-navy/95 via-abyssal-navy/85 to-primary-container/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-abyssal-navy via-abyssal-navy/60 to-abyssal-navy/85" />
          <div className="animate-water-shimmer pointer-events-none absolute -bottom-10 right-0 left-0 h-48 bg-gradient-to-t from-abyssal-navy via-abyssal-navy/90 to-transparent" />
        </div>
      </div>

      <div className="pointer-events-none absolute -top-32 -right-32 z-[1] h-[600px] w-[600px] rounded-full bg-secondary/15 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 z-[1] h-[400px] w-[400px] rounded-full bg-signal-cyan/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-4 py-space-lg sm:px-gutter sm:py-space-xl lg:py-24">
        <div className="mb-space-md flex flex-wrap items-center justify-between gap-2 border-b border-white/15 pb-space-md backdrop-blur-[2px] sm:mb-space-lg sm:gap-space-sm sm:pb-space-lg">
          <div className="flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1 font-label text-[10px] tracking-widest text-surface-variant sm:text-label-sm">
            <span className="inline-block h-2 w-2 shrink-0 rounded-full bg-emerald-glow shadow-[0_0_8px_#059669]" />
            <span className="font-medium text-white">PK-KHI: 24.8607° N, 67.0011° E</span>
            <span className="hidden text-white/30 sm:inline">|</span>
            <span className="hidden font-semibold tracking-wider text-secondary-fixed sm:inline">
              VESSEL AGENCY & MULTIMODAL LOGISTICS
            </span>
          </div>
          <div className="flex items-center gap-space-md font-label text-label-sm text-surface-variant">
            <span className="hidden text-white/80 md:inline">
              PORT AGENTS • LINER REPRESENTATION • OFF-DOCK CFS
            </span>
            <span className="rounded border border-white/10 bg-white/10 px-2 py-0.5 text-[10px] font-semibold tracking-widest text-white uppercase">
              Est. Pakistan
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 items-center gap-gutter lg:grid-cols-12">
          <div className="flex flex-col justify-center lg:col-span-7">
            <div className="mb-space-md inline-flex w-fit items-center gap-2 rounded border border-white/10 bg-surface-container-low/20 px-3 py-1 text-secondary-fixed backdrop-blur-md">
              <span className="material-symbols-outlined text-[16px] text-emerald-glow">anchor</span>
              <span className="font-label text-label-sm font-semibold tracking-wider uppercase">
                Premier Maritime Gateway of Pakistan
              </span>
            </div>
            <h1 className="mb-space-md font-headline text-[32px] leading-[1.15] tracking-tight text-white drop-shadow-md sm:text-[40px] sm:leading-[48px] lg:text-[56px] lg:leading-[62px]">
              {company.heroHeadline}
            </h1>
            <p className="mb-space-lg max-w-2xl font-body text-body-md leading-relaxed text-surface-variant drop-shadow-sm sm:mb-space-xl sm:text-body-lg">
              {company.heroBody}
            </p>
            <div className="mb-space-lg flex flex-col gap-2 sm:mb-space-xl sm:flex-row sm:flex-wrap sm:items-center sm:gap-space-md">
              <Link
                href="/divisions"
                className="flex items-center justify-center gap-2 rounded bg-secondary px-5 py-3 font-body text-body-sm font-semibold text-on-secondary shadow-xl transition-colors hover:bg-secondary-fixed hover:text-on-secondary-fixed hover:shadow-2xl sm:px-6 sm:py-3.5"
              >
                <span>Explore Fleet & Agency</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 rounded border border-white/15 bg-white/10 px-5 py-3 font-body text-body-sm text-white backdrop-blur-md transition-colors hover:bg-white/20 sm:px-6 sm:py-3.5"
              >
                <span className="material-symbols-outlined text-[18px] text-secondary-fixed">
                  support_agent
                </span>
                <span>Contact Vessel Agency</span>
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-2 border-t border-white/15 pt-space-md sm:gap-gutter">
              {company.metrics.map((m) => (
                <div key={m.label}>
                  <div className="font-headline text-[18px] font-semibold tracking-tight text-white sm:text-headline-md">
                    {m.value}
                    <span className="font-headline text-[13px] font-normal text-secondary-fixed sm:text-headline-sm">
                      {m.suffix}
                    </span>
                  </div>
                  <div className="mt-1 font-label text-[9px] leading-snug tracking-wider text-surface-variant uppercase sm:text-label-sm">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-xl border border-white/20 bg-surface-card/95 p-space-md text-on-surface shadow-2xl backdrop-blur-md sm:p-space-lg">
              <div className="mb-space-md flex items-center justify-between border-b border-border-hairline pb-space-sm">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-glow" />
                  <span className="font-headline text-headline-sm text-primary">
                    Terminal Operations Desk
                  </span>
                </div>
                <span className="font-label text-label-sm tracking-wider text-outline uppercase">
                  Direct Dispatch
                </span>
              </div>

              <div className="mb-space-md flex rounded bg-surface-container-low p-1">
                <button type="button" className={tabClass("cargo")} onClick={() => setTab("cargo")}>
                  Cargo Agency
                </button>
                <button type="button" className={tabClass("depot")} onClick={() => setTab("depot")}>
                  Container Depot
                </button>
                <button
                  type="button"
                  className={tabClass("schedule")}
                  onClick={() => setTab("schedule")}
                >
                  Port ETA/Berth
                </button>
              </div>

              {tab === "cargo" && (
                <form className="space-y-space-md" onSubmit={onCargo}>
                  <div>
                    <label className="mb-1 block font-label text-label-sm tracking-wider text-on-surface-variant uppercase">
                      Vessel / Commodity Class
                    </label>
                    <select
                      name="commodity"
                      className="w-full rounded bg-surface-container-low px-3.5 py-2.5 font-body text-body-sm text-on-surface focus:bg-surface-card focus:outline-none"
                    >
                      <option>Tanker (Chemicals, Molasses, Ethanol, Petroleum)</option>
                      <option>Break Bulk (Steel, Project & Heavy Lift)</option>
                      <option>Dry Bulk (Grains/Seeds, Fertilizer, Coal, Scrap)</option>
                      <option>Container Feeder Service (GFS Representative)</option>
                      <option>Demo Ships & Ship Recycling (Gadani Anchorage)</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-1 gap-space-sm sm:grid-cols-2">
                    <div>
                      <label className="mb-1 block font-label text-label-sm tracking-wider text-on-surface-variant uppercase">
                        Port Hub
                      </label>
                      <select
                        name="port"
                        className="w-full rounded bg-surface-container-low px-3.5 py-2.5 font-body text-body-sm focus:outline-none"
                      >
                        <option>Karachi Port Trust (KPT)</option>
                        <option>Port Qasim (PQA)</option>
                        <option>Gwadar Port (GPA)</option>
                        <option>Gadani Anchorage</option>
                      </select>
                    </div>
                    <div>
                      <label className="mb-1 block font-label text-label-sm tracking-wider text-on-surface-variant uppercase">
                        Service Type
                      </label>
                      <select
                        name="service"
                        className="w-full rounded bg-surface-container-low px-3.5 py-2.5 font-body text-body-sm focus:outline-none"
                      >
                        <option>Full Agency & Husbandry</option>
                        <option>Protective Agency</option>
                        <option>Stevedoring & Discharging</option>
                        <option>Bunkers & Slops</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="mb-1 block font-label text-label-sm tracking-wider text-on-surface-variant uppercase">
                      Principal / Consignor Email
                    </label>
                    <input
                      required
                      name="email"
                      type="email"
                      placeholder="operations@principal-line.com"
                      className="w-full rounded bg-surface-container-low px-3.5 py-2.5 font-body text-body-sm focus:bg-surface-card focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded bg-abyssal-navy py-3 font-body text-body-sm font-semibold text-on-primary transition-colors hover:bg-primary"
                  >
                    <span className="material-symbols-outlined text-[18px] text-secondary-fixed">
                      send
                    </span>
                    <span>Request Port Agency Disbursal & Proforma</span>
                  </button>
                </form>
              )}

              {tab === "depot" && (
                <form className="space-y-space-md" onSubmit={onDepot}>
                  <div>
                    <label className="mb-1 block font-label text-label-sm tracking-wider text-on-surface-variant uppercase">
                      Depot Yard
                    </label>
                    <select
                      name="yard"
                      className="w-full rounded bg-surface-container-low px-3.5 py-2.5 font-body text-body-sm focus:outline-none"
                    >
                      <option>TPX – M.T. Khan Road (16,000 m² / 2km from Port)</option>
                      <option>East Wharf – Keamari Facility (8,000 m² Portside)</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-1 gap-space-sm sm:grid-cols-2">
                    <div>
                      <label className="mb-1 block font-label text-label-sm tracking-wider text-on-surface-variant uppercase">
                        Service Demand
                      </label>
                      <select
                        name="demand"
                        className="w-full rounded bg-surface-container-low px-3.5 py-2.5 font-body text-body-sm focus:outline-none"
                      >
                        <option>Empty Storage (MLO/NVOCC)</option>
                        <option>IICL Container Survey</option>
                        <option>Structural Box Repair</option>
                        <option>Reefer Pre-Trip Inspection</option>
                      </select>
                    </div>
                    <div>
                      <label className="mb-1 block font-label text-label-sm tracking-wider text-on-surface-variant uppercase">
                        TEU Volume
                      </label>
                      <input
                        name="teu"
                        type="text"
                        placeholder="e.g. 50-250 TEU"
                        className="w-full rounded bg-surface-container-low px-3.5 py-2.5 font-body text-body-sm focus:outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1 block font-label text-label-sm tracking-wider text-on-surface-variant uppercase">
                      Contact Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      placeholder="equipment@carrier.com"
                      className="w-full rounded bg-surface-container-low px-3.5 py-2.5 font-body text-body-sm focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded bg-secondary py-3 font-body text-body-sm font-semibold text-on-secondary transition-colors hover:bg-emerald-glow"
                  >
                    <span className="material-symbols-outlined text-[18px]">warehouse</span>
                    <span>Check Depot Space & Tariffs</span>
                  </button>
                </form>
              )}

              {tab === "schedule" && (
                <div className="space-y-space-sm">
                  {[
                    {
                      name: "GFS GULF EXPRESS V.2408",
                      route: "Dubai (Jebel Ali) → Karachi (KICT)",
                      status: "BERTHED",
                      meta: "Depart: 18:00 PKT",
                      tone: "text-secondary",
                    },
                    {
                      name: "EVER BRAVE V.0041W",
                      route: "Singapore → Port Qasim (QICT)",
                      status: "AT ANCHORAGE",
                      meta: "Berth: Tomorrow",
                      tone: "bg-abyssal-navy px-2 py-0.5 rounded text-[11px] text-tertiary-fixed-dim",
                    },
                    {
                      name: "MT ARABIAN TIDE",
                      route: "Chemical / Ethanol → Keamari OP-II",
                      status: "DISCHARGING",
                      meta: "East Wharf KPT",
                      tone: "text-emerald-glow",
                    },
                  ].map((row) => (
                    <div
                      key={row.name}
                      className="flex items-center justify-between rounded bg-surface-container-low p-3 text-body-sm"
                    >
                      <div>
                        <div className="font-headline text-[15px] text-primary">{row.name}</div>
                        <div className="font-label text-label-sm text-on-surface-variant">
                          {row.route}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`font-label text-label-sm font-semibold ${row.tone}`}>
                          {row.status}
                        </div>
                        <div className="font-label text-label-sm text-outline">{row.meta}</div>
                      </div>
                    </div>
                  ))}
                  <Link
                    href="/contact"
                    className="mt-2 block w-full rounded bg-surface-container-high py-2.5 text-center font-label text-label-sm tracking-wider text-primary uppercase transition-colors hover:bg-surface-container"
                  >
                    Request Full Line Manifest & Berthing Advisory →
                  </Link>
                </div>
              )}

              <div className="mt-space-sm flex items-center justify-between border-t border-border-hairline pt-3 font-label text-[11px] text-outline">
                <span className="flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-glow" />
                  EDI WebOC Connected
                </span>
                <span>24/7 Operations Room</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
