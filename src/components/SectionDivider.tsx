import { motion } from 'framer-motion'

export function SectionDivider() {
  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0.8 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
      className="h-px w-full max-w-2xl mx-auto my-16 md:my-24 bg-gradient-to-r from-transparent via-slate-200 to-transparent"
      aria-hidden
    />
  )
}
