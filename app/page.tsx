import { SiteHeader } from '@/components/site-header'
import { HeroSection } from '@/components/hero-section'
import { WelcomeSection } from '@/components/welcome-section'
import { ResidenceSection } from '@/components/residence-section'
import { FeatureStrip } from '@/components/feature-strip'
import { ExperiencesSection } from '@/components/experiences-section'
import { ReviewsSection } from '@/components/reviews-section'
import { SocialFeed } from '@/components/social-feed'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <HeroSection />
      <WelcomeSection />
      <ResidenceSection />
      <FeatureStrip />
      <ExperiencesSection />
      <ReviewsSection />
      <SocialFeed />
      <SiteFooter />
    </main>
  )
}
