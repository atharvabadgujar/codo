import { capabilities, impact } from '../content'
import { Section } from './Section'

export function Capabilities() {
  return (
    <>
      <Section id="product" title="From insight to action. Everything your retail teams need.">
        <dl className="grid divide-y divide-line border-y border-line sm:grid-cols-2 sm:divide-y-0">
          {capabilities.map((c, i) => (
            <div key={c.title} className={`py-6 sm:px-6 ${i % 2 === 0 ? 'sm:border-r sm:border-line sm:pl-0' : 'sm:pr-0'} ${i > 1 ? 'sm:border-t sm:border-line' : ''}`}>
              <dt className="font-serif text-xl font-semibold text-ink">{c.title}</dt>
              <dd className="mt-2 text-sm">{c.body}</dd>
            </div>
          ))}
        </dl>
      </Section>
      <Section title="Smarter decisions, measurable results." intro="Typical ranges, shown for illustration.">
        <dl className="grid grid-cols-2 border-y border-line">
          {impact.map((i, n) => (
            <div key={i.label} className={`py-6 ${n % 2 === 0 ? 'border-r border-line pr-6' : 'pl-6'} ${n > 1 ? 'border-t border-line' : ''}`}>
              <dd className="font-serif text-3xl font-semibold tabular-nums text-ink">{i.value}</dd>
              <dt className="mt-1 text-sm">{i.label}</dt>
            </div>
          ))}
        </dl>
      </Section>
    </>
  )
}
