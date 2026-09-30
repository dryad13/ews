import type { StaffMember } from "@/content/contacts";

export function StaffCard({ person }: { person: StaffMember }) {
  return (
    <div className="rounded-xl border border-border-hairline bg-surface-card p-space-lg">
      <div className="mb-1 font-headline text-headline-sm text-primary">{person.name}</div>
      <div className="mb-space-md font-label text-label-sm tracking-wider text-secondary uppercase">
        {person.role}
      </div>
      <div className="space-y-1 font-body text-body-sm text-on-surface-variant">
        {person.tel && <div>Tel: {person.tel}</div>}
        {person.mobile && <div>Mobile: {person.mobile}</div>}
        <a className="text-secondary hover:underline" href={`mailto:${person.email}`}>
          {person.email}
        </a>
      </div>
    </div>
  );
}
