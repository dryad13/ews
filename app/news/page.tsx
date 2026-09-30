import { PageHero } from "@/components/ui/PageHero";
import { news } from "@/content/legal";

export const metadata = { title: "News & Updates" };

export default function NewsPage() {
  return (
    <>
      <PageHero eyebrow="Advisories" title={news.title} description={news.body} />
      <section className="mx-auto max-w-[900px] px-gutter py-space-xl">
        <div className="rounded-xl border border-border-hairline bg-surface-card p-space-xl">
          <p className="mb-space-lg font-body text-body-md text-on-surface-variant">{news.body}</p>
          <a
            href={news.externalUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded bg-abyssal-navy px-6 py-3 font-body text-body-sm font-semibold text-on-primary transition-colors hover:bg-secondary"
          >
            {news.externalLabel}
            <span className="material-symbols-outlined text-[18px]">open_in_new</span>
          </a>
        </div>
      </section>
    </>
  );
}
