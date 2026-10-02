import { useCases, testimonial } from '../content'
import { Section } from './Section'
import { Avatar } from './Avatar'

export function UseCases() {
  return (
    <Section title="Decisions across every part of your business.">
      <ul className="divide-y divide-line border-y border-line">
        {useCases.map((u) => (
          <li key={u.title} className="grid gap-1 py-4 sm:grid-cols-[1fr_2fr] sm:gap-8">
            <h3 className="font-medium text-ink">{u.title}</h3>
            <p className="text-sm">{u.body}</p>
          </li>
        ))}
      </ul>
      <figure className="mt-10 flex gap-5">
        <Avatar name="Business Head" src={testimonial.img} className="h-14 w-14" />
        <div>
          <blockquote className="font-serif text-lg leading-snug text-ink">“{testimonial.quote}”</blockquote>
          <figcaption className="mt-3 text-sm"><span className="font-medium text-ink">{testimonial.who}</span>, {testimonial.note.toLowerCase()}</figcaption>
        </div>
      </figure>
    </Section>
  )
}
