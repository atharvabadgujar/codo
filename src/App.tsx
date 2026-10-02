import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { WhyNow } from './components/WhyNow'
import { Solution } from './components/Solution'
import { DecisionCards } from './components/DecisionCards'
import { Capabilities } from './components/Capabilities'
import { UseCases } from './components/UseCases'
import { Team } from './components/Team'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-ink">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <WhyNow />
        <Solution />
        <DecisionCards />
        <Capabilities />
        <UseCases />
        <Team />
      </main>
      <Footer />
    </>
  )
}
