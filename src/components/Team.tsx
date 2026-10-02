import { team } from '../content'
import { Section } from './Section'
import { Avatar } from './Avatar'

export function Team() {
  return (
    <Section id="team" title="Built by a team that understands retail.">
      <ul className="divide-y divide-line border-y border-line">
        {team.map((m) => (
          <li key={m.name} className="flex gap-5 py-6">
            <Avatar name={m.name} src={m.img} className="h-14 w-14" />
            <div className="min-w-0">
              <h3 className="font-serif text-xl font-semibold">
                {m.name} <span className="font-sans text-sm font-normal text-muted">{m.role}</span>
              </h3>
              <p className="mt-1 max-w-xl text-sm">{m.bio}</p>
              <a href={m.linkedin} target="_blank" rel="noreferrer" className="mt-2 inline-block text-sm font-medium text-accent underline underline-offset-4 hover:text-accent-dark">
                LinkedIn<span className="sr-only"> profile of {m.name}</span>
              </a>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}
