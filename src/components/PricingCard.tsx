import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { fadeInUp } from '@/utils/motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface PricingCardProps {
  title: string
  price: string
  description: string
  bullets: readonly string[]
  ctaLabel: string
  ctaTo: string
  index: number
}

export function PricingCard({
  title,
  price,
  description,
  bullets,
  ctaLabel,
  ctaTo,
  index,
}: PricingCardProps) {
  const reduced = useReducedMotion()

  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={reduced ? undefined : fadeInUp}
      custom={index}
      whileHover={
        reduced
          ? undefined
          : {
              y: -2,
              boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.04)',
              transition: { duration: 0.25 },
            }
      }
      className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-soft"
    >
      <h2 className="text-subheading-lg font-semibold tracking-tight text-slate-900">
        {title}
      </h2>
      <p className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">
        {price}
      </p>
      <p className="mt-3 text-body text-slate-600 leading-relaxed">
        {description}
      </p>
      <ul className="mt-6 flex-1 space-y-3" role="list">
        {bullets.map((item) => (
          <li key={item} className="flex items-start gap-2 text-body text-slate-600">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <Link
          to={ctaTo}
          className="inline-flex w-full items-center justify-center rounded-2xl bg-slate-900 px-6 py-3 text-sm font-medium tracking-wide text-white shadow-soft transition-colors hover:bg-slate-800"
        >
          {ctaLabel}
        </Link>
      </div>
    </motion.article>
  )
}
