import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { InlineWidget } from 'react-calendly'
import { SectionTitle } from '@/components/SectionTitle'
import { MotionSection } from '@/components/MotionSection'
import { fadeInUp } from '@/utils/motion'

const CALENDLY_URL = import.meta.env.VITE_CALENDLY_URL ?? ''

export function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact — Voinox AI Corp</title>
        <meta name="description" content="Book a call. Schedule a time to discuss your mobile, web, backend, or AI project." />
        <link rel="canonical" href="/contact" />
      </Helmet>

      <MotionSection className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeInUp}
          >
            <SectionTitle
              level="h1"
              title="Contact"
              subheading="Book a time below. We'll discuss your project and next steps."
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeInUp}
            className="mt-16"
          >
            {CALENDLY_URL ? (
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-soft min-h-[600px]">
                <InlineWidget
                  url={CALENDLY_URL}
                  styles={{ height: '600px', minHeight: '600px' }}
                />
              </div>
            ) : (
              <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 border-dashed">
                <p className="text-meta text-slate-500">
                  Add your Calendly link: set <code className="bg-slate-200 px-1 rounded">VITE_CALENDLY_URL</code> in <code className="bg-slate-200 px-1 rounded">.env</code> (e.g. https://calendly.com/your-link)
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </MotionSection>
    </>
  )
}
