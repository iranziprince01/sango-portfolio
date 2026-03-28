import { animate, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

type Props = {
  value: number
  suffix: string
  className?: string
  'aria-label'?: string
}

export function AnimatedCounter({ value, suffix, className = '', 'aria-label': ariaLabel }: Props) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, value, {
      duration: 1.35,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    })
    return () => controls.stop()
  }, [inView, value])

  const text = `${display}${suffix}`

  return (
    <span ref={ref} className={className} aria-label={ariaLabel ?? `${value}${suffix}`}>
      {text}
    </span>
  )
}
