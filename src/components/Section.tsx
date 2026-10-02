import type { ReactNode } from 'react'

// Heading column on the left, content on the right, separated from the previous section by a hairline.
export function Section({ id, title, intro, children }: { id?: string; title: ReactNode; intro?: string; children: ReactNode }) {
  return (
    <section id={id} className="rule">
      <div className="container-x grid gap-10 py-16 lg:grid-cols-[5fr_7fr] lg:gap-16 lg:py-24">
        <div>
          <h2 className="h2 max-w-md">{title}</h2>
          {intro && <p className="mt-5 max-w-md">{intro}</p>}
        </div>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  )
}
