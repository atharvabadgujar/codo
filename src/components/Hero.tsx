import { ArrowRight, Play } from 'lucide-react'
import { DashboardMockup } from './DashboardMockup'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-navy-900 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_85%_30%,rgba(91,108,255,.25),transparent),radial-gradient(40%_50%_at_10%_90%,rgba(45,212,191,.12),transparent)]" aria-hidden="true" />
      <div className="container-x relative grid items-center gap-12 py-16 lg:grid-cols-[1fr_1.15fr] lg:py-24">
        <div>
          <p className="eyebrow !text-white/60">The retail decision problem</p>
          <h1 className="mt-4 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl [text-wrap:balance]">
            Retail has more data than ever. So why are decisions <span className="text-gradient">still reactive?</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80">
            CoDo is an AI-powered Decision Intelligence Layer that turns internal retail data and external signals into explainable, prioritized business decisions —{' '}
            <span className="text-teal-accent">and reducing the gap between insight to decision to action.</span>
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#solution" className="btn btn-primary">See how CoDo works <ArrowRight className="h-4 w-4" aria-hidden="true" /></a>
            <a href="#use-cases" className="btn btn-ghost">Explore use cases <Play className="h-4 w-4" aria-hidden="true" /></a>
          </div>
        </div>
        <DashboardMockup />
      </div>
    </section>
  )
}
