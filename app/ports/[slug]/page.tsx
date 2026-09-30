import { notFound } from "next/navigation";
import { BerthTable } from "@/components/ports/BerthTable";
import { PageHero } from "@/components/ui/PageHero";
import { getPort, ports } from "@/content/ports";

export function generateStaticParams() {
  return ports.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then((p) => {
    const port = getPort(p.slug);
    return { title: port?.title ?? "Port Information" };
  });
}

export default async function PortPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const port = getPort(slug);
  if (!port) notFound();

  return (
    <>
      <PageHero eyebrow={port.code} title={port.title} description={port.summary} />
      <section className="mx-auto max-w-[1440px] space-y-space-xl px-gutter py-space-xl">
        <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">
          {port.stats.map((s) => (
            <div key={s.label} className="rounded-xl border border-border-hairline bg-surface-card p-space-lg">
              <div className="mb-1 font-label text-label-sm tracking-wider text-outline uppercase">
                {s.label}
              </div>
              <div className="font-headline text-headline-sm text-primary">{s.value}</div>
            </div>
          ))}
        </div>

        {port.parameters && (
          <div className="rounded-xl border border-border-hairline bg-surface-card p-space-lg">
            <h2 className="mb-space-md font-headline text-headline-md text-primary">
              Port Parameters
            </h2>
            <div className="grid grid-cols-1 gap-space-sm md:grid-cols-2">
              {port.parameters.map((p) => (
                <div
                  key={p.label}
                  className="flex justify-between gap-4 border-b border-border-hairline py-2 font-body text-body-sm"
                >
                  <span className="text-on-surface-variant">{p.label}</span>
                  <span className="font-medium text-primary">{p.value}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {port.dryBerthsIntro && (
          <p className="font-body text-body-md text-on-surface-variant">{port.dryBerthsIntro}</p>
        )}
        {port.dryBerths && <BerthTable title="Dry Berths" rows={port.dryBerths} />}
        {port.oilBerthsIntro && (
          <h2 className="font-headline text-headline-md text-primary">{port.oilBerthsIntro}</h2>
        )}
        {port.oilBerths && <BerthTable title="Oil & Liquid Berths" rows={port.oilBerths} />}

        {port.workingHours && (
          <div>
            <h2 className="mb-space-md font-headline text-headline-md text-primary">
              Working Hours
            </h2>
            <ul className="space-y-2 font-body text-body-md text-on-surface-variant">
              {port.workingHours.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>
        )}

        {port.notes && (
          <div>
            <h2 className="mb-space-md font-headline text-headline-md text-primary">Notes</h2>
            <ul className="space-y-3 font-body text-body-sm text-on-surface-variant">
              {port.notes.map((n) => (
                <li key={n} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                  <span>{n}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {port.general && (
          <div>
            <h2 className="mb-space-md font-headline text-headline-md text-primary">
              General Information
            </h2>
            <ul className="space-y-3 font-body text-body-md text-on-surface-variant">
              {port.general.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
          </div>
        )}

        {port.authority && (
          <div className="rounded-xl border border-border-hairline bg-surface-card p-space-lg">
            <h2 className="mb-space-md font-headline text-headline-md text-primary">
              Port Authority Contacts
            </h2>
            <div className="space-y-1 font-body text-body-sm text-on-surface-variant">
              <div className="font-medium text-primary">{port.authority.name}</div>
              <div>{port.authority.address}</div>
              <div>Tel: {port.authority.tel}</div>
              {port.authority.email && (
                <div>
                  Email:{" "}
                  <a className="text-secondary hover:underline" href={`mailto:${port.authority.email}`}>
                    {port.authority.email}
                  </a>
                </div>
              )}
              {port.authority.website && (
                <div>
                  Website:{" "}
                  <a
                    className="text-secondary hover:underline"
                    href={port.authority.website}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {port.authority.website}
                  </a>
                </div>
              )}
              {port.authority.pic && <div>PIC: {port.authority.pic}</div>}
            </div>
          </div>
        )}
      </section>
    </>
  );
}
