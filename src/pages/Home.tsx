import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Smartphone,
  Globe,
  Server,
  Cloud,
  Sparkles,
} from 'lucide-react'
import { Button } from '@/components/Button'
import { SectionTitle } from '@/components/SectionTitle'
import { SectionDivider } from '@/components/SectionDivider'
import { MotionSection } from '@/components/MotionSection'
import { MotionCard } from '@/components/MotionCard'
import { HeroBackground } from '@/components/HeroBackground'
import { heroStagger } from '@/utils/motion'

const services = [
  { title: 'Mobile Engineering', description: 'React Native', to: '/services#mobile', icon: Smartphone },
  { title: 'Web Platforms', description: 'Modern React applications', to: '/services#web', icon: Globe },
  { title: 'Backend & APIs', description: 'High-performance servers in Golang', to: '/services#backend', icon: Server },
  { title: 'Cloud Architecture', description: 'AWS infrastructure & deployment', to: '/services#cloud', icon: Cloud },
  { title: 'AI Integration', description: 'Intelligent features powered by modern AI systems', to: '/services#ai', icon: Sparkles },
]

const authority = [
  'Production-level systems',
  'Scalable architecture',
  'Clean code',
  'Long-term maintainability',
  'Performance-first engineering',
]

const processSteps = [
  'Discovery & Strategy',
  'Architecture & Planning',
  'Build & Iterate',
  'Deployment',
  'Optimization & Scale',
]

const listItemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
}

const processItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
}

