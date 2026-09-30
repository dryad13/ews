import { PageHero } from "@/components/ui/PageHero";
import { qualityPolicy } from "@/content/missionValues";

export const metadata = { title: "Quality & HSE Policy" };

export default function QualityPage() {
  return (
    <>
      <PageHero
        eyebrow="About & Profile"
        title="Quality & HSE Policy"
        description="Committed to exceeding customer requirements while complying with applicable codes, standards, and regulations."
      />
      <section className="mx-auto max-w-[900px] px-gutter py-space-xl">
        <div className="rounded-xl border border-border-hairline bg-surface-card p-space-xl">
          <h2 className="mb-space-md font-headline text-headline-md text-primary">Quality Policy</h2>
          <p className="font-body text-body-lg leading-relaxed text-on-surface-variant">
            {qualityPolicy}
          </p>
        </div>
      </section>
    </>
  );
}
