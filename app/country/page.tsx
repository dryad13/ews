import { PageHero } from "@/components/ui/PageHero";
import { country } from "@/content/country";

export const metadata = { title: "Pakistan Country Profile" };

export default function CountryPage() {
  return (
    <>
      <PageHero
        eyebrow="Country Profile"
        title={country.title}
        description="Geography, economy, and maritime gateways that frame Pakistan’s role in regional trade."
      />
      <section className="mx-auto max-w-[1440px] px-gutter py-space-xl">
        <div className="grid grid-cols-1 gap-gutter lg:grid-cols-12">
          <article className="space-y-space-md lg:col-span-8">
            {country.paragraphs.map((p) => (
              <p key={p.slice(0, 40)} className="font-body text-body-md leading-relaxed text-on-surface-variant">
                {p}
              </p>
            ))}
          </article>
          <aside className="space-y-space-lg lg:col-span-4">
            <div className="rounded-xl border border-border-hairline bg-surface-card p-space-lg">
              <h2 className="mb-space-md font-headline text-headline-sm text-primary">
                Pakistan Business Links
              </h2>
              <ul className="space-y-3">
                {country.businessLinks.map((link) => (
                  <li key={link.url}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="font-body text-body-sm text-secondary hover:underline"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-border-hairline bg-surface-container-low p-space-lg">
              <h2 className="mb-space-sm font-headline text-headline-sm text-primary">Pakistan Map</h2>
              <p className="font-body text-body-sm text-on-surface-variant">{country.mapNote}</p>
              <div className="mt-space-md flex aspect-[4/3] items-center justify-center rounded-lg border border-dashed border-border-subtle bg-surface-card font-label text-label-sm tracking-wider text-outline uppercase">
                Arabian Sea • Karachi • Qasim • Gwadar • Gadani
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
