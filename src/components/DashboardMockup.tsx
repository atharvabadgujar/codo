import { Search, ArrowUpRight, Layers, Users, Boxes, Megaphone, Cog, LayoutDashboard, Sparkles, Radar, Brain } from 'lucide-react'

const side = [
  [LayoutDashboard, 'Overview'], [Sparkles, 'AskCoDo'], [Brain, 'Recommends'], [Radar, 'Business Signals'],
  [Users, 'Customers'], [Layers, 'Products'], [Boxes, 'Inventory'], [Megaphone, 'Marketing'], [Cog, 'Operations'],
] as const

const tiles = [
  { k: 'Demand Spike', v: '+32%', s: 'Lightweight jackets (Next 3 weeks)', c: 'text-teal-accent' },
  { k: 'At-Risk Stock', v: '124', s: 'Slow moving SKUs > 60 days', c: 'text-orange-300' },
  { k: 'High-Value Customers', v: '+18%', s: 'Likely to purchase next 30 days', c: 'text-teal-accent' },
  { k: 'Weather Impact', v: '↑ Higher demand', s: 'Next 2 weeks: Bengaluru, Pune', c: 'text-sky-300' },
]

export function DashboardMockup() {
  return (
    <div className="relative" role="img" aria-label="CoDo dashboard preview showing business signals and a recommendation">
      <div className="absolute -inset-6 rounded-[2rem] bg-brand/20 blur-3xl" aria-hidden="true" />
      <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-navy-800 shadow-glow">
        <div className="flex">
          <aside className="hidden w-36 shrink-0 border-r border-white/10 bg-navy-900/60 p-3 sm:block" aria-hidden="true">
            <div className="mb-3 text-sm font-extrabold text-white">Co<span className="text-gradient">Do</span></div>
            <ul className="space-y-0.5">
              {side.map(([I, l], i) => (
                <li key={l} className={`flex items-center gap-2 rounded-md px-2 py-1.5 text-[10px] ${i === 0 ? 'bg-brand/25 text-white' : 'text-white/55'}`}>
                  <I className="h-3 w-3" />{l}
                </li>
              ))}
            </ul>
          </aside>
          <div className="min-w-0 flex-1 p-4" aria-hidden="true">
            <div className="mb-3 flex items-center gap-2 text-[10px] font-semibold text-brand-soft"><Sparkles className="h-3 w-3" />AskCoDo</div>
            <div className="mb-4 flex items-center justify-between rounded-lg border border-white/15 bg-navy-900/70 px-3 py-2 text-[11px] text-white/45">
              What should we uncover today?
              <span className="grid h-6 w-6 place-items-center rounded-full bg-brand text-white"><Search className="h-3 w-3" /></span>
            </div>
            <p className="mb-2 text-[10px] font-semibold text-white/80">Today’s Business Signals</p>
            <div className="mb-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {tiles.map((t) => (
                <div key={t.k} className="rounded-lg border border-white/10 bg-navy-900/60 p-2.5">
                  <p className="text-[9px] text-white/55">{t.k}</p>
                  <p className={`text-base font-bold ${t.c}`}>{t.v}</p>
                  <p className="text-[8px] leading-tight text-white/40">{t.s}</p>
                </div>
              ))}
            </div>
            <p className="mb-2 text-[10px] font-semibold text-white/80">CoDo Recommends</p>
            <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-navy-900/60 p-3">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-amber-700 to-amber-900">
                <svg viewBox="0 0 48 48" className="h-9 w-9" fill="none" stroke="#fde68a" strokeWidth="2.5" strokeLinejoin="round"><path d="M16 8l-8 6 3 10 5-2v18h16V22l5 2 3-10-8-6-4 4h-8z" /></svg>
              </div>
              <div className="min-w-0 flex-1">
                <span className="rounded bg-red-500/20 px-1.5 py-0.5 text-[8px] font-semibold text-red-300">High Priority</span>
                <p className="mt-1 text-[11px] font-semibold leading-snug text-white">Increase stock of lightweight jackets in West &amp; South regions</p>
              </div>
              <div className="hidden shrink-0 text-right sm:block">
                <p className="text-[8px] text-white/50">Potential impact</p>
                <p className="text-sm font-bold text-teal-accent">+ ₹24L</p>
                <span className="mt-1 inline-flex items-center gap-1 rounded bg-brand px-2 py-1 text-[9px] font-semibold text-white">Take Action <ArrowUpRight className="h-2.5 w-2.5" /></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
