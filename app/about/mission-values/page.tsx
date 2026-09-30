import { PageHero } from "@/components/ui/PageHero";
import { mission, values } from "@/content/missionValues";

export const metadata = { title: "Mission & Values" };

export default function MissionValuesPage() {
  return (
    <>
      <PageHero
        eyebrow="About & Profile"
        title="Mission & Values"
        description="Professional excellence for principals, with an inclusive intellectual and ethical environment for our team."
      />
      <section className="mx-auto max-w-[1440px] px-gutter py-space-xl">
        <div className="mb-space-xl max-w-4xl rounded-xl border border-border-hairline bg-surface-card p-space-xl">
          <h2 className="mb-space-md font-headline text-headline-md text-primary">Mission Statement</h2>
          <p className="font-body text-body-lg leading-relaxed text-on-surface-variant">{mission}</p>
        </div>
        <h2 className="mb-space-lg font-headline text-headline-md text-primary">Our Values</h2>
        <div className="grid grid-cols-1 gap-gutter md:grid-cols-2 lg:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="rounded-xl border border-border-hairline bg-surface-card p-space-lg">
              <h3 className="mb-space-sm font-headline text-headline-sm text-primary">{v.title}</h3>
              <p className="font-body text-body-sm leading-relaxed text-on-surface-variant">{v.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
