import { PageHero } from "@/components/ui/PageHero";
import { privacySections } from "@/content/legal";

export const metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="How East Wind Shipping collects, uses, and protects personal information on this website."
      />
      <section className="mx-auto max-w-[900px] space-y-space-lg px-gutter py-space-xl">
        {privacySections.map((section) => (
          <div key={section.title}>
            <h2 className="mb-space-sm font-headline text-headline-sm text-primary">
              {section.title}
            </h2>
            <p className="font-body text-body-md leading-relaxed text-on-surface-variant">
              {section.body}
            </p>
          </div>
        ))}
      </section>
    </>
  );
}
