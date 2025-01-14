import { CertificationsSection } from "@/components/certifications-section"
import { BenefitsSection } from "@/components/benefits-section"
import { HeroSection } from "@/components/hero-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className=" w-full gap-44 flex flex-col justify-between items-center">
      <HeroSection />
      <CertificationsSection />
      <BenefitsSection />
      <Footer />
    </main>
  )
}

