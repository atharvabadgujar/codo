export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <a href="#top" className="flex items-center gap-2.5" aria-label="CoDo home">
      <span className={`text-2xl font-extrabold tracking-tight ${dark ? 'text-navy-900' : 'text-white'}`}>
        Co<span className="text-gradient">Do</span>
      </span>
      <span className={`hidden text-[9px] font-semibold uppercase leading-tight tracking-widest sm:block ${dark ? 'text-slate-500' : 'text-white/60'}`}>
        Retail decisions.<br />Simplified.
      </span>
    </a>
  )
}
