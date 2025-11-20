import HeroSection from "@/components/hero-section"
import BundleStats from "@/components/bundle-stats"
import ProjectShowcase from "@/components/project-showcase"
import TechStack from "@/components/tech-stack"
import LearningPath from "@/components/learning-path"
import Testimonials from "@/components/testimonials"
import CTASection from "@/components/cta-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <BundleStats />
      <ProjectShowcase />
      <TechStack />
      <LearningPath />
      <Testimonials />
      <CTASection />
    </main>
  )
}
