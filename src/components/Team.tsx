import { team } from '../content'
import { Avatar } from './Avatar'

export function Team() {
  return (
    <section id="team" className="bg-white py-16 sm:py-20">
      <div className="container-x">
        <p className="eyebrow">Founder, co-founder &amp; strategic advisor</p>
        <h2 className="h2 mt-3">Built by a team that understands retail.</h2>
        <ul className="mt-8 grid gap-5 md:grid-cols-3">
          {team.map((m) => (
            <li key={m.name} className="flex gap-4 rounded-2xl border border-slate-200 p-5 shadow-card">
              <Avatar name={m.name} src={m.img} className="h-16 w-16" />
              <div className="min-w-0">
                <h3 className="font-semibold text-navy-900">{m.name}</h3>
                <p className="text-xs font-medium text-brand">{m.role}</p>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">{m.bio}</p>
                <a href={m.linkedin} target="_blank" rel="noreferrer" aria-label={`${m.name} on LinkedIn`} className="mt-3 inline-grid h-7 w-7 place-items-center rounded bg-[#0A66C2] text-white">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4V21H3zM9.75 9.75h3.8v1.6h.05c.55-1 1.9-2 3.9-2 4.1 0 4.5 2.7 4.5 6.2V21h-4v-4.7c0-1.2 0-2.7-1.7-2.7s-1.9 1.3-1.9 2.6V21h-4z"/></svg>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
