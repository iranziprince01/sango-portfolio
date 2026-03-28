import { motion } from 'framer-motion'
import { impactMetrics } from '../data/content'
import { AnimatedCounter } from './AnimatedCounter'

export function ImpactMetrics() {
  return (
    <section
      id="impact"
      className="scroll-mt-24 border-y border-primary/10 bg-surface px-4 py-16 md:px-6"
      aria-labelledby="impact-heading"
    >
      <div className="mx-auto max-w-6xl">
        <motion.h2
          id="impact-heading"
          className="mb-10 text-left text-xs font-semibold uppercase tracking-[0.2em] text-primary"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          Impact at a glance
        </motion.h2>
        <ul className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {impactMetrics.map((m, i) => (
            <motion.li
              key={m.id}
              className="rounded-2xl border border-primary/10 bg-white p-5 text-center shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
            >
              <div className="text-3xl font-bold tabular-nums text-primary md:text-4xl">
                <AnimatedCounter value={m.value} suffix={m.suffix} />
              </div>
              <p className="mt-2 text-sm font-medium leading-snug text-ink/80">{m.label}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
