import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { SectionTitle } from '@/components/SectionTitle'
import { TextBlock } from '@/components/TextBlock'
import { Button } from '@/components/Button'
import { MotionSection } from '@/components/MotionSection'
import { fadeInUp } from '@/utils/motion'

const pillars = ['Mobile', 'Web', 'Backend', 'Cloud', 'AI']

export function About() {
  return (
    <>
      <Helmet>
        <title>About — Voinox AI Corp</title>
        <meta name="description" content="Voinox AI Corp is a software engineering studio focused on scalable mobile, web, and backend systems. Craftsmanship and technical depth." />
        <link rel="canonical" href="/about" />
      </Helmet>

      <MotionSection className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle
            level="h1"
            title="About Voinox AI Corp"
            subheading="A software engineering studio focused on building scalable mobile, web, and backend systems for startups and growing businesses."
          />
          <div className="mt-16 max-w-3xl space-y-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} custom={0}>
              <TextBlock variant="body-lg">
                We emphasize craftsmanship and technical depth. Every system we build is designed for production: clean architecture, maintainable code, and performance from the start. We work with teams that care about quality and long-term reliability—not quick hacks.
              </TextBlock>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} custom={1}>
              <TextBlock variant="body-lg">
                Our stack spans mobile (React Native), web (React, TypeScript), backend (Golang, Node), cloud (AWS), and AI integration. We choose the right tools for the problem and deliver systems that scale with your business.
              </TextBlock>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={2}
              className="pt-4"
            >
              <p className="text-meta font-medium text-slate-500 tracking-wide mb-3">What we build</p>
              <div className="flex flex-wrap gap-3">
                {pillars.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-xl bg-slate-100 text-body font-medium text-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <Button to="/contact">Start Your Project</Button>
          </motion.div>
        </div>
      </MotionSection>
    </>
  )
}
