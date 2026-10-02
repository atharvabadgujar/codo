import { ArrowRight, ArrowDown } from 'lucide-react'
import { internalData, externalSignals } from '../content'
import { Icon } from './Icon'

function Column({ title, items }: { title: string; items: { icon: string; label: string }[] }) {
  return (
    <div>
      <h3 className="mb-3 text-sm font-semibold text-navy-900">{title}</h3>
      <ul className="space-y-2">
        {items.map((i) => (
          <li key={i.label} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm shadow-card">
            <span className="grid h-7 w-7 place-items-center rounded-md bg-indigo-50 text-brand"><Icon name={i.icon} className="h-4 w-4" /></span>
            {i.label}
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Solution() {
  return (
    <section id="solution" className="bg-slate-50 py-16 sm:py-20">
      <div className="container-x grid items-center gap-10 lg:grid-cols-[1fr_1.7fr]">
        <div>
          <p className="eyebrow">The solution</p>
          <h2 className="h2 mt-3">CoDo — Your AI-powered Decision Intelligence Layer.</h2>
          <p className="mt-4 max-w-md leading-relaxed text-slate-600">
            CoDo brings together your internal retail data with external signals, finds meaningful patterns and delivers clear, explainable recommendations — so your teams can make faster, smarter and more profitable decisions.
          </p>
        </div>
        <div className="grid items-center gap-5 md:grid-cols-[1fr_auto_1fr]" aria-label="How CoDo works">
          <Column title="Internal Retail Data" items={internalData} />
          <div className="flex flex-col items-center gap-3 md:w-48">
            <ArrowRight className="hidden h-6 w-6 text-brand md:block" aria-hidden="true" />
            <div className="w-full rounded-2xl bg-navy-900 p-6 text-center text-white shadow-glow">
              <p className="text-lg font-bold leading-snug">CoDo Decision Intelligence Layer</p>
            </div>
            <ArrowDown className="h-5 w-5 text-brand" aria-hidden="true" />
            <div className="w-full rounded-xl border border-slate-200 bg-white p-3 text-center shadow-card">
              <p className="text-sm font-semibold text-navy-900">AI Models</p>
              <p className="text-xs text-slate-500">Patterns | Predictions | Prioritization | Explainability</p>
            </div>
          </div>
          <Column title="External Signals" items={externalSignals} />
        </div>
      </div>
    </section>
  )
}
