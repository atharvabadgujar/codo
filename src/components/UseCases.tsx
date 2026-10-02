import { Quote } from 'lucide-react'
import { useCases, testimonial } from '../content'
import { Icon } from './Icon'
import { Avatar } from './Avatar'

export function UseCases() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="container-x grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="eyebrow">Use cases</p>
          <h2 className="h2 mt-3">Decisions across every part of your business.</h2>
          <ul className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-5">
            {useCases.map((u) => (
              <li key={u.title} className="flex flex-col items-start gap-2">
                <span className="text-brand"><Icon name={u.icon} className="h-7 w-7" /></span>
                <h3 className="text-sm font-semibold text-navy-900">{u.title}</h3>
                <p className="text-xs leading-snug text-slate-500">{u.sub}</p>
              </li>
            ))}
          </ul>
        </div>
        <figure className="flex flex-col gap-4 rounded-2xl border border-indigo-100 bg-indigo-50 p-6 sm:flex-row sm:items-center">
          <Avatar name="Business Head" src={testimonial.img} className="h-24 w-24" />
          <div>
            <Quote className="h-6 w-6 text-brand" aria-hidden="true" />
            <blockquote className="mt-1 text-sm font-medium leading-relaxed text-navy-900">“{testimonial.quote}”</blockquote>
            <figcaption className="mt-3 text-xs text-slate-500"><strong className="text-navy-900">{testimonial.who}</strong> {testimonial.note}</figcaption>
          </div>
        </figure>
      </div>
    </section>
  )
}
