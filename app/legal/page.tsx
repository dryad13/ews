import { PageHero } from "@/components/ui/PageHero";
import { legalNotice } from "@/content/legal";

export const metadata = { title: "Legal Notice" };

export default function LegalPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title={legalNotice.title} />
      <section className="mx-auto max-w-[900px] px-gutter py-space-xl">
        <div className="rounded-xl border border-border-hairline bg-surface-card p-space-xl font-body text-body-md text-on-surface-variant">
          <div className="mb-2 font-headline text-headline-sm text-primary">{legalNotice.company}</div>
          <div>{legalNotice.address}</div>
          <div>{legalNotice.city}</div>
          <div className="mt-space-md">Phone: {legalNotice.phone}</div>
          <div>
            Email:{" "}
            <a className="text-secondary hover:underline" href={`mailto:${legalNotice.email}`}>
              {legalNotice.email}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
