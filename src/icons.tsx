import type { SVGProps } from 'react'

export function Icon({ name, ...props }: SVGProps<SVGSVGElement> & { name: 'arrow' | 'check' | 'chevron' | 'close' | 'filter' | 'graph' | 'menu' | 'search' | 'spark' | 'users' }) {
  const paths = {
    arrow: <path d="m5 12 14 0m-5-5 5 5-5 5" />,
    check: <path d="m5 12 4 4L19 6" />,
    chevron: <path d="m7 10 5 5 5-5" />,
    close: <path d="m6 6 12 12M18 6 6 18" />,
    filter: <path d="M4 5h16M7 12h10M10 19h4" />,
    graph: <><circle cx="6" cy="12" r="2.5" /><circle cx="18" cy="6" r="2.5" /><circle cx="18" cy="18" r="2.5" /><path d="m8.3 10.9 7.4-3.8M8.3 13.1l7.4 3.8" /></>,
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    search: <><circle cx="11" cy="11" r="6" /><path d="m16 16 4 4" /></>,
    spark: <><path d="m12 2 1.5 5.2L19 9l-5.5 1.8L12 16l-1.5-5.2L5 9l5.5-1.8L12 2Z" /><path d="m5 15 .7 2.3L8 18l-2.3.7L5 21l-.7-2.3L2 18l2.3-.7L5 15Z" /></>,
    users: <><circle cx="9" cy="8" r="3" /><path d="M3 19c.5-3.3 2.5-5 6-5s5.5 1.7 6 5" /><circle cx="17" cy="9" r="2" /><path d="M16 14c3 0 4.6 1.5 5 4" /></>,
  }
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{paths[name]}</svg>
}
