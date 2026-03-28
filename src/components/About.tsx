import { motion } from 'framer-motion'
import { coreValues } from '../data/content'
import { MissionIcon, ValueIcon } from './icons'

const sectionMotion = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.45, ease: 'easeOut' },
} as const

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-t border-primary/8 bg-canvas px-4 py-20 md:px-6 md:py-24"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto w-full max-w-6xl">
        <header className="mb-12 md:mb-16">
          <motion.p
            className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary"
            {...sectionMotion}
          >
            My Story
          </motion.p>
          <motion.h2
            id="about-heading"
            className="mb-5 text-3xl font-bold tracking-tight text-cta normal-case md:text-4xl"
            {...sectionMotion}
            transition={{ ...sectionMotion.transition, delay: 0.03 }}
          >
            Social impact, Systems, and Evidence
          </motion.h2>
        </header>

        <div className="mb-14 flex flex-col gap-14 md:mb-16 md:gap-16 lg:mb-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-stretch lg:gap-12 xl:gap-16">
            <motion.article
              className="border-l-2 border-primary/25 pl-6 md:pl-8"
              {...sectionMotion}
              transition={{ ...sectionMotion.transition, delay: 0.06 }}
            >
              <div className="space-y-4 text-[17px] leading-[1.75] text-ink/88">
                <p className="text-justify">
                  Kigali-based social entrepreneur and systems designer with hands-on experience building
                  community-centered ventures. Co-founded <strong className="font-semibold text-ink">C-RISE Group</strong>{' '}
                  and <strong className="font-semibold text-ink">Mindsafi</strong>; led vocational curriculum and training
                  programmes. Delivered CRM, MIS, and data-driven solutions for NGOs and community projects.
                </p>
                <p className="text-justify">
                  Her work blends product development, local supply-chain design, AI-enabled service workflows, and business
                  analytics to create sustainable pathways to employment, resilience, and measurable impact. Grounded in
                  practical implementation and stakeholder coordination, she focuses on scalable solutions that prioritise
                  dignity, local value-creation, and rigorous, outcomes-based decision-making.
                </p>
              </div>
            </motion.article>

            <div className="flex flex-col justify-center">
              <motion.div
                className="rounded-xl border border-primary/12 bg-white p-6 shadow-sm md:p-8"
                {...sectionMotion}
                transition={{ ...sectionMotion.transition, delay: 0.1 }}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cta/15 to-primary/10 text-primary">
                  <MissionIcon className="h-7 w-7" />
                </div>
                <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary">Mission</h3>
                <p className="text-[17px] leading-[1.75] text-ink/90">
                  My mission is to leverage technology and social enterprise to design practical, scalable systems that
                  respond to real community needs, strengthen local capacity, and create measurable, sustainable social and
                  economic impact across Africa.
                </p>
              </motion.div>
            </div>
          </div>

          <motion.div {...sectionMotion} transition={{ ...sectionMotion.transition, delay: 0.12 }}>
            <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.18em] text-primary">Core Values</h3>
            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              {coreValues.map((v, i) => (
                <motion.li
                  key={v.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-primary/10 bg-white p-6 shadow-[0_4px_24px_-4px_rgba(61,46,79,0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-cta/25 hover:shadow-[0_20px_40px_-12px_rgba(61,46,79,0.18)]"
                >
                  <div
                    className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cta via-cta/80 to-primary opacity-90 transition-opacity group-hover:opacity-100"
                    aria-hidden
                  />
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cta/15 to-primary/10 text-primary transition-transform duration-300 group-hover:scale-105">
                    <ValueIcon type={v.icon} />
                  </div>
                  <h4 className="mb-2 text-lg font-bold leading-snug text-ink">{v.title}</h4>
                  <p className="text-sm leading-relaxed text-ink/68">{v.description}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
