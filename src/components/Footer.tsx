import { INVESTOR_MAILTO, nav } from '../content'
import { motion } from 'framer-motion'

export function Footer() {
  return (
    <footer id="contact" className="bg-[#0E1117]">
      {/* CTA Band */}
      <div className="container-x border-b border-white/10 py-20 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between"
        >
          <div className="max-w-xl">
            <p className="section-label text-white/40 mb-4">Contact</p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl leading-tight">
              Turn retail signals into{' '}
              <span className="text-gradient-accent">decisions.</span>
            </h2>
            <p className="mt-4 text-base text-white/50 leading-7">
              Get in touch at{' '}
              <a
                href="mailto:hello@codo.ai"
                className="font-medium text-white/80 underline underline-offset-4 hover:text-white"
              >
                hello@codo.ai
              </a>{' '}
              or request the investor deck below.
            </p>
          </div>
          <a
            href={INVESTOR_MAILTO}
            className="btn btn-primary shrink-0 px-6 py-3 text-sm"
          >
            Request Investor Deck
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="container-x flex flex-col items-start justify-between gap-6 py-8 sm:flex-row sm:items-center">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent text-white text-xs font-bold">C</span>
          <span className="font-serif font-bold text-white">CoDo</span>
        </div>

        <nav className="flex flex-wrap gap-6" aria-label="Footer navigation">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-sm text-white/40 hover:text-white transition-colors">
              {n.label}
            </a>
          ))}
        </nav>

        <p className="text-xs text-white/30">
          © {new Date().getFullYear()} CoDo. Figures are illustrative.
        </p>
      </div>
    </footer>
  )
}
