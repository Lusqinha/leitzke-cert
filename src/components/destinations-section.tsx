import { Button } from "@/components/ui/button"
import { ArrowUpRight } from 'lucide-react'
import { DestinationCard } from "./destination-card"

export function DestinationsSection() {
  return (
    <section className="py-20 bg-[#2d2d2d] text-white">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Different destinations</h2>
          <div className="flex items-center justify-between">
            <p className="text-gray-300">
              We explore the diverse ways in which this technology can revolutionize work across various industries and fields.
            </p>
            <Button variant="link" className="text-[#ffc200] hidden lg:flex items-center gap-2 hover:text-[#ffc200]/90">
              Discover all applications <ArrowUpRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <DestinationCard
            title="Students"
            description="AI Ally can assist in research, provide learning materials, and answer questions"
            imageSrc="/placeholder.svg"
          />
          <DestinationCard
            title="Professionals"
            description="AI Ally can provide quick access to relevant information and offer data analysis insights"
            imageSrc="/placeholder.svg"
          />
          <DestinationCard
            title="Writers"
            description="AI Ally can help writers by generating ideas, suggesting improvements in writing style"
            imageSrc="/placeholder.svg"
          />
        </div>

        <div className="flex justify-center">
          <Button className="bg-[#ffc200] text-[#2d2d2d] hover:bg-[#ffc200]/90">
            And more than 50 other destinations
          </Button>
        </div>
      </div>
    </section>
  )
}

