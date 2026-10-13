import { motion } from 'framer-motion'
import { whyNow } from '../content'
import { Section } from './Section'

const icons = [
  // Database / data icon
  <svg key="1" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 5.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
  </svg>,
  // Brain / AI icon
  <svg key="2" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
  </svg>,
  // Chart / complexity icon
  <svg key="3" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
  </svg>,
]

const colors = [
  { bg: 'bg-blue-50', icon: 'text-blue-600', border: 'border-blue-100' },
  { bg: 'bg-purple-50', icon: 'text-purple-600', border: 'border-purple-100' },
  { bg: 'bg-emerald-50', icon: 'text-emerald-600', border: 'border-emerald-100' },
]

export function WhyNow() {
  return (
    <Section
      id="why"
      label="Why now?"
      title="Three powerful forces are creating a unique opportunity."
      intro={
        <>
          The convergence of richer data, new AI capabilities and increasing complexity is making{' '}
          <span className="hl">decision intelligence</span> essential for modern retailers.
        </>
      }
      bg="surface"
    >
      <div className="grid gap-6 sm:grid-cols-3">
        {whyNow.map((w, i) => (
          <motion.div
            key={w.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="card flex flex-col gap-5"
          >
            <div className={`w-fit rounded-xl border p-3 ${colors[i].bg} ${colors[i].border}`}>
              <span className={colors[i].icon}>{icons[i]}</span>
            </div>
            <div>
              <h3 className="h3-card mb-2">{w.title}</h3>
              <p className="text-sm text-muted leading-6">{w.body}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
