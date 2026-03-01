import { type ReactNode } from 'react'

type Variant = 'body-lg' | 'body' | 'meta'

interface TextBlockProps {
  children: ReactNode
  variant?: Variant
  className?: string
  as?: 'p' | 'div' | 'span'
}

const variantClasses: Record<Variant, string> = {
  'body-lg': 'text-body-lg font-normal text-slate-600 leading-relaxed',
  body: 'text-body font-normal text-slate-600 leading-relaxed',
  meta: 'text-meta font-medium text-slate-500 tracking-wide',
}

export function TextBlock({
  children,
  variant = 'body',
  className = '',
  as: Component = 'p',
}: TextBlockProps) {
  return (
    <Component className={`max-w-3xl ${variantClasses[variant]} ${className}`.trim()}>
      {children}
    </Component>
  )
}
