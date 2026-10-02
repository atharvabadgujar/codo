import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { nav, INVESTOR_MAILTO } from '../content'

export function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white">
      <div className="container-x flex h-16 items-center justify-between">
        <a href="#top" className="font-serif text-2xl font-semibold tracking-tight text-ink" aria-label="CoDo home">CoDo</a>
        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-sm text-muted transition-colors hover:text-ink">{n.label}</a>
          ))}
        </nav>
        <a href={INVESTOR_MAILTO} className="btn btn-primary hidden lg:inline-flex">Request investor deck</a>
        <button className="p-2 text-ink lg:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen((v) => !v)}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="container-x flex flex-col border-t border-line pb-5 lg:hidden">
          {nav.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="border-b border-line py-3 text-ink">{n.label}</a>
          ))}
          <a href={INVESTOR_MAILTO} className="btn btn-primary mt-4">Request investor deck</a>
        </nav>
      )}
    </header>
  )
}
