import type { BerthRow } from "@/content/ports";

export function BerthTable({
  title,
  rows,
}: {
  title: string;
  rows: BerthRow[];
}) {
  return (
    <div className="overflow-x-auto rounded-xl border border-border-hairline bg-surface-card">
      <div className="border-b border-border-hairline px-space-md py-space-sm font-label text-label-md font-bold tracking-wider text-primary uppercase">
        {title}
      </div>
      <table className="min-w-full text-left font-body text-body-sm">
        <thead className="bg-surface-container-low font-label text-label-sm tracking-wider text-on-surface-variant uppercase">
          <tr>
            <th className="px-space-md py-3">Berth</th>
            <th className="px-space-md py-3">LOA (m)</th>
            <th className="px-space-md py-3">Beam (m)</th>
            <th className="px-space-md py-3">Draft (m)</th>
            <th className="px-space-md py-3">Remarks</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={`${row.berth}-${row.remarks}`} className="border-t border-border-hairline">
              <td className="px-space-md py-3 font-medium text-primary">{row.berth}</td>
              <td className="px-space-md py-3 text-on-surface-variant">{row.loa}</td>
              <td className="px-space-md py-3 text-on-surface-variant">{row.beam}</td>
              <td className="px-space-md py-3 text-on-surface-variant">{row.draft}</td>
              <td className="px-space-md py-3 text-on-surface-variant">{row.remarks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
