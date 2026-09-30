export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="w-full border-b border-border-hairline bg-abyssal-navy text-surface-container-lowest">
      <div className="mx-auto max-w-[1440px] px-gutter py-space-xl lg:py-16">
        {eyebrow && (
          <div className="mb-space-sm flex items-center gap-2 font-label text-label-sm font-semibold tracking-widest text-secondary-fixed uppercase">
            <span className="h-px w-6 bg-secondary" />
            <span>{eyebrow}</span>
          </div>
        )}
        <h1 className="max-w-4xl font-headline text-headline-lg tracking-tight text-white lg:text-[48px] lg:leading-[56px]">
          {title}
        </h1>
        {description && (
          <p className="mt-space-md max-w-3xl font-body text-body-lg text-surface-variant">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
