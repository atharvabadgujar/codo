import { ArrowRight } from 'lucide-react'
import { INVESTOR_MAILTO } from '../content'
import { Logo } from './Logo'

export function Footer() {
  return (
    <footer id="contact" className="bg-navy-900 py-16 text-white">
      <div className="container-x flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div>
          <Logo />
          <h2 className="mt-6 max-w-lg text-2xl font-bold leading-snug sm:text-3xl">Ready to turn retail signals into decisions?</h2>
          <p className="mt-2 text-sm text-white/65">Write to <span className="select-all text-white">hello@codo.ai</span></p>
        </div>
        <a href={INVESTOR_MAILTO} className="btn btn-primary">Request Investor Deck <ArrowRight className="h-4 w-4" aria-hidden="true" /></a>
      </div>
      <p className="container-x mt-12 border-t border-white/10 pt-6 text-xs text-white/45">© {new Date().getFullYear()} CoDo. Business impact figures are illustrative.</p>
    </footer>
  )
}
