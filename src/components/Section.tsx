import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface SectionProps {
  id?: string
  label?: string
  title: ReactNode
  intro?: string
  children: ReactNode
  bg?: 'white' | 'surface'
}

export function Section({ id, label, title, intro, children, bg = 'white' }: SectionProps) {
  return (
    <section
      id={id}
      className={`section-divider ${bg === 'surface' ? 'bg-surface' : 'bg-white'}`}
    >
      <div className="container-x py-20 lg:py-28">
        {/* Section header: two-column on large screens */}
        <div className="mb-14 lg:mb-16 grid gap-6 lg:grid-cols-[1fr_1fr] lg:gap-12 lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55 }}
          >
            {label && <p className="section-label mb-3">{label}</p>}
            <h2 className="h2">{title}</h2>
          </motion.div>
          {intro && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="text-muted leading-7 lg:self-end"
            >
              {intro}
            </motion.p>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, delay: 0.15 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  )
}
