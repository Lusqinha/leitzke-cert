import { Button } from "@/components/ui/button"
import Image from "next/image"
import { redirect } from "next/navigation"

interface CertificationCardProps {
  title: string
  description: string
  imageSrc: string
}

export function CertificationCard({ title, description, imageSrc }: CertificationCardProps) {
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
          onClick={() => redirect('https://api.whatsapp.com/send?phone=555399551783')}
        >
          Saiba Mais
        </Button>
      </div>
      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-[#2d2d2d]">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}

