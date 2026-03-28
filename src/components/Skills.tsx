import { motion } from 'framer-motion'
import { languages, skills } from '../data/content'
import { SectionHeading } from './SectionHeading'

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 px-4 py-20 md:px-6" aria-labelledby="skills-heading">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Expertise"
          title="skills & expertise"
          subtitle="A multidisciplinary toolkit for building systems that perform in the real world."
          id="skills-heading"
          titleClassName="text-cta"
        />

        <motion.ul
          className="mb-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.06 } },
          }}
        >
          {skills.map((s, i) => (
            <motion.li
              key={s.id}
              variants={{
                hidden: { opacity: 0, y: 14 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4 }}
            >
              <div className="group relative flex h-full min-h-[5.5rem] flex-col justify-between overflow-hidden rounded-2xl border border-primary/[0.09] bg-gradient-to-br from-white via-white to-surface/70 p-4 shadow-[0_1px_0_0_rgba(61,46,79,0.04)] ring-1 ring-primary/[0.04] transition-all duration-300 before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-[3px] before:bg-gradient-to-r before:from-cta/0 before:via-cta/35 before:to-primary/0 before:opacity-0 before:transition-opacity before:duration-300 hover:-translate-y-0.5 hover:border-primary/18 hover:shadow-md hover:before:opacity-100 md:min-h-[6.25rem] md:p-5">
                <span
                  className="font-mono text-[10px] font-semibold tabular-nums tracking-[0.22em] text-primary/40 transition-colors group-hover:text-cta"
                  aria-hidden
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="pr-1 text-[13px] font-semibold leading-snug text-ink md:text-[0.8125rem]">
                  {s.label}
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          className="rounded-2xl border border-primary/10 bg-surface p-8"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="mb-4 text-xl font-bold text-ink">Languages</h3>
          <p className="mb-4 text-ink/75">Professional and community communication across contexts.</p>
          <ul className="flex flex-wrap gap-2">
            {languages.map((lang) => (
              <li key={lang}>
                <span className="inline-flex rounded-lg bg-white px-3 py-1.5 text-sm font-semibold text-ink shadow-sm ring-1 ring-primary/10">
                  {lang}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
