import { motion } from 'framer-motion'
import { decisions } from '../content'
import { Section } from './Section'

export function DecisionCards() {
  return (
    <Section
      id="decisions"
      label="Real-world decisions"
      title="From signals to decisions. Across what matters."
      bg="surface"
    >
      <div className="grid gap-5 md:grid-cols-3">
        {decisions.map((d, i) => (
          <motion.article
            key={d.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="card flex flex-col gap-5 hover:shadow-card-hover transition-shadow"
          >
            {/* Label */}
            <span className="text-xs font-semibold uppercase tracking-wider text-muted">{d.label}</span>

            {/* Title */}
            <h3 className="text-base font-semibold text-ink leading-snug">{d.title}</h3>

            {/* Signals */}
            <ul className="space-y-1.5 flex-1">
              {d.signals.map((s) => (
                <li key={s} className="flex items-start gap-2 text-sm text-muted">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-line" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {s}
                </li>
              ))}
            </ul>

            {/* Recommendation box */}
            <div className="rounded-lg border border-accent/20 bg-accent/5 p-3.5">
              <p className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-accent">
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                CoDo Recommends
              </p>
              <p className="text-xs text-ink leading-relaxed">{d.rec}</p>
            </div>

            {/* Expected business impact */}
            <div className="mt-auto flex items-center justify-between gap-3 rounded-lg border border-line bg-white p-3.5">
              <div className="min-w-0">
                <p className="font-serif text-xl font-bold tabular-nums text-ink">{d.impact.value}</p>
                <p className="text-xs text-muted">{d.impact.note}</p>
              </div>
              <span
                className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold ${
                  d.impact.tone === 'bad' ? 'bg-bad/10 text-bad' : 'bg-good/10 text-good'
                }`}
              >
                {d.impact.chip}
              </span>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}
