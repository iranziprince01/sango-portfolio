import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const links = [
  { href: '#about', label: 'About' },
  { href: '#education', label: 'Education' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
] as const

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      className={`fixed inset-x-0 top-0 z-50 border-b border-primary/10 bg-canvas/92 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? 'shadow-md shadow-primary/12' : ''
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      role="banner"
    >
      <div className="mx-auto flex min-h-[4.25rem] max-w-6xl items-center justify-between gap-4 px-4 py-4 md:min-h-[4.75rem] md:px-6 md:py-5">
        <a
          href="#hero"
          className="text-lg font-bold tracking-tight text-primary transition-opacity hover:opacity-80"
          aria-label="Fati Sango, home"
        >
          Fati Sango
        </a>
        <div className="hidden items-center gap-2 md:flex">
          <nav className="flex items-center gap-0.5 lg:gap-1" aria-label="Primary">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-lg px-2.5 py-2 text-sm font-bold text-ink/90 transition-colors hover:bg-primary/5 hover:text-primary lg:px-3"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="shrink-0 rounded-lg bg-cta px-4 py-2 text-sm font-bold text-white shadow-sm transition-colors hover:bg-cta-hover"
          >
            Let&apos;s talk
          </a>
        </div>
        <details className="relative md:hidden">
          <summary className="list-none rounded-lg border border-primary/20 px-3 py-2 text-sm font-medium text-primary [&::-webkit-details-marker]:hidden">
            Menu
          </summary>
          <div className="absolute right-0 mt-2 w-52 rounded-xl border border-primary/10 bg-white p-2 shadow-lg">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="block rounded-lg px-3 py-2 text-sm font-bold text-ink hover:bg-primary/5"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-1 block rounded-lg bg-cta px-3 py-2 text-center text-sm font-bold text-white hover:bg-cta-hover"
            >
              Contact
            </a>
          </div>
        </details>
      </div>
    </motion.header>
  )
}
