import { motion } from 'framer-motion'
import { ExternalLink, User } from 'lucide-react'
import { team } from '../content'
import { Section } from './Section'

export function Team() {
  return (
    <Section
      id="team"
      label="Founder, Co-founder & Mentor"
      title={
        <>
          Built by a team that understands <span className="hl">retail</span>.
        </>
      }
      bg="surface"
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((m, i) => (
          <motion.div
            key={m.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.45, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="card overflow-hidden"
          >
            {/* Photo + name row */}
            <div className="flex items-center gap-4 mb-4">
              {m.img ? (
                <img
                  src={m.img}
                  alt={m.name}
                  width={56}
                  height={56}
                  className="h-14 w-14 rounded-full border-2 border-line bg-white object-cover shadow-sm shrink-0"
                />
              ) : (
                <span
                  role="img"
                  aria-label={m.name}
                  className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-surface-2 text-muted ring-1 ring-line"
                >
                  <User className="h-6 w-6" />
                </span>
              )}
              <div className="min-w-0">
                <h3 className="font-semibold text-ink truncate">{m.name}</h3>
                <p className="text-sm text-muted">{m.role}</p>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-line mb-4" />

            {/* Bio */}
            <p className="text-sm text-muted leading-6 flex-1">{m.bio}</p>

            {/* LinkedIn */}
            <a
              href={m.linkedin}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-lg border border-line bg-white px-3.5 py-2 text-xs font-semibold text-ink hover:border-accent/40 hover:text-accent transition-colors"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              LinkedIn Profile
            </a>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
