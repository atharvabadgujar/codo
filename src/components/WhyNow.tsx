import { whyNow } from '../content'
import { Section } from './Section'

export function WhyNow() {
  return (
    <Section id="why" title="Three forces are creating the opportunity." intro="Richer data, new AI capabilities and growing complexity are making decision intelligence essential for modern retailers.">
      <ol className="divide-y divide-line border-y border-line">
        {whyNow.map((w) => (
          <li key={w.title} className="grid gap-2 py-6 sm:grid-cols-[1fr_1.6fr] sm:gap-8">
            <h3 className="font-serif text-xl font-semibold">{w.title}</h3>
            <p>{w.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
