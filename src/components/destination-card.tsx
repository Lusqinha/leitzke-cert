import { Button } from "@/components/ui/button"
import Image from "next/image"

interface DestinationCardProps {
  title: string
  description: string
  imageSrc: string
}

export function DestinationCard({ title, description, imageSrc }: DestinationCardProps) {
  return (
    <div className="space-y-4">
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
        />
        <Button 
          variant="secondary" 
          className="absolute top-4 left-4 bg-[#ffc200] text-[#2d2d2d] hover:bg-[#ffc200]/90"
        >
          Try it now
        </Button>
      </div>
      <div className="space-y-2">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  )
}

