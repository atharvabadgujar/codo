import { internalData, externalSignals } from '../content'
import { Section } from './Section'

function List({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="min-w-0">
      <h3 className="mb-3 text-sm font-medium text-ink">{title}</h3>
      <ul className="divide-y divide-line border-y border-line text-sm">
        {items.map((i) => <li key={i} className="py-2.5">{i}</li>)}
      </ul>
    </div>
  )
}

export function Solution() {
  return (
    <Section id="solution" title="CoDo is the decision intelligence layer for your retail data." intro="CoDo brings your internal data together with external signals, finds meaningful patterns and delivers clear, explainable recommendations, so your teams can decide faster and more profitably.">
      <div className="grid items-center gap-6 md:grid-cols-[1fr_auto_1fr]" role="group" aria-label="How CoDo works: internal data and external signals feed the CoDo layer">
        <List title="Internal retail data" items={internalData} />
        <div className="rounded-lg border border-ink bg-ink p-6 text-center text-white md:w-44">
          <p className="font-serif text-lg font-semibold leading-snug">CoDo decision intelligence layer</p>
          <p className="mt-3 border-t border-white/25 pt-3 text-xs text-white/75">AI models: patterns, predictions, prioritization, explainability</p>
        </div>
        <List title="External signals" items={externalSignals} />
      </div>
    </Section>
  )
}
