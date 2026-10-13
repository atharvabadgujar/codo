import { nav } from '../content'
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
          className="max-w-2xl"
        >
          <p className="section-label text-white/40 mb-4">Contact</p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl leading-tight">
            Turn <span className="text-gradient-accent">retail signals</span> into{' '}
            <span className="text-gradient-accent">decisions.</span>
          </h2>
          <p className="mt-4 text-base text-white/50 leading-7">
            Get in touch at{' '}
            <a
              href="mailto:tushar@codonow.com"
              className="font-medium text-white/80 underline underline-offset-4 hover:text-white"
            >
              tushar@codonow.com
            </a>
            .
          </p>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="container-x flex flex-col items-start justify-between gap-6 py-8 sm:flex-row sm:items-center">
        <img src="/logo-on-dark.png" alt="CoDo" width={458} height={192} className="h-7 w-auto" />

        <nav className="flex flex-wrap gap-6" aria-label="Footer navigation">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-sm text-white/40 hover:text-white transition-colors">
              {n.label}
            </a>
          ))}
        </nav>

        <p className="text-xs text-white/30">© {new Date().getFullYear()} CoDo.</p>
      </div>
    </footer>
  )
}
