import { INVESTOR_MAILTO } from '../content'

export function Footer() {
  return (
    <footer id="contact" className="rule bg-surface">
      <div className="container-x flex flex-col justify-between gap-8 py-16 md:flex-row md:items-end">
        <div>
          <h2 className="h2 max-w-lg">Turn retail signals into decisions.</h2>
          <p className="mt-3 text-sm">Write to <span className="select-all font-medium text-ink">hello@codo.ai</span></p>
        </div>
        <a href={INVESTOR_MAILTO} className="btn btn-primary self-start md:self-auto">Request investor deck</a>
      </div>
      <p className="container-x border-t border-line py-5 text-xs">© {new Date().getFullYear()} CoDo. Business impact figures are illustrative.</p>
    </footer>
  )
}
