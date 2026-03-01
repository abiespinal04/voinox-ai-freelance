import { motion } from 'framer-motion'
import { fadeInUp } from '@/utils/motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface MotionCardProps {
  children: React.ReactNode
  className?: string
  index?: number
}

export function MotionCard({ children, className = '', index = 0 }: MotionCardProps) {
  const reduced = useReducedMotion()

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={reduced ? undefined : fadeInUp}
      custom={index}
      whileHover={reduced ? undefined : { scale: 1.02, boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.04)' }}
      whileTap={reduced ? undefined : { scale: 0.99 }}
      transition={{ duration: 0.35, ease: [0.33, 1, 0.68, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