export function Home() {
  return (
    <>
      <Helmet>
        <title>Voinox AI Corp — Engineering Systems That Scale</title>
        <meta name="description" content="Voinox AI Corp builds scalable mobile, web, backend, and AI systems. Production-grade engineering for startups and growing businesses." />
        <link rel="canonical" href="/" />
      </Helmet>

      <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden">
        <HeroBackground />
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr,auto] lg:gap-16 xl:gap-24 items-center">
            <div className="max-w-3xl">
              <motion.h1
                custom={0}
                initial="hidden"
                animate="visible"
                variants={heroStagger}
                className="text-display-lg md:text-display-xl font-semibold tracking-tight text-slate-900 leading-tight"
              >
                Engineering Systems That Scale.
              </motion.h1>
              <motion.div
                custom={1}
                initial="hidden"
                animate="visible"
                variants={heroStagger}
                className="mt-6 flex flex-wrap gap-2"
              >
                {['Mobile', 'Web', 'Backend', 'Cloud', 'AI'].map((label) => (
                  <span
                    key={label}
                    className="inline-flex items-center px-3.5 py-1.5 rounded-full text-sm font-medium text-slate-600 bg-slate-100/80 border border-slate-200/60"
                  >
                    {label}
                  </span>
                ))}
              </motion.div>
              <motion.div
                custom={2}
                initial="hidden"
                animate="visible"
                variants={heroStagger}
                className="mt-12 flex flex-wrap gap-4"
              >
                <Button to="/contact">Start Your Project</Button>
                <Button to="/services" variant="secondary">View Services</Button>
              </motion.div>
              <motion.p
                custom={3}
                initial="hidden"
                animate="visible"
                variants={heroStagger}
                className="mt-10 text-sm text-slate-400"
              >
                Production-grade systems for startups and growing businesses.
              </motion.p>
            </div>
            <motion.div
              custom={2}
              initial="hidden"
              animate="visible"
              variants={heroStagger}
              className="hidden lg:flex mt-16 lg:mt-0 justify-center"
            >
              <div className="rounded-2xl border border-slate-200/80 bg-white/80 backdrop-blur-sm shadow-soft p-6 md:p-8">
                <p className="text-xs font-medium text-slate-400 tracking-wide uppercase mb-4">What we build</p>
                <div className="flex flex-wrap gap-3 justify-center">
                  {services.map((s) => {
                    const Icon = s.icon
                    return (
                      <div
                        key={s.title}
                        className="w-14 h-14 rounded-xl bg-slate-50 flex items-center justify-center text-slate-600 border border-slate-100"
                        title={s.title}
                      >
                        <Icon className="w-7 h-7" strokeWidth={1.5} />
                      </div>
                    )
                  })}
                </div>
                <p className="mt-4 text-center text-xs text-slate-500">Mobile · Web · Backend · Cloud · AI</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <SectionDivider />

      <MotionSection className="py-24 md:py-32 bg-slate-50/60">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle
            level="h2"
            title="What We Build"
            subheading="Full-stack engineering for mobile, web, and infrastructure."
          />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            <MotionCard index={0} className="h-full">
              <a
                href="https://meteroff.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group h-full flex flex-col p-6 md:p-8 bg-white rounded-2xl border border-slate-200/80 shadow-soft transition-colors"
              >
                <span className="flex-shrink-0 flex justify-center lg:justify-center">
                  <img src="/meteroff-favicon.png" alt="MeterOff" width={80} height={80} className="rounded-2xl w-16 h-16 object-cover" />
                </span>
                <div className="mt-4 flex flex-1 flex-col min-h-0 text-center">
                  <h3 className="text-subheading-lg font-semibold text-slate-900 group-hover:text-accent transition-colors">MeterOff</h3>
                  <p className="mt-2 flex-1 text-body text-slate-600">Spot Priority — iOS & Android. Points-based parking priority.</p>
                  <span className="mt-4 flex-shrink-0 inline-flex items-center justify-center text-meta font-medium text-accent tracking-wide">
                    meteroff.com
                    <svg className="ml-1 w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </span>
                </div>
              </a>
            </MotionCard>
            {services.map((s, i) => {
              const Icon = s.icon
              return (
              <MotionCard key={s.title} index={i + 1} className="h-full">
                <Link
                  to={s.to}
                  className="group h-full flex flex-col p-6 md:p-8 bg-white rounded-2xl border border-slate-200/80 shadow-soft transition-colors"
                >
                  <span className="flex-shrink-0 w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-600 group-hover:text-accent transition-colors">
                    <Icon className="w-8 h-8" strokeWidth={1.5} />
                  </span>
                  <div className="mt-4 flex flex-1 flex-col min-h-0">
                    <h3 className="text-subheading-lg font-semibold text-slate-900 group-hover:text-accent transition-colors">{s.title}</h3>
                    <p className="mt-2 flex-1 text-body text-slate-600">{s.description}</p>
                    <span className="mt-4 flex-shrink-0 inline-flex items-center text-meta font-medium text-accent tracking-wide">
                      Learn more
                      <svg className="ml-1 w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </MotionCard>
            )
            })}
          </div>
        </div>
      </MotionSection>

      <SectionDivider />

      <MotionSection className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle
            level="h2"
            title="Built for Production"
            subheading="We emphasize architecture and long-term reliability."
          />
          <motion.ul
            className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
            role="list"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
          >
            {authority.map((item) => (
              <motion.li
                key={item}
                variants={listItemVariants}
                className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100"
              >
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                  <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-body font-medium text-slate-900">{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </MotionSection>

      <SectionDivider />

      <MotionSection className="py-24 md:py-32 bg-slate-50/60">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle
            level="h2"
            title="How We Work"
            subheading="Structured process from discovery to scale."
          />
          <motion.ol
            className="mt-16 flex flex-col sm:flex-row flex-wrap gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
          >
            {processSteps.map((step, i) => (
              <motion.li
                key={step}
                variants={processItemVariants}
                className="flex items-center gap-4 flex-1 min-w-[200px] p-4 rounded-2xl bg-white border border-slate-200/80 shadow-soft"
              >
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center text-meta font-semibold">{i + 1}</span>
                <span className="text-body font-medium text-slate-900">{step}</span>
              </motion.li>
            ))}
          </motion.ol>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10"
          >
            <Button to="/process" variant="secondary">See full process</Button>
          </motion.div>
        </div>
      </MotionSection>

      <SectionDivider />

      <MotionSection className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle
            level="h2"
            title="Engagements Starting at $1,999.99"
            subheading="Pricing depends on scope. We focus on serious projects and long-term partnerships."
          />
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10"
          >
            <Button to="/pricing">View pricing</Button>
          </motion.div>
        </div>
      </MotionSection>

      <SectionDivider />

      <MotionSection className="py-24 md:py-32 bg-slate-900">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle
            level="h2"
            title="About Voinox AI Corp"
            subheading="A software engineering studio focused on building scalable mobile, web, and backend systems for startups and growing businesses. Craftsmanship and technical depth at the core."
            className="[&_h2]:text-white [&_p]:text-slate-400"
          />
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10"
          >
            <Button to="/about" className="bg-white !text-slate-900 hover:bg-slate-100">
              Learn more
            </Button>
          </motion.div>
        </div>
      </MotionSection>
    </>
  )
}
