export default function DataTable({ title, data, columns }: { title: string; data: any[]; columns: { key: string; label: string }[] }) {
  return (
    <div className="glass rounded-2xl overflow-hidden animate-fade-in">
      <div className="px-6 py-4 border-b border-white/5 bg-white/[0.02]">
        <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-brand">{title}</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm border-collapse">
          <thead>
            <tr className="border-b border-white/5 bg-white/[0.01]">
              {columns.map(col => (
                <th key={col.key} className="px-6 py-4 font-bold text-muted-foreground uppercase tracking-wider text-[10px]">
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {data.map((row, i) => (
              <tr key={i} className="group hover:bg-white/[0.02] transition-colors">
                {columns.map(col => (
                  <td key={col.key} className="px-6 py-4 text-white font-medium">
                    {row[col.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
