import { useState } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'
import { nav, INVESTOR_MAILTO } from '../content'
import { Logo } from './Logo'

export function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy-900/85 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between">
        <Logo />
        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-sm font-medium text-white/75 transition hover:text-white">
              {n.label}
            </a>
          ))}
        </nav>
        <a href={INVESTOR_MAILTO} className="btn btn-primary hidden lg:inline-flex">
          Request Investor Deck <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
        <button
          className="rounded-md p-2 text-white lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="container-x flex flex-col gap-1 pb-5 lg:hidden">
          {nav.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-white/85 hover:bg-white/10">
              {n.label}
            </a>
          ))}
          <a href={INVESTOR_MAILTO} className="btn btn-primary mt-2">Request Investor Deck</a>
        </nav>
      )}
    </header>
  )
}
