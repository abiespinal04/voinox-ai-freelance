import { motion } from 'framer-motion'
import { fadeInUp } from '@/utils/motion'

type HeadingLevel = 'h1' | 'h2' | 'h3'

interface SectionTitleProps {
  level?: HeadingLevel
  title: string
  subheading?: string
  className?: string
  maxWidth?: boolean
}

const headingClasses: Record<HeadingLevel, string> = {
  h1: 'text-display-lg md:text-display-xl font-semibold tracking-tight text-slate-900',
  h2: 'text-section md:text-section-md font-semibold tracking-tight text-slate-900',
  h3: 'text-subheading-lg md:text-2xl font-semibold tracking-tight text-slate-900',
}

export function SectionTitle({
  level = 'h2',
  title,
  subheading,
  className = '',
  maxWidth = true,
}: SectionTitleProps) {
  const Tag = level
  const wrapperClass = maxWidth ? 'max-w-3xl' : ''

  return (
    <motion.header
      className={`${wrapperClass} ${className}`}
      initial="hidden"
      whileInView="visibleNoDelay"
      viewport={{ once: true, margin: '-80px' }}
      variants={fadeInUp}
    >
      <Tag className={headingClasses[level]}>{title}</Tag>
      {subheading && (
        <p className="mt-5 text-body md:text-body-lg text-slate-500 leading-relaxed max-w-2xl">
          {subheading}
        </p>
      )}
    </motion.header>
  )
}
