import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Smartphone, Globe, Server, Cloud, Sparkles } from 'lucide-react'
import { TextBlock } from '@/components/TextBlock'
import { Button } from '@/components/Button'
import { MotionSection } from '@/components/MotionSection'
import { fadeInUp } from '@/utils/motion'

const services = [
  { id: 'mobile', title: 'Mobile Engineering', subtitle: 'React Native', body: 'React Native mobile applications built for performance and maintainability. We ship production apps for iOS and Android that scale with your user base.', icon: Smartphone },
  { id: 'web', title: 'Web Platforms', subtitle: 'Modern React applications', body: 'Fast, accessible web applications with React and TypeScript. SEO-friendly, responsive, and built for growth.', icon: Globe },
  { id: 'backend', title: 'Backend & APIs', subtitle: 'High-performance servers in Golang', body: 'Robust APIs and services in Golang and Node. Designed for reliability, observability, and scale.', icon: Server },
  { id: 'cloud', title: 'Cloud Architecture', subtitle: 'AWS infrastructure & deployment', body: 'Infrastructure as code, CI/CD, and deployment pipelines on AWS. Secure, scalable, and cost-conscious.', icon: Cloud },
  { id: 'ai', title: 'AI Integration', subtitle: 'Intelligent features powered by modern AI', body: 'Integration of AI and ML into your products—from APIs to custom models—with a focus on production readiness.', icon: Sparkles },
]

export function Services() {
  return (
    <>
      <Helmet>
        <title>Services — Voinox AI Corp</title>
        <meta name="description" content="Mobile, web, backend, cloud, and AI engineering services. Production-grade systems for startups and growing businesses." />
        <link rel="canonical" href="/services" />
      </Helmet>

      <MotionSection className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <motion.header
            className="max-w-3xl"
            initial="hidden"
            whileInView="visibleNoDelay"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeInUp}
          >
            <h1 className="text-display-lg md:text-display-xl font-semibold tracking-tight text-slate-900">
              Services
            </h1>
            <p className="mt-5 text-body-lg text-slate-500 leading-relaxed">
              Full-stack engineering for product and scale.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['Mobile', 'Web', 'Backend', 'Cloud', 'AI'].map((label) => (
                <span
                  key={label}
                  className="inline-flex items-center px-3.5 py-1.5 rounded-full text-sm font-medium text-slate-600 bg-slate-100/80 border border-slate-200/60"
                >
                  {label}
                </span>
              ))}
            </div>
          </motion.header>
          <div className="mt-24 space-y-20">
            {services.map((s, i) => {
              const Icon = s.icon
              return (
              <motion.article
                key={s.id}
                id={s.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={fadeInUp}
                custom={i * 0.5}
                className="scroll-mt-24 pb-20 first:pt-0 border-b border-slate-200 last:border-0 last:pb-0"
              >
                <div className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-11 h-11 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600">
                    <Icon className="w-5 h-5" strokeWidth={1.5} />
                  </span>
                  <h2 className="text-section md:text-section-md font-semibold tracking-tight text-slate-900">
                    {s.title}
                  </h2>
                </div>
                <p className="mt-3 text-body text-slate-500">
                  {s.subtitle}
                </p>
                <TextBlock variant="body-lg" className="mt-6">
                  {s.body}
                </TextBlock>
              </motion.article>
            )
            })}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <Button to="/contact">Start Your Project</Button>
          </motion.div>
        </div>
      </MotionSection>
    </>
  )
}
