const tiles = [
  { k: 'Demand spike', v: '+32%', s: 'Lightweight jackets, next 3 weeks' },
  { k: 'At-risk stock', v: '124', s: 'Slow-moving SKUs over 60 days' },
  { k: 'High-value customers', v: '+18%', s: 'Likely to purchase, next 30 days' },
  { k: 'Weather impact', v: 'Higher', s: 'Demand, next 2 weeks: Bengaluru, Pune' },
]
const menu = ['Overview', 'AskCoDo', 'Recommends', 'Business signals', 'Customers', 'Products', 'Inventory', 'Marketing', 'Operations']

// Flat, bordered product panel. Illustrative data only.
export function DashboardMockup() {
  return (
    <figure className="min-w-0" role="img" aria-label="CoDo dashboard preview with business signals and one recommendation. Illustrative data.">
      <div className="flex overflow-hidden rounded-lg border border-ink/25 bg-white text-ink" aria-hidden="true">
        <aside className="hidden w-36 shrink-0 border-r border-line bg-surface p-3 sm:block">
          <p className="mb-3 font-serif text-base font-semibold">CoDo</p>
          <ul className="space-y-0.5 text-[11px]">
            {menu.map((m, i) => (
              <li key={m} className={`rounded px-2 py-1.5 ${i === 0 ? 'bg-white font-medium text-ink ring-1 ring-line' : 'text-muted'}`}>{m}</li>
            ))}
          </ul>
        </aside>
        <div className="min-w-0 flex-1 p-4">
          <div className="mb-4 flex items-center justify-between rounded border border-line px-3 py-2 text-xs text-muted">
            <span>Ask CoDo: what should we uncover today?</span>
          </div>
          <p className="mb-2 text-xs font-medium">Today’s business signals</p>
          <div className="mb-4 grid grid-cols-2 gap-px overflow-hidden rounded border border-line bg-line">
            {tiles.map((t) => (
              <div key={t.k} className="bg-white p-3">
                <p className="text-[11px] text-muted">{t.k}</p>
                <p className="font-serif text-xl font-semibold tabular-nums">{t.v}</p>
                <p className="text-[10px] leading-tight text-muted">{t.s}</p>
              </div>
            ))}
          </div>
          <p className="mb-2 text-xs font-medium">CoDo recommends</p>
          <div className="flex items-center justify-between gap-3 rounded border border-line p-3">
            <div className="min-w-0">
              <span className="rounded-sm border border-bad/40 px-1.5 py-0.5 text-[10px] font-medium text-bad">High priority</span>
              <p className="mt-1.5 text-xs font-medium leading-snug">Increase stock of lightweight jackets in West and South regions</p>
              <p className="mt-1 text-[10px] text-muted">Rising rainfall and cooler temperatures expected next 2 weeks.</p>
            </div>
            <div className="shrink-0 text-right">
              <p className="text-[10px] text-muted">Potential impact</p>
              <p className="font-serif text-lg font-semibold tabular-nums text-good">+₹24L</p>
            </div>
          </div>
        </div>
      </div>
      <figcaption className="mt-2 text-xs text-muted">Illustrative data.</figcaption>
    </figure>
  )
}
