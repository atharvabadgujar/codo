import { motion } from 'framer-motion'
import { User } from 'lucide-react'
import { team } from '../content'
import { DashboardMockup } from './DashboardMockup'

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden bg-[#0E1117] flex flex-col"
      style={{ paddingTop: '4.5rem' }}
    >
      {/* Subtle gradient accents */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute top-[-10%] right-[-5%] h-[600px] w-[600px] rounded-full bg-accent/10 blur-[120px]" />
        <div className="absolute bottom-[10%] left-[-5%] h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[100px]" />
        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
      </div>

      <div className="container-x relative z-10 flex flex-1 flex-col justify-center py-16 lg:py-24">
        {/* Tag line */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          <span className="text-xs font-medium text-white/70 tracking-wide">The Retail Decision Problem</span>
        </motion.div>

        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          {/* Left: copy */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="font-serif text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]"
            >
              Retail has more data{' '}
              <br className="hidden sm:block" />
              than ever. So why are{' '}
              <br className="hidden sm:block" />
              decisions{' '}
              <span className="text-gradient-accent">still reactive?</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="mt-6 max-w-[480px] text-base leading-7 text-white/60"
            >
              CoDo is an AI-powered Decision Intelligence layer that turns internal retail data and
              external signals into explainable, prioritised business decisions — and reduces the gap
              between insight and action.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="mt-9 flex flex-wrap gap-3"
            >
              <a href="#solution" className="btn btn-primary px-5 py-2.5 text-sm">
                See how CoDo works
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="#team" className="btn btn-outline px-5 py-2.5 text-sm">
                People Behind CoDo
              </a>
            </motion.div>

            {/* Social proof strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-10 flex items-center gap-4 border-t border-white/10 pt-8"
            >
              <div className="flex -space-x-2">
                {team.map((m) =>
                  m.img ? (
                    <img
                      key={m.name}
                      src={m.img}
                      alt={m.name}
                      width={40}
                      height={40}
                      className="h-9 w-9 rounded-full border-2 border-[#0E1117] bg-[#0E1117] object-cover"
                    />
                  ) : (
                    <span
                      key={m.name}
                      role="img"
                      aria-label={m.name}
                      className="grid h-9 w-9 place-items-center rounded-full border-2 border-[#0E1117] bg-white/10 text-white/50"
                    >
                      <User className="h-4 w-4" />
                    </span>
                  ),
                )}
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Validated by retail leaders</p>
                <p className="text-xs text-white/40">Built for the world's fastest growing retailers</p>
              </div>
            </motion.div>
          </div>

          {/* Right: dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <DashboardMockup />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
