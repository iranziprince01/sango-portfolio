import { socialLinks } from '../data/content'
import { SocialIcon } from './icons'

const quickLinks = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#skills', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
] as const

export function Footer() {
  return (
    <footer
      className="border-t border-white/10 bg-primary px-4 py-14 text-white/90 md:px-6 md:py-16"
      role="contentinfo"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 md:flex-row md:items-center md:justify-between md:gap-10">
        <nav
          aria-label="Footer"
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-[13px] font-medium tracking-wide text-white/85 md:justify-start"
        >
          {quickLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="transition-colors hover:text-white hover:underline hover:decoration-white/50 hover:underline-offset-4"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <ul className="flex shrink-0 items-center justify-center gap-2" aria-label="Social media">
          {socialLinks.map((s) => (
            <li key={s.id}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer me"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-white/90 transition-colors hover:border-white/25 hover:bg-white/10 hover:text-white"
                aria-label={s.label}
              >
                <SocialIcon type={s.icon} />
              </a>
            </li>
          ))}
        </ul>

        <p className="text-center text-[13px] leading-snug text-white/65 md:min-w-0 md:flex-1 md:text-right">
          © 2026 Fati Sango. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
