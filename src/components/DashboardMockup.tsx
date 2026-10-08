import { motion } from 'framer-motion'

const tiles = [
  { k: 'Demand spike', v: '+32%', s: 'Lightweight jackets, next 3 weeks', color: 'text-good' },
  { k: 'At-risk stock', v: '124', s: 'Slow-moving SKUs over 60 days', color: 'text-bad' },
  { k: 'High-value customers', v: '+18%', s: 'Likely to purchase, next 30 days', color: 'text-good' },
  { k: 'Weather impact', v: 'Higher', s: 'Demand, next 2 weeks: Bengaluru, Pune', color: 'text-warning' },
]

const menu = ['Overview', 'AskCoDo', 'Recommends', 'Signals', 'Customers', 'Products', 'Inventory', 'Marketing']

export function DashboardMockup() {
  return (
    <div className="relative w-full rounded-xl overflow-hidden shadow-dashboard bg-[#13161E] border border-white/10">
      {/* Title bar */}
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/10 bg-[#0E1117]">
        <span className="h-3 w-3 rounded-full bg-red-500/80" />
        <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
        <span className="h-3 w-3 rounded-full bg-green-500/80" />
        <span className="mx-auto text-xs text-white/40 font-medium">CoDo — AI for Retail</span>
      </div>

      <div className="flex min-h-0">
        {/* Sidebar */}
        <aside className="hidden w-36 shrink-0 border-r border-white/10 bg-[#0E1117] p-3 sm:flex sm:flex-col">
          <div className="flex items-center gap-2 mb-5 px-1">
            <span className="flex h-6 w-6 items-center justify-center rounded bg-accent text-white text-[10px] font-bold">C</span>
            <span className="text-white font-semibold text-sm">CoDo</span>
          </div>
          <ul className="space-y-0.5">
            {menu.map((m, i) => (
              <li
                key={m}
                className={`rounded-md px-2.5 py-1.5 text-[11px] cursor-pointer ${
                  i === 0
                    ? 'bg-accent/20 text-accent font-semibold'
                    : 'text-white/40 hover:text-white/70'
                }`}
              >
                {m}
              </li>
            ))}
          </ul>
        </aside>

        {/* Main panel */}
        <div className="flex-1 p-4 min-w-0">
          {/* Search bar */}
          <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 mb-4">
            <svg className="h-3.5 w-3.5 shrink-0 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span className="text-[11px] text-white/30">Ask CoDo: what should we uncover today?</span>
          </div>

          {/* Tiles */}
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-white/40">Business Signals</p>
          <div className="mb-4 grid grid-cols-2 gap-2">
            {tiles.map((t, i) => (
              <motion.div
                key={t.k}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.08 }}
                className="rounded-lg border border-white/10 bg-white/5 p-3"
              >
                <p className="text-[10px] text-white/50 mb-1">{t.k}</p>
                <p className={`font-serif text-xl font-bold tabular-nums ${t.color}`}>{t.v}</p>
                <p className="mt-0.5 text-[9px] text-white/40 leading-tight">{t.s}</p>
              </motion.div>
            ))}
          </div>

          {/* Recommendation */}
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-white/40">CoDo Recommends</p>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="rounded-lg border border-accent/30 bg-accent/10 p-3 relative overflow-hidden"
          >
            <div className="absolute left-0 inset-y-0 w-[3px] bg-accent rounded-l-lg" />
            <div className="pl-3 flex items-start justify-between gap-3">
              <div className="min-w-0">
                <span className="inline-flex items-center gap-1 rounded-full bg-warning/20 px-2 py-0.5 text-[10px] font-semibold text-warning mb-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-warning" />
                  High priority
                </span>
                <p className="text-[11px] font-semibold text-white leading-snug">
                  Increase stock of lightweight jackets in West &amp; South regions
                </p>
              </div>
              <div className="shrink-0 text-right rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                <p className="text-[9px] text-white/40 mb-0.5">Impact</p>
                <p className="text-sm font-bold text-good">+₹24L</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
