import type { BerthRow } from "@/content/ports";

export function BerthTable({
  title,
  rows,
}: {
  title: string;
  rows: BerthRow[];
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-border-hairline bg-surface-card shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border-hairline px-space-md py-space-sm">
        <div className="font-label text-label-md font-bold tracking-wider text-primary uppercase">
          {title}
        </div>
        <div className="flex items-center gap-1 font-label text-[11px] font-medium text-outline sm:hidden">
          <span className="material-symbols-outlined text-[14px]">swipe_left</span>
          <span>Swipe horizontally</span>
        </div>
      </div>
      <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-outline/20">
        <table className="min-w-[640px] w-full text-left font-body text-body-sm">
          <thead className="bg-surface-container-low font-label text-label-sm tracking-wider text-on-surface-variant uppercase">
            <tr>
              <th className="px-space-md py-3 font-semibold">Berth</th>
              <th className="px-space-md py-3 font-semibold">LOA (m)</th>
              <th className="px-space-md py-3 font-semibold">Beam (m)</th>
              <th className="px-space-md py-3 font-semibold">Draft (m)</th>
              <th className="px-space-md py-3 font-semibold">Remarks & Specs</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border-hairline">
            {rows.map((row, idx) => (
              <tr
                key={`${row.berth}-${row.remarks}`}
                className={`transition-colors hover:bg-surface-container-lowest/60 ${
                  idx % 2 === 1 ? "bg-surface-container-low/30" : ""
                }`}
              >
                <td className="px-space-md py-3.5 font-headline text-[14px] font-bold text-primary">
                  {row.berth}
                </td>
                <td className="px-space-md py-3.5 font-mono text-[13px] text-on-surface">
                  {row.loa}
                </td>
                <td className="px-space-md py-3.5 font-mono text-[13px] text-on-surface-variant">
                  {row.beam}
                </td>
                <td className="px-space-md py-3.5 font-mono text-[13px]">
                  <span className="inline-block rounded bg-secondary/10 px-2 py-0.5 font-semibold text-secondary">
                    {row.draft}m
                  </span>
                </td>
                <td className="px-space-md py-3.5 text-on-surface-variant leading-relaxed">
                  {row.remarks}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
