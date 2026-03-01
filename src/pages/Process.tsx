import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { SectionTitle } from '@/components/SectionTitle'
import { TextBlock } from '@/components/TextBlock'
import { Button } from '@/components/Button'
import { MotionSection } from '@/components/MotionSection'
import { fadeInUp } from '@/utils/motion'

const steps = [
  { number: 1, title: 'Discovery & Strategy', description: 'We align on goals, constraints, and success criteria. Clear scope and timeline from day one.' },
  { number: 2, title: 'Architecture & Planning', description: 'Technical design, stack decisions, and milestones. No surprises later.' },
  { number: 3, title: 'Build & Iterate', description: 'Incremental delivery with feedback loops. You see progress; we maintain quality.' },
  { number: 4, title: 'Deployment', description: 'Production-ready infrastructure, CI/CD, and launch. We own the path to go-live.' },
  { number: 5, title: 'Optimization & Scale', description: 'Monitoring, performance, and scaling. Built for the long term.' },
]

export function Process() {
  return (
    <>
      <Helmet>
        <title>Process — Voinox AI Corp</title>
        <meta name="description" content="Our engineering process: discovery, architecture, build, deployment, and scale. Structured and transparent." />
        <link rel="canonical" href="/process" />
      </Helmet>

      <MotionSection className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle
            level="h1"
            title="Our Process"
            subheading="Structured, transparent, and built for long-term partnerships."
          />
          <ol className="mt-20 space-y-12 md:space-y-16">
            {steps.map((step, i) => (
              <motion.li
                key={step.number}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                variants={fadeInUp}
                custom={i}
                className="flex gap-6 md:gap-10"
              >
                <span className="flex-shrink-0 w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center text-body font-semibold">
                  {step.number}
                </span>
                <div className="flex-1 min-w-0">
                  <h2 className="text-subheading-lg md:text-section font-semibold tracking-tight text-slate-900">
                    {step.title}
                  </h2>
                  <TextBlock variant="body-lg" className="mt-4">
                    {step.description}
                  </TextBlock>
                </div>
              </motion.li>
            ))}
          </ol>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <Button to="/contact">Get in touch</Button>
          </motion.div>
        </div>
      </MotionSection>
    </>
  )
}
