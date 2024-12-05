import { CertificationsSection } from "@/components/certifications-section"
import { BenefitsSection } from "@/components/benefits-section"
import { HeroSection } from "@/components/hero-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className=" w-full flex flex-col justify-center items-center">
      <HeroSection />
      <CertificationsSection />
      <BenefitsSection />
      <Footer />
    </main>
  )
}

