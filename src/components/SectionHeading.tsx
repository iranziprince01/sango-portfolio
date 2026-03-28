import { motion } from 'framer-motion'

type Props = {
  eyebrow: string
  title: string
  subtitle?: string
  align?: 'center' | 'left'
  id?: string
  /** Override eyebrow color (default: text-primary) */
  eyebrowClassName?: string
  /** Override h2 color (default: text-ink) */
  titleClassName?: string
  /** Override subtitle color (default: text-ink/75) */
  subtitleClassName?: string
  /** Use sentence casing (no per-word capitals); overrides default `capitalize` on the title */
  sentenceCase?: boolean
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  id,
  eyebrowClassName,
  titleClassName,
  subtitleClassName,
  sentenceCase,
}: Props) {
  return (
    <motion.div
      className={
        align === 'center'
          ? 'mx-auto mb-12 max-w-3xl text-center'
          : 'mb-12 w-full text-left'
      }
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
    >
      <p
        className={`mb-2 text-xs font-semibold uppercase tracking-[0.2em] ${eyebrowClassName ?? 'text-primary'}`}
      >
        {eyebrow}
      </p>
      <h2
        id={id}
        className={`mb-4 text-3xl font-bold tracking-tight md:text-4xl ${sentenceCase ? 'normal-case' : 'capitalize'} ${titleClassName ?? 'text-ink'}`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p className={`text-lg ${subtitleClassName ?? 'text-ink/75'}`}>{subtitle}</p>
      ) : null}
    </motion.div>
  )
}
