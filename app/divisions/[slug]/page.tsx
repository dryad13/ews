import { notFound } from "next/navigation";
import { StaffCard } from "@/components/contact/StaffCard";
import { PageHero } from "@/components/ui/PageHero";
import { getDivision } from "@/content/divisions";

const slugs = [
  "tankers",
  "break-bulk",
  "dry-bulk",
  "container-feeder",
  "cordelia-gadani",
  "container-depot",
] as const;

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then((p) => {
    const d = getDivision(p.slug);
    return { title: d?.title ?? "Division" };
  });
}

export default async function DivisionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const division = getDivision(slug);
  if (!division) notFound();

  return (
    <>
      <PageHero eyebrow={division.eyebrow} title={division.title} description={division.summary} />
      <section className="mx-auto max-w-[1440px] px-gutter py-space-xl">
        <div className="mb-space-xl grid grid-cols-1 gap-gutter lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="mb-space-md font-headline text-headline-md text-primary">
              Service Coverage
            </h2>
            <ul className="mb-space-lg space-y-2">
              {division.bullets.map((b) => (
                <li key={b} className="flex items-center gap-2 font-body text-body-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                  {b}
                </li>
              ))}
            </ul>
            <p className="font-label text-label-sm tracking-wider text-outline uppercase">
              {division.footerNote}
            </p>
            {division.website && (
              <a
                href={division.website}
                target="_blank"
                rel="noreferrer"
                className="mt-space-md inline-flex font-body text-body-sm font-semibold text-secondary hover:underline"
              >
                Visit partner website →
              </a>
            )}
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-xl bg-surface-container-low p-space-lg">
              <div className="mb-2 font-label text-label-sm font-bold tracking-wider text-secondary uppercase">
                Operations
              </div>
              <p className="font-body text-body-sm text-on-surface-variant">
                For commercial and operational inquiries related to this division, contact the staff
                listed below or use the headquarters inquiry form.
              </p>
            </div>
          </div>
        </div>

        {division.staff && division.staff.length > 0 && (
          <>
            <h2 className="mb-space-lg font-headline text-headline-md text-primary">
              Division Contacts
            </h2>
            <div className="grid grid-cols-1 gap-gutter md:grid-cols-2 lg:grid-cols-3">
              {division.staff.map((person) => (
                <StaffCard key={`${person.name}-${person.email}`} person={person} />
              ))}
            </div>
          </>
        )}
      </section>
    </>
  );
}
