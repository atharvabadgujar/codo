import { motion } from 'framer-motion'
import { capabilities, impact } from '../content'
import { Section } from './Section'

const capIcons = [
  // Recommends - bolt
  <svg key="1" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>,
  // Business signals - chart
  <svg key="2" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
  </svg>,
  // AskCoDo - chat
  <svg key="3" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
  </svg>,
  // Memory - brain
  <svg key="4" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
  </svg>,
]

const impactColors = [
  { value: 'text-good', bg: 'bg-good/5', border: 'border-good/20' },
  { value: 'text-bad', bg: 'bg-bad/5', border: 'border-bad/20' },
  { value: 'text-accent', bg: 'bg-accent/5', border: 'border-accent/20' },
  { value: 'text-warning', bg: 'bg-warning/5', border: 'border-warning/20' },
]

export function Capabilities() {
  return (
    <>
      {/* Capabilities */}
      <Section
        id="product"
        label="Key product capabilities"
        title={
          <>
            From insights to action.{' '}
            <br className="hidden sm:block" />
            Everything your retail teams need.
          </>
        }
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.45, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="card group flex flex-col gap-4 hover:shadow-card-hover"
            >
              <div className="w-fit rounded-lg border border-accent/20 bg-accent/5 p-2.5 text-accent">
                {capIcons[i]}
              </div>
              <div>
                <h3 className="h3-card mb-1.5">{c.title}</h3>
                <p className="text-sm text-muted leading-6">{c.body}</p>
              </div>
              <div className="mt-auto">
                <a href="#" className="inline-flex items-center gap-1 text-xs font-semibold text-accent hover:gap-2 transition-all">
                  Learn more
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Impact / Stats */}
      <Section
        label="Business impact (illustrative)"
        title="Smarter decisions. Measurable results."
        intro="Typical performance ranges from retailers using AI-powered decision intelligence."
        bg="surface"
      >
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {impact.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`card border ${impactColors[i].border} ${impactColors[i].bg}`}
            >
              <p className={`font-serif text-3xl font-bold tabular-nums sm:text-4xl ${impactColors[i].value}`}>
                {item.value}
              </p>
              <p className="mt-2 text-sm font-medium text-ink">{item.label}</p>
              <p className="mt-0.5 text-xs text-muted">(typical)</p>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  )
}
