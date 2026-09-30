import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { divisions } from "@/content/divisions";

export const metadata = { title: "Maritime Divisions" };

export default function DivisionsIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="Comprehensive Vessel Husbandry"
        title="Specialised Maritime Divisions"
        description="Tankers, break bulk, dry bulk, container feeder, Cordelia/Gadani, and off-dock depot operations."
      />
      <section className="mx-auto max-w-[1440px] px-gutter py-space-xl">
        <div className="grid grid-cols-1 gap-gutter md:grid-cols-2 lg:grid-cols-3">
          {divisions.map((d) => (
            <Link
              key={d.slug}
              href={d.href}
              className="group rounded-xl border border-border-hairline bg-surface-card p-space-lg transition-all hover:shadow-md"
            >
              <div className="mb-space-md flex h-12 w-12 items-center justify-center rounded-lg bg-surface-container-low text-primary group-hover:bg-primary group-hover:text-on-primary">
                <span className="material-symbols-outlined text-[26px]">{d.icon}</span>
              </div>
              <div className="mb-1 font-label text-label-sm tracking-wider text-outline uppercase">
                {d.eyebrow}
              </div>
              <h2 className="mb-space-sm font-headline text-headline-sm text-primary">{d.title}</h2>
              <p className="font-body text-body-sm text-on-surface-variant">{d.summary}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
