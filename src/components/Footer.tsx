import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Box } from 'lucide-react'
import { fadeIn } from '@/utils/motion'

const links = [
  { to: '/services', label: 'Services' },
  { to: '/process', label: 'Process' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="bg-slate-900 text-slate-300"
    >
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-12">
          <div className="max-w-sm">
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white">
                <Box className="w-4 h-4" strokeWidth={2} />
              </span>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-white leading-tight">
                  Voinox AI Studio
                </span>
                <span className="text-sm text-slate-400 font-medium tracking-wide mt-0.5">
                  Mobile & web development
                </span>
              </div>
            </div>
            <p className="mt-3 text-sm text-slate-400 leading-relaxed">
              Engineering systems that scale. Mobile. Web. Backend. Cloud. AI.
            </p>
          </div>
          <nav className="flex flex-wrap gap-6" aria-label="Footer">
            {links.map(({ to, label }, i) => (
              <motion.div
                key={to}
                custom={i}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Link
                  to={to}
                  className="text-sm text-slate-400 tracking-wide hover:text-white transition-colors"
                >
                  {label}
                </Link>
              </motion.div>
            ))}
          </nav>
        </div>
        <div className="mt-16 pt-8 border-t border-slate-800 text-xs text-slate-500">
          © {new Date().getFullYear()} Voinox AI Studio. All rights reserved.
        </div>
      </div>
    </motion.footer>
  )
}
