import { type ButtonHTMLAttributes } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { buttonHover } from '@/utils/motion'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  to?: string
  children: React.ReactNode
  className?: string
}

const styles: Record<ButtonVariant, string> = {
  primary:
    'bg-slate-900 text-white hover:bg-slate-800 shadow-soft hover:shadow-glow-subtle',
  secondary:
    'bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 hover:border-slate-300',
  ghost: 'text-slate-600 hover:text-slate-900 hover:bg-slate-100',
}

const baseClasses =
  'inline-flex items-center justify-center px-6 py-3 rounded-2xl text-meta font-medium tracking-wide transition-shadow duration-300'

const MotionLink = motion.create(Link)

export function Button({
  variant = 'primary',
  to,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const combined = `${baseClasses} ${styles[variant]} ${className}`.trim()

  if (to) {
    return (
      <MotionLink
        to={to}
        className={combined}
        variants={buttonHover}
        initial="rest"
        whileHover="hover"
        whileTap="tap"
      >
        {children}
      </MotionLink>
    )
  }

  const { onClick, disabled, ...rest } = props
  return (
    <motion.button
      type="button"
      className={combined}
      variants={buttonHover}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      onClick={onClick}
      disabled={disabled}
      {...(rest as Record<string, unknown>)}
    >
      {children}
    </motion.button>
  )
}
