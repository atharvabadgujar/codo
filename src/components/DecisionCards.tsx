import { ArrowRight, Sparkles } from 'lucide-react'
import { decisions } from '../content'
import { Icon, tones } from './Icon'
import { Avatar } from './Avatar'

const line = [4, 9, 6, 12, 8, 15, 11, 18]

function Chart({ kind }: { kind: string }) {
  if (kind === 'line') {
    const pts = line.map((v, i) => `${(i / 7) * 96 + 2},${40 - v * 2}`).join(' ')
    return (
      <svg viewBox="0 0 100 44" className="h-12 w-24" role="img" aria-label="Rising trend line">
        <polyline points={pts} fill="none" stroke="#5B6CFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
  const color = kind === 'bars-violet' ? '#8B5CF6' : '#2DD4BF'
  const hs = kind === 'bars-violet' ? [26, 18, 30, 14, 22, 10] : [10, 16, 14, 24, 30, 36]
  return (
    <svg viewBox="0 0 100 44" className="h-12 w-24" role="img" aria-label="Bar chart">
      {hs.map((h, i) => <rect key={i} x={i * 16 + 3} y={42 - h} width="10" height={h} rx="2" fill={color} opacity={0.4 + i * 0.1} />)}
    </svg>
  )
}

function Thumb({ kind }: { kind: string }) {
  if (kind === 'line') return <Avatar name="High-value customer" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&h=200&q=70" className="h-14 w-14" />
  const sneaker = kind === 'bars-violet'
  return (
    <span className="grid h-14 w-14 place-items-center rounded-xl bg-slate-100" aria-hidden="true">
      {sneaker ? (
        <svg viewBox="0 0 48 32" className="h-8 w-10"><path d="M3 22c6 0 8-4 12-10l6 4 8 2c6 1 12 3 16 6v4H3z" fill="#94a3b8" /><path d="M3 26h42" stroke="#475569" strokeWidth="3" /></svg>
      ) : (
        <svg viewBox="0 0 48 48" className="h-9 w-9" fill="#b45309"><path d="M16 8l-8 6 3 10 5-2v18h16V22l5 2 3-10-8-6-4 4h-8z" /></svg>
      )}
    </span>
  )
}

export function DecisionCards() {
  return (
    <section id="use-cases" className="bg-white py-16 sm:py-20">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Real-world decisions</p>
            <h2 className="h2 mt-3">From signals to decisions. Across what matters.</h2>
          </div>
          <a href="#capabilities" className="btn border border-slate-200 text-brand hover:bg-slate-50">View all use cases <ArrowRight className="h-4 w-4" aria-hidden="true" /></a>
        </div>
        <div className="mt-8 grid gap-5 lg:grid-cols-3 [&>*]:min-w-0">
          {decisions.map((d) => {
            const t = tones[d.tone]
            return (
              <article key={d.key} className={`flex flex-col gap-4 rounded-2xl border p-5 ${t.card}`}>
                <p className={`flex items-center gap-2 text-sm font-semibold ${t.text}`}><Icon name={d.icon} className="h-4 w-4" />{d.label}</p>
                <div className="grid gap-4">
                  <div>
                    <h3 className="text-lg font-bold leading-snug text-navy-900">{d.title}</h3>
                    <ul className="mt-3 space-y-1.5 text-xs text-slate-600">
                      {d.signals.map((s) => <li key={s} className="flex items-center gap-2"><span className={`h-1.5 w-1.5 rounded-full ${t.chip}`} />{s}</li>)}
                    </ul>
                  </div>
                  <div className="rounded-xl bg-white/80 p-3 shadow-card">
                    <p className={`flex items-center gap-1.5 text-[11px] font-semibold ${t.text}`}><Sparkles className="h-3 w-3" aria-hidden="true" />CoDo Recommends</p>
                    <p className="mt-1 text-xs leading-relaxed text-slate-600">{d.rec}</p>
                    <a href="#capabilities" className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-brand">View Example <ArrowRight className="h-3 w-3" aria-hidden="true" /></a>
                  </div>
                </div>
                <div className="mt-auto flex items-center gap-3 rounded-xl bg-white p-3 shadow-card">
                  <Thumb kind={d.chart} />
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold leading-snug text-navy-900">{d.exampleTitle}</p>
                    <p className="text-[11px] text-slate-500">{d.exampleSub}</p>
                    <span className={`mt-1 inline-block rounded px-1.5 py-0.5 text-[10px] font-semibold ${d.badgeTone === 'red' ? 'bg-red-100 text-red-600' : 'bg-emerald-100 text-emerald-700'}`}>{d.badge}</span>
                  </div>
                  <Chart kind={d.chart} />
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
