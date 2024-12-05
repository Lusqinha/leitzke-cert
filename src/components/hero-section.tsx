import { NavBar } from "./nav-bar"
import { HeroContent } from "./hero-content"
import { Stats } from "./stats"
import { PhoneMockup } from "./phone-mockup"

export function HeroSection() {
  return (
    <div className="min-h-screen bg-white text-[#2d2d2d]">
      <NavBar />
      <div className="container px-4 pt-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-12">
            <HeroContent />
            <Stats />
          </div>
          <div className="flex justify-center lg:justify-end">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </div>
  )
}

