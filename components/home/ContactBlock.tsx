"use client";

import { FormEvent } from "react";
import { divisionEmails, facilityContacts } from "@/content/contacts";
import { mailtoInquiry } from "@/lib/mailto";

export function ContactBlock() {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const division = String(fd.get("division") || "tanker");
    const to = divisionEmails[division] || "ops@ews.com.pk";
    mailtoInquiry(
      to,
      `Operational Inquiry — ${division}`,
      `Name: ${fd.get("name")}\nCompany: ${fd.get("company")}\nEmail: ${fd.get("email")}\nPhone: ${fd.get("phone")}\nDivision: ${fd.get("division")}\nPort: ${fd.get("port")}\n\n${fd.get("message")}`,
    );
    e.currentTarget.reset();
  }

  return (
    <section className="w-full bg-surface py-space-lg sm:py-space-xl lg:py-24" id="contact">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-gutter">
        <div className="grid grid-cols-1 gap-gutter lg:grid-cols-12">
          <div className="flex flex-col justify-between lg:col-span-5">
            <div>
              <div className="mb-space-xs flex items-center gap-2 font-label text-label-sm font-semibold tracking-widest text-secondary uppercase">
                <span className="h-px w-6 bg-secondary" />
                <span>24/7 Operations Desk</span>
              </div>
              <h2 className="mb-space-md font-headline text-headline-lg tracking-tight text-primary">
                Contact Vessel Agency & Depot Dispatch
              </h2>
              <p className="mb-space-lg font-body text-body-md leading-relaxed text-on-surface-variant">
                Engage our operations team for immediate proforma disbursements, tanker berth
                planning, container depot gate passes, or demo ship beaching clearances.
              </p>
              <div className="mb-space-lg space-y-space-md">
                {facilityContacts.map((f) => (
                  <div
                    key={f.title}
                    className="rounded-lg border border-border-hairline bg-surface-card p-space-md"
                  >
                    <div className="mb-1 flex items-center gap-2 font-headline text-[16px] text-primary">
                      <span className="material-symbols-outlined text-[18px] text-secondary">
                        {f.icon}
                      </span>
                      <span>{f.title}</span>
                    </div>
                    <div className="pl-6 font-body text-body-sm leading-relaxed text-on-surface-variant">
                      {f.lines.map((line) => (
                        <div key={line}>{line}</div>
                      ))}
                    </div>
                    <div className="mt-2 flex flex-wrap items-center gap-4 pl-6 font-label text-label-sm text-primary">
                      {"tel" in f && f.tel && <span>Tel: {f.tel}</span>}
                      <span>
                        Email:{" "}
                        <a className="text-secondary hover:underline" href={`mailto:${f.email}`}>
                          {f.email}
                        </a>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2 font-label text-label-sm text-outline">
              <span className="h-2 w-2 rounded-full bg-emerald-glow" />
              <span>VHF Channel 16 / 12 Karachi Port Agency Watch 24 Hours</span>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-xl border border-border-hairline bg-surface-card p-space-lg shadow-lg sm:p-space-xl">
              <h3 className="mb-2 font-headline text-headline-md text-primary">
                Direct Operational Inquiry
              </h3>
              <p className="mb-space-lg font-body text-body-sm text-on-surface-variant">
                Route your request directly to the responsible division head for an immediate
                technical and commercial response.
              </p>
              <form className="space-y-space-md" onSubmit={onSubmit}>
                <div className="grid grid-cols-1 gap-space-md sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block font-label text-label-sm tracking-wider text-on-surface-variant uppercase">
                      First & Last Name *
                    </label>
                    <input
                      required
                      name="name"
                      type="text"
                      placeholder="Capt. Tariq Rahman"
                      className="w-full rounded border border-transparent bg-surface-container-low px-4 py-3 font-body text-body-sm focus:border-border-subtle focus:bg-white focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block font-label text-label-sm tracking-wider text-on-surface-variant uppercase">
                      Company / Principal Line *
                    </label>
                    <input
                      required
                      name="company"
                      type="text"
                      placeholder="Maritime Shipping Line"
                      className="w-full rounded border border-transparent bg-surface-container-low px-4 py-3 font-body text-body-sm focus:border-border-subtle focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-space-md sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block font-label text-label-sm tracking-wider text-on-surface-variant uppercase">
                      Email Address *
                    </label>
                    <input
                      required
                      name="email"
                      type="email"
                      placeholder="dispatch@vesselline.com"
                      className="w-full rounded border border-transparent bg-surface-container-low px-4 py-3 font-body text-body-sm focus:border-border-subtle focus:bg-white focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block font-label text-label-sm tracking-wider text-on-surface-variant uppercase">
                      Direct Telephone / Mobile
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      placeholder="+971 4 000 0000 / +92 300 0000000"
                      className="w-full rounded border border-transparent bg-surface-container-low px-4 py-3 font-body text-body-sm focus:border-border-subtle focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-space-md sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block font-label text-label-sm tracking-wider text-on-surface-variant uppercase">
                      Routing Division *
                    </label>
                    <select
                      name="division"
                      className="w-full rounded border border-transparent bg-surface-container-low px-4 py-3 font-body text-body-sm focus:border-border-subtle focus:bg-white focus:outline-none"
                    >
                      <option value="tanker">Tanker / Tramper Division</option>
                      <option value="breakbulk">Break Bulk & Project Cargo</option>
                      <option value="drybulk">Dry Bulk Vessels</option>
                      <option value="feeder">Container Feeder Division</option>
                      <option value="cordelia">Cordelia Container Division</option>
                      <option value="depot">Container Depot Division</option>
                      <option value="gadani">Demo Ships & Gadani</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-1.5 block font-label text-label-sm tracking-wider text-on-surface-variant uppercase">
                      Port of Call / Terminal
                    </label>
                    <select
                      name="port"
                      className="w-full rounded border border-transparent bg-surface-container-low px-4 py-3 font-body text-body-sm focus:border-border-subtle focus:bg-white focus:outline-none"
                    >
                      <option>Karachi Port Trust (East / West Wharves)</option>
                      <option>Port Muhammad Bin Qasim (PQA)</option>
                      <option>Gwadar Deep Sea Port (GPA)</option>
                      <option>Gadani Demolition Anchorage</option>
                      <option>TPX Off-Dock Container Depot</option>
                      <option>Keamari Off-Dock Terminal</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block font-label text-label-sm tracking-wider text-on-surface-variant uppercase">
                    Message / Cargo & Vessel Specifications
                  </label>
                  <textarea
                    required
                    name="message"
                    rows={4}
                    placeholder="Please state vessel DWT, draft, cargo volume, commodity nature, expected laycan, or container depot requirements..."
                    className="w-full rounded border border-transparent bg-surface-container-low px-4 py-3 font-body text-body-sm focus:border-border-subtle focus:bg-white focus:outline-none"
                  />
                </div>
                <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-1.5 font-label text-label-sm text-outline">
                    <span className="material-symbols-outlined text-[16px] text-secondary">lock</span>
                    <span>Confidential Port Disbursement Guarantee</span>
                  </div>
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded bg-abyssal-navy px-8 py-3.5 font-body text-body-sm font-semibold text-on-primary shadow-md transition-colors hover:bg-secondary sm:w-auto"
                  >
                    <span>Dispatch Request</span>
                    <span className="material-symbols-outlined text-[18px]">forward_to_inbox</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
