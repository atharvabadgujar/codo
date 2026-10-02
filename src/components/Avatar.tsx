import { useState } from 'react'

export function Avatar({ name, src, className = 'h-16 w-16' }: { name: string; src: string; className?: string }) {
  const [failed, setFailed] = useState(false)
  const initials = name.split(' ').map((p) => p[0]).slice(0, 2).join('')
  if (failed) {
    return (
      <span role="img" aria-label={name} className={`grid shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand to-brand-violet text-sm font-bold text-white ${className}`}>
        {initials}
      </span>
    )
  }
  return <img src={src} alt={name} width={96} height={96} loading="lazy" decoding="async" onError={() => setFailed(true)} className={`shrink-0 rounded-full object-cover ${className}`} />
}
