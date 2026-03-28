import { motion } from 'framer-motion'
import { projects } from '../data/content'
import { SectionHeading } from './SectionHeading'

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 bg-surface px-4 py-20 md:px-6" aria-labelledby="projects-heading">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Portfolio"
          title="projects & experience"
          subtitle="Selected ventures, programmes, and research: systems design, delivery, and impact."
          id="projects-heading"
        />

        <ul className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.li
              key={p.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: Math.min(i * 0.05, 0.3) }}
              className={`group flex h-full flex-col overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                p.featured ? 'border-primary/25 ring-1 ring-primary/10' : 'border-primary/10'
              }`}
            >
              <div
                className={`px-6 py-4 text-white ${
                  p.featured
                    ? 'bg-gradient-to-br from-primary to-primary-deep'
                    : 'bg-gradient-to-br from-primary to-primary-deep/95'
                }`}
              >
                {p.featured ? (
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-white/85">Featured</p>
                ) : null}
                <h3 className="text-xl font-bold">{p.title}</h3>
                <p className="mt-1 text-sm font-medium text-white/90">{p.role}</p>
              </div>
              <div className="flex flex-1 flex-col px-6 py-5">
                <p className="mb-4 leading-relaxed text-ink/85">{p.description}</p>
                <h4 className="mb-2 text-xs font-bold uppercase tracking-wide text-primary">Key contributions</h4>
                <ul className="mb-6 list-disc space-y-1 pl-5 text-sm text-ink/80">
                  {p.contributions.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
                <a
                  href={p.ctaHref}
                  className="mt-auto inline-flex w-fit items-center gap-2 rounded-lg bg-cta px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-cta-hover group-hover:gap-3"
                  {...(p.ctaHref.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  {p.ctaLabel}
                  <span aria-hidden>→</span>
                </a>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
