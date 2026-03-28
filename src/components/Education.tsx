import { motion } from 'framer-motion'
import { education, HERO_IMAGE } from '../data/content'
import { SectionHeading } from './SectionHeading'

export function Education() {
  return (
    <section
      id="education"
      className="relative scroll-mt-24 overflow-hidden px-4 py-20 md:px-6"
      aria-labelledby="education-heading"
    >
      {/* Same full-bleed scene + overlay as hero */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-primary-deep" aria-hidden />
        <img
          src={HERO_IMAGE}
          alt=""
          width={1920}
          height={1080}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-primary/92 via-primary/88 to-primary-deep"
          aria-hidden
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Education"
          title="learning path"
          id="education-heading"
          eyebrowClassName="text-white/85"
          titleClassName="text-white"
        />

        <ol className="relative space-y-0 border-l-2 border-white/25 pl-8 md:pl-10">
          {education.map((item, index) => (
            <motion.li
              key={item.id}
              className="relative pb-12 last:pb-0"
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <span
                className="absolute -left-[9px] top-2 h-4 w-4 rounded-full border-4 border-white bg-primary shadow-sm md:-left-[11px]"
                aria-hidden
              />
              <article className="rounded-2xl border border-primary/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <h3 className="text-xl font-bold text-ink">{item.institution}</h3>
                <p className="mt-1 font-semibold text-primary">{item.credential}</p>
                <p className="mt-3 leading-relaxed text-ink/80">{item.detail}</p>
              </article>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
