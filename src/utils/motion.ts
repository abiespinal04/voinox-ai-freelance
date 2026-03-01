import { type Variants } from 'framer-motion'

export const easing = {
  smooth: [0.25, 0.46, 0.45, 0.94],
  out: [0.33, 1, 0.68, 1],
  inOut: [0.65, 0, 0.35, 1],
} as const

export const duration = {
  fast: 0.2,
  normal: 0.35,
  slow: 0.5,
} as const

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: duration.normal,
      ease: easing.out,
      delay: i * 0.06,
    },
  }),
  visibleNoDelay: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.normal, ease: easing.out },
  },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      duration: duration.normal,
      ease: easing.out,
      delay: i * 0.05,
    },
  }),
  visibleNoDelay: {
    opacity: 1,
    transition: { duration: duration.normal, ease: easing.out },
  },
}

export const heroStagger: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easing.out,
      delay: 0.1 + i * 0.08,
    },
  }),
}

export const sectionReveal: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easing.out,
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
}

export const cardHover = {
  rest: { scale: 1, boxShadow: '0 4px 20px -2px rgba(0, 0, 0, 0.08), 0 2px 8px -2px rgba(0, 0, 0, 0.04)' },
  hover: {
    scale: 1.02,
    boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.04)',
    transition: { duration: duration.normal, ease: easing.out },
  },
}

export const buttonHover = {
  rest: { scale: 1 },
  hover: { scale: 1.02, transition: { duration: duration.fast, ease: easing.out } },
  tap: { scale: 0.98 },
}

export const reducedMotionVariants: Variants = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0 },
}
