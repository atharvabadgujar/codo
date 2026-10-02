import { decisions } from '../content'
import { Section } from './Section'

export function DecisionCards() {
  return (
    <Section id="use-cases" title="From signals to decisions, across what matters.">
      <div className="divide-y divide-line border-y border-line">
        {decisions.map((d) => (
          <article key={d.label} className="grid gap-6 py-8 first:pt-6 md:grid-cols-2 md:gap-8">
            <div className="min-w-0">
              <p className="text-sm text-muted">{d.label}</p>
              <h3 className="mt-1 font-serif text-xl font-semibold leading-snug">{d.title}</h3>
              <ul className="mt-4 list-disc space-y-1 pl-5 text-sm marker:text-line">
                {d.signals.map((s) => <li key={s}>{s}</li>)}
              </ul>
            </div>
            <div className="min-w-0 space-y-4">
              <div>
                <p className="text-sm font-medium text-ink">CoDo recommends</p>
                <p className="mt-1 text-sm">{d.rec}</p>
              </div>
              <dl className="flex items-center justify-between gap-4 rounded border border-line p-3 text-sm">
                <div className="min-w-0">
                  <dt className="font-medium text-ink">{d.example.name}</dt>
                  <dd className="text-xs text-muted">{d.example.detail}</dd>
                </div>
                <dd className={`shrink-0 rounded-sm border px-2 py-0.5 text-xs font-medium ${d.example.bad ? 'border-bad/40 text-bad' : 'border-good/40 text-good'}`}>{d.example.status}</dd>
              </dl>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
