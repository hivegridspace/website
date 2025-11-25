import { HiveGridNavbar } from "@/components/hivegrid/navbar"
import { HeroSection } from "@/components/hivegrid/hero-section"
import { FeaturesSection } from "@/components/hivegrid/features-section"
import { CapabilitiesSection } from "@/components/hivegrid/capabilities-section"
import { OpenSourceSection } from "@/components/hivegrid/open-source-section"
import { RoadmapSection } from "@/components/hivegrid/roadmap-section"
import { CTASection } from "@/components/hivegrid/cta-section"
import { HiveGridFooter } from "@/components/hivegrid/footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <HiveGridNavbar />
      <HeroSection />
      <FeaturesSection />
      <CapabilitiesSection />
      <OpenSourceSection />
      <RoadmapSection />
      <CTASection />
      <HiveGridFooter />
    </main>
  )
}
