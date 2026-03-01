import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Box } from 'lucide-react'

const nav = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/process', label: 'Process' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
      className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/60"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-3 text-slate-900"
        >
          <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-white">
            <Box className="w-4 h-4" strokeWidth={2} />
          </span>
          <span className="flex flex-col">
            <span className="text-lg md:text-xl font-bold tracking-tight leading-tight">
              Voinox AI Studio
            </span>
            <span className="text-xs font-medium text-slate-500 tracking-wide hidden sm:block">
              Mobile & web development
            </span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8" aria-label="Main">
          {nav.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="relative py-2 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors tracking-wide"
            >
              {location.pathname === to && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className={location.pathname === to ? 'text-accent' : ''}>
                {label}
              </span>
            </Link>
          ))}
        </nav>
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="hidden md:block"
        >
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-2xl bg-slate-900 text-white text-sm font-semibold tracking-wide hover:bg-slate-800 transition-colors shadow-soft"
          >
            Start Your Project
          </Link>
        </motion.div>
        <button
          type="button"
          className="md:hidden p-2 rounded-2xl text-slate-600 hover:bg-slate-100 transition-colors"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.33, 1, 0.68, 1] }}
            className="md:hidden border-t border-slate-200 bg-white/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {nav.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setOpen(false)}
                  className={`py-3 text-sm font-medium tracking-wide ${location.pathname === to ? 'text-accent' : 'text-slate-600'}`}
                >
                  {label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 py-3 rounded-2xl bg-slate-900 text-white text-sm font-semibold tracking-wide text-center"
              >
                Start Your Project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
