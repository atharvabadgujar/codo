import { ArrowRight } from 'lucide-react'
import { capabilities, impact } from '../content'
import { Icon, tones } from './Icon'

export function Capabilities() {
  return (
    <section id="product" className="bg-white py-16 sm:py-20">
      <div className="container-x">
        <p className="eyebrow">Key product capabilities</p>
        <h2 className="h2 mt-3">From insights to action.<br className="hidden sm:block" /> Everything your retail teams need.</h2>
        <ul id="capabilities" className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((c) => (
            <li key={c.title} className={`flex flex-col gap-2 rounded-2xl border p-5 ${tones[c.tone].card}`}>
              <span className={`grid h-9 w-9 place-items-center rounded-lg ${tones[c.tone].chip}`}><Icon name={c.icon} /></span>
              <h3 className="font-semibold text-navy-900">{c.title}</h3>
              <p className="text-sm leading-relaxed text-slate-600">{c.body}</p>
              <ArrowRight className={`mt-auto h-4 w-4 ${tones[c.tone].text}`} aria-hidden="true" />
            </li>
          ))}
        </ul>

        <div className="mt-16">
          <p className="eyebrow">Business impact (illustrative)</p>
          <h2 className="h2 mt-3">Smarter decisions. Measurable results.</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {impact.map((i) => (
              <li key={i.label} className={`rounded-2xl border p-5 ${tones[i.tone].card}`}>
                <p className={`text-3xl font-extrabold tabular-nums ${tones[i.tone].text}`}>{i.value}</p>
                <p className="mt-1 text-sm text-slate-600">{i.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
