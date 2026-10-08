import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { nav, INVESTOR_MAILTO } from '../content'
import { motion, AnimatePresence } from 'framer-motion'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-line'
          : 'bg-transparent'
      }`}
    >
      <div className="container-x flex h-[4.5rem] items-center justify-between">
        {/* Logo */}
        <a
          href="#top"
          aria-label="CoDo home"
          className={`flex items-center gap-2 font-serif text-xl font-bold tracking-tight transition-colors ${
            scrolled ? 'text-ink' : 'text-white'
          }`}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-white text-sm font-bold shadow">
            C
          </span>
          CoDo
        </a>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                scrolled ? 'text-muted' : 'text-white/80 hover:text-white'
              }`}
            >
              {n.label}
            </a>
          ))}
        </nav>

        <a
          href={INVESTOR_MAILTO}
          className="btn btn-primary hidden text-sm lg:inline-flex"
        >
          Request Investor Deck
        </a>

        <button
          className={`p-2 lg:hidden transition-colors ${scrolled ? 'text-ink' : 'text-white'}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden bg-white border-t border-line lg:hidden"
          >
            <div className="container-x flex flex-col gap-0 pb-4 pt-2">
              {nav.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-line py-3.5 text-sm font-medium text-ink hover:text-accent"
                >
                  {n.label}
                </a>
              ))}
              <div className="pt-4">
                <a href={INVESTOR_MAILTO} className="btn btn-primary w-full justify-center">
                  Request Investor Deck
                </a>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
