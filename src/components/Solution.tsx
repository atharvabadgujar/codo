import { motion } from 'framer-motion'
import { internalData, externalSignals } from '../content'
import { Section } from './Section'

function DataList({ title, items, side }: { title: string; items: string[]; side: 'left' | 'right' }) {
  const right = side === 'right'
  return (
    <div className={right ? 'text-right' : 'text-left'}>
      <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted">{title}</p>
      <ul className="space-y-2">
        {items.map((item) => (
          <li
            key={item}
            className={`group flex items-center gap-3 rounded-lg border border-line bg-white px-4 py-3 text-sm font-medium text-ink shadow-card transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-card-hover ${
              right ? 'flex-row-reverse' : ''
            }`}
          >
            <span
              className={`h-2 w-2 shrink-0 rounded-full transition-colors duration-200 group-hover:bg-accent ${
                right ? 'bg-purple-400' : 'bg-blue-400'
              }`}
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Solution() {
  return (
    <Section
      id="solution"
      label="The solution"
      title={
        <>
          CoDo: Your{' '}
          <span className="text-gradient-accent">AI-powered Decision Intelligence Layer</span> for your
          Retail Business
        </>
      }
      intro="CoDo brings together your internal retail data with external signals, finds meaningful patterns and delivers clear, explainable recommendations — so your teams can make faster, smarter and more profitable decisions."
    >
      <div className="grid items-stretch gap-4 md:grid-cols-[1fr_auto_1fr]">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <DataList title="Internal Retail Data" items={internalData} side="left" />
        </motion.div>

        {/* Centre core */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="flex flex-col items-center justify-center"
        >
          {/* Connector line left */}
          <div className="hidden md:flex md:flex-col md:items-center md:h-full md:justify-center md:gap-0">
            <div className="flex-1 w-px bg-gradient-to-b from-transparent via-line to-line" />
            <div className="rounded-xl border-2 border-accent/30 bg-accent p-6 text-center text-white shadow-glow w-44">
              <p className="font-bold text-sm leading-snug mb-2">CoDo Decision Intelligence Layer</p>
              <div className="mt-3 border-t border-white/20 pt-3">
                <p className="text-[11px] text-white/70 leading-snug">AI Models</p>
                <p className="text-[10px] text-white/50 mt-0.5">Patterns · Predictions<br />Prioritisation · Explainability</p>
              </div>
            </div>
            <div className="flex-1 w-px bg-gradient-to-b from-line via-line to-transparent" />
          </div>

          {/* Mobile version */}
          <div className="md:hidden rounded-xl border-2 border-accent/30 bg-accent p-5 text-center text-white shadow-glow w-full">
            <p className="font-bold text-sm leading-snug mb-2">CoDo Decision Intelligence Layer</p>
            <p className="text-[10px] text-white/60">AI Models · Patterns · Predictions · Prioritisation</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <DataList title="External Signals" items={externalSignals} side="right" />
        </motion.div>
      </div>
    </Section>
  )
}
