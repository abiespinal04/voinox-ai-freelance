import { Helmet } from 'react-helmet-async'
import { SectionTitle } from '@/components/SectionTitle'
import { PricingCard } from '@/components/PricingCard'
import { MotionSection } from '@/components/MotionSection'

const MOBILE_BULLETS = [
  'React Native',
  'Backend + API integration',
  'Cloud infrastructure setup',
  'App Store / Play Store guidance',
] as const

const WEB_BULLETS = [
  'Landing pages',
  'SaaS dashboards',
  'Admin portals',
  'SEO-ready builds',
] as const

const CUSTOM_BULLETS = [
  'AI systems',
  'Backend architecture',
  'Cloud infrastructure',
  'Long-term engineering partnerships',
] as const

const tiers = [
  {
    title: 'Mobile App Development',
    price: 'Starting at $1,999',
    description: 'Scalable mobile applications engineered for production.',
    bullets: MOBILE_BULLETS,
    ctaLabel: 'Start Mobile Project',
    ctaTo: '/contact',
  },
  {
    title: 'Web Development',
    price: 'Starting at $599',
    description: 'High-performance websites and web applications built to grow.',
    bullets: WEB_BULLETS,
    ctaLabel: 'Start Web Project',
    ctaTo: '/contact',
  },
  {
    title: 'Custom / AI',
    price: 'Custom Scope',
    description:
      'Advanced systems, AI integrations, and scalable architecture.',
    bullets: CUSTOM_BULLETS,
    ctaLabel: 'Discuss Your Project',
    ctaTo: '/contact',
  },
]

export function Pricing() {
  return (
    <>
      <Helmet>
        <title>Pricing — Voinox AI Corp</title>
        <meta
          name="description"
          content="Mobile from $1,999. Web from $599. Custom and AI projects scoped to your needs. Transparent pricing for serious products."
        />
        <link rel="canonical" href="/pricing" />
      </Helmet>

      <MotionSection className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle
            level="h1"
            title="Pricing"
            subheading="Built for serious products. Transparent pricing. Long-term partnerships."
          />

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tiers.map((tier, i) => (
              <PricingCard
                key={tier.title}
                title={tier.title}
                price={tier.price}
                description={tier.description}
                bullets={tier.bullets}
                ctaLabel={tier.ctaLabel}
                ctaTo={tier.ctaTo}
                index={i}
              />
            ))}
          </div>
        </div>
      </MotionSection>
    </>
  )
}
