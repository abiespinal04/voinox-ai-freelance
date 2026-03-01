import { motion } from 'framer-motion'
import { sectionReveal } from '@/utils/motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { reducedMotionVariants } from '@/utils/motion'

interface MotionSectionProps {
  children: React.ReactNode
  className?: string
}

export function MotionSection({ children, className = '' }: MotionSectionProps) {
  const reduced = useReducedMotion()

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={reduced ? reducedMotionVariants : sectionReveal}
      className={className}
    >
      {children}
    </motion.section>
  )
}
