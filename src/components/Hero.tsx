import { DashboardMockup } from './DashboardMockup'

export function Hero() {
  return (
    <section id="top">
      <div className="container-x grid items-center gap-12 py-16 lg:grid-cols-[5fr_6fr] lg:gap-16 lg:py-24">
        <div>
          <h1 className="display text-4xl leading-[1.1] sm:text-5xl">Retail has more data than ever. So why are decisions still reactive?</h1>
          <p className="mt-6 max-w-lg text-base">
            CoDo is an AI-powered decision intelligence layer. It turns internal retail data and external signals into explainable, prioritized business decisions, and closes the gap between insight and action.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#solution" className="btn btn-primary">See how CoDo works</a>
            <a href="#use-cases" className="btn btn-secondary">Explore use cases</a>
          </div>
        </div>
        <DashboardMockup />
      </div>
    </section>
  )
}
