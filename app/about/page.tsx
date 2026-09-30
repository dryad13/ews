import { PageHero } from "@/components/ui/PageHero";
import { company } from "@/content/company";

export const metadata = { title: "Corporate Profile" };

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About & Profile"
        title="Corporate Profile"
        description="A trusted name in Pakistan's shipping industry and the trade corridors abroad where Pakistan cargo moves."
      />
      <section className="mx-auto max-w-[1440px] px-gutter py-space-xl">
        <div className="grid grid-cols-1 gap-gutter lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="mb-space-lg font-body text-body-lg leading-relaxed text-on-surface-variant">
              {company.intro}
            </p>
            <h2 className="mb-space-md font-headline text-headline-md text-primary">
              Commodities & Vessel Coverage
            </h2>
            <ul className="mb-space-xl space-y-3">
              {company.commodities.map((item) => (
                <li key={item} className="flex items-start gap-2 font-body text-body-md text-on-surface">
                  <span className="material-symbols-outlined mt-0.5 text-[18px] text-secondary">
                    check_circle
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mb-space-lg font-body text-body-md leading-relaxed text-on-surface-variant">
              {company.depotSummary}
            </p>
            <p className="font-body text-body-md leading-relaxed text-on-surface-variant">
              {company.cordeliaNote}
            </p>
          </div>
          <aside className="lg:col-span-4">
            <div className="rounded-xl border border-border-hairline bg-surface-card p-space-lg">
              <h3 className="mb-space-md font-headline text-headline-sm text-primary">
                Enterprise Alliances
              </h3>
              <ul className="space-y-space-md font-body text-body-sm text-on-surface-variant">
                <li>
                  <strong className="text-primary">Green Pak Shipping</strong> — Evergreen Container
                  Line agency in Pakistan
                </li>
                <li>
                  <strong className="text-primary">Global Feeder Shipping LLC</strong> — Feeder market
                  leader representation
                </li>
                <li>
                  <strong className="text-primary">Cordelia Container Line</strong> — Asia / Gulf /
                  Africa container services
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
