import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export function HeroBackground() {
  const reduced = useReducedMotion()
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/90 via-white/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-hero" />
      <motion.div
        animate={reduced ? { opacity: 0.6 } : { opacity: [0.5, 0.85, 0.5] }}
        transition={reduced ? {} : { duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[450px] rounded-full bg-accent/20 blur-[120px]"
      />
      <motion.div
        animate={reduced ? { opacity: 0.3 } : { opacity: [0.2, 0.4, 0.2] }}
        transition={reduced ? {} : { duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full bg-accent/15 blur-[100px] translate-x-1/3 translate-y-1/3"
      />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,.6) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,.6) 1px, transparent 1px)
          `,
          backgroundSize: '56px 56px',
        }}
      />
    </div>
  )
}
