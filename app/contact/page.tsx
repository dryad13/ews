import { ContactBlock } from "@/components/home/ContactBlock";
import { StaffCard } from "@/components/contact/StaffCard";
import { PageHero } from "@/components/ui/PageHero";
import { hq, leadership } from "@/content/contacts";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Head Office"
        title="Contact East Wind Shipping"
        description={`${hq.addressLines.join(", ")} · PABX ${hq.pabx}`}
      />
      <section className="mx-auto max-w-[1440px] px-gutter py-space-xl">
        <div className="mb-space-xl grid grid-cols-1 items-start gap-gutter lg:grid-cols-12">
          <div className="rounded-xl border border-border-hairline bg-surface-card p-space-lg lg:col-span-5">
            <div className="flex flex-col gap-space-lg sm:flex-row sm:items-start">
              <div className="min-w-0 flex-1">
                <h2 className="mb-space-md font-headline text-headline-sm text-primary">
                  Headquarters
                </h2>
                <div className="space-y-1 font-body text-body-sm text-on-surface-variant">
                  <div className="font-medium text-primary">{hq.name}</div>
                  {hq.addressLines.map((line) => (
                    <div key={line}>{line}</div>
                  ))}
                  <div className="pt-2">PABX: {hq.pabx}</div>
                  <div>Fax: {hq.fax}</div>
                  <div>
                    Email:{" "}
                    <a className="text-secondary hover:underline" href={`mailto:${hq.email}`}>
                      {hq.email}
                    </a>
                  </div>
                  <div>Website: {hq.website}</div>
                </div>
              </div>
              {/* Legacy contact page graphic: eco maritime emblem */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/contactbg.png"
                alt="East Wind Shipping: sustainable maritime operations"
                className="mx-auto h-auto w-[180px] shrink-0 object-contain sm:mx-0 sm:w-[200px]"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-gutter sm:grid-cols-2 lg:col-span-7">
            {leadership.map((person) => (
              <StaffCard key={`${person.name}-${person.role}`} person={person} />
            ))}
          </div>
        </div>
      </section>
      <ContactBlock />
    </>
  );
}
