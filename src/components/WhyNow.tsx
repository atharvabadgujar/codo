import { whyNow } from '../content'
import { Icon, tones } from './Icon'

export function WhyNow() {
  return (
    <section id="why" className="bg-white py-16 sm:py-20">
      <div className="container-x grid items-center gap-10 lg:grid-cols-[1fr_1.6fr]">
        <div>
          <p className="eyebrow">Why now?</p>
          <h2 className="h2 mt-3">Three powerful forces are creating a unique opportunity.</h2>
          <p className="mt-4 max-w-md leading-relaxed text-slate-600">
            The convergence of richer data, new AI capabilities and increasing complexity is making decision intelligence essential for modern retailers.
          </p>
        </div>
        <ul className="grid gap-4 sm:grid-cols-3">
          {whyNow.map((w) => (
            <li key={w.title} className={`rounded-2xl border p-5 ${tones[w.tone].card}`}>
              <span className={`mb-4 grid h-11 w-11 place-items-center rounded-full ${tones[w.tone].chip}`}><Icon name={w.icon} /></span>
              <h3 className="font-semibold text-navy-900">{w.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{w.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
