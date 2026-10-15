import { motion } from 'framer-motion'
import {
  ArrowRight,
  Coffee,
  Footprints,
  Gem,
  Headphones,
  Shirt,
  ShoppingBag,
  ShoppingCart,
  Sparkles,
  Store,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useCases, retailCategories, testimonial } from '../content'
import { Section } from './Section'

const useCaseIcons = [
  // People
  <svg key="1" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
  </svg>,
  // Tag
  <svg key="2" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
  </svg>,
  // Box
  <svg key="3" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
  </svg>,
  // Megaphone
  <svg key="4" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
  </svg>,
  // Cog
  <svg key="5" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>,
]

const categoryStyles: { Icon: LucideIcon; icon: string }[] = [
  { Icon: Shirt, icon: 'bg-blue-50 text-blue-600' },
  { Icon: Gem, icon: 'bg-amber-50 text-amber-600' },
  { Icon: ShoppingCart, icon: 'bg-emerald-50 text-emerald-600' },
  { Icon: ShoppingBag, icon: 'bg-teal-50 text-teal-600' },
  { Icon: Coffee, icon: 'bg-orange-50 text-orange-600' },
  { Icon: Headphones, icon: 'bg-purple-50 text-purple-600' },
  { Icon: Footprints, icon: 'bg-sky-50 text-sky-600' },
  { Icon: Store, icon: 'bg-rose-50 text-rose-600' },
  { Icon: Sparkles, icon: 'bg-pink-50 text-pink-600' },
]

export function UseCases() {
  return (
    <Section
      id="use-cases"
      label="Use cases"
      title={
        <>
          Decisions across every part of your <span className="hl">retail</span> business.
        </>
      }
      intro="CoDo surfaces the right action at the right time — from customer loyalty to operations."
    >
      {/* Use case cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5 mb-14">
        {useCases.map((u, i) => (
          <motion.div
            key={u.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
            className="card flex flex-col items-start gap-3 hover:shadow-card-hover"
          >
            <div className="rounded-lg border border-line bg-surface p-2.5 text-muted">
              {useCaseIcons[i]}
            </div>
            <div>
              <h3 className="text-sm font-semibold text-ink mb-1">{u.title}</h3>
              <p className="text-xs text-muted leading-5">{u.body}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Retail categories */}
      <div>
        <p className="section-label mb-3">Retail categories</p>
        <h3 className="font-sans text-2xl font-bold leading-tight tracking-tight text-ink sm:text-3xl">
          Built for the way retail works.
        </h3>
        <p className="mt-4 max-w-3xl leading-7 text-muted">
          CoDo adapts decision intelligence to the unique demands of every retail category — from
          customer behaviour and product demand to inventory and store operations.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {retailCategories.map((c, i) => {
            const { Icon, icon } = categoryStyles[i]
            return (
              <motion.div
                key={c}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.06 }}
                className="card group flex items-center gap-3.5 p-4 hover:shadow-card-hover"
              >
                <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-lg ${icon}`}>
                  <Icon className="h-5 w-5" />
                </span>
                <span className="min-w-0 flex-1 text-sm font-semibold text-ink">{c}</span>
                <ArrowRight className="h-4 w-4 shrink-0 text-muted transition-transform duration-200 group-hover:translate-x-0.5" />
              </motion.div>
            )
          })}
        </div>

        <p className="mt-8 text-center text-sm text-muted">And other specialty retail formats.</p>
      </div>

      {/* Testimonial */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative mt-14 overflow-hidden rounded-2xl border border-line bg-surface p-8 sm:p-10 lg:p-12"
      >
        <div className="pointer-events-none absolute right-0 top-0 h-48 w-48 rounded-full bg-accent/5 blur-3xl" />
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-10">
          <img
            src={testimonial.img}
            alt={testimonial.who}
            className="h-20 w-20 shrink-0 rounded-full border-2 border-line object-cover shadow-sm"
          />
          <div>
            <blockquote className="text-xl font-medium leading-8 text-ink sm:text-2xl sm:leading-9">
              "{testimonial.quote}"
            </blockquote>
            <figcaption className="mt-5 text-sm text-muted">{testimonial.who}</figcaption>
          </div>
        </div>
      </motion.div>
    </Section>
  )
}
