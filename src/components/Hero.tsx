import { motion } from 'framer-motion'
import { HERO_IMAGE, HERO_PORTRAIT } from '../data/content'
import { LocationPinIcon } from './icons'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] items-center overflow-hidden pt-24"
      aria-labelledby="hero-title"
    >
      {/* Full-bleed scene photo (30% opacity) + dark primary overlay */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-primary-deep" aria-hidden />
        <img
          src={HERO_IMAGE}
          alt=""
          width={1920}
          height={1080}
          loading="eager"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-primary/92 via-primary/88 to-primary-deep"
          aria-hidden
        />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-stretch gap-10 px-4 py-12 md:gap-12 md:px-6 lg:grid-cols-2 lg:gap-16 lg:py-16">
        <div className="flex min-h-0 flex-col text-left lg:h-full">
          <div className="flex min-h-0 flex-col">
            <div className="flex flex-col space-y-5 md:space-y-5">
              <motion.p
                className="inline-flex w-fit items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur-sm"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <LocationPinIcon className="h-4 w-4 shrink-0 text-white" />
                Rwanda
              </motion.p>
              <motion.h1
                id="hero-title"
                className="text-4xl font-black tracking-tight text-white md:text-5xl lg:text-6xl"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.05 }}
              >
                Fati Sango
              </motion.h1>
              <motion.p
                className="text-xl font-bold text-white md:text-2xl"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.1 }}
              >
                Social Entrepreneur | Business Analyst
              </motion.p>
            </div>
            <div className="mt-8 flex flex-col space-y-3 md:mt-10 md:space-y-3.5">
              <motion.p
                className="text-lg font-semibold tracking-wide text-cta-light md:text-xl"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.14 }}
              >
                Creating Innovation for Impact
              </motion.p>
              <motion.p
                className="max-w-xl text-justify text-base font-normal leading-relaxed text-white/90 md:text-lg"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.2 }}
              >
                Designing practical, scalable systems that meet community needs. Specialised in social enterprise development,
                AI-enabled service workflows, and business analytics for sustainable impact.
              </motion.p>
            </div>
          </div>

          <motion.div
            className="mt-8 flex flex-wrap gap-4 md:mt-10"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.28 }}
          >
            <a
              href="#about"
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg bg-cta px-8 py-3 text-sm font-semibold text-white shadow-md shadow-cta/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cta-hover"
            >
              Learn More
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg border-2 border-white/85 bg-transparent px-8 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10"
            >
              Let&apos;s Collaborate
            </a>
          </motion.div>
        </div>

        <motion.div
          className="flex h-full min-h-0 items-start justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.12, ease: 'easeOut' }}
        >
          <div className="relative w-full max-w-md">
            <div
              className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-white/40 via-white/25 to-white/5 blur-2xl"
              aria-hidden
            />
            <div className="relative overflow-hidden rounded-2xl border-2 border-white/70 bg-white/15 shadow-2xl shadow-black/25 ring-2 ring-white/35 backdrop-blur-[2px]">
              <img
                src={HERO_PORTRAIT}
                alt="Portrait of Fati Sango"
                width={900}
                height={1125}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="aspect-[4/5] w-full object-cover object-top"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
