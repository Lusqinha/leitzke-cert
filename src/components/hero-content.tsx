import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

export function HeroContent() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#2d2d2d]">
        Certificação Digital Confiável e Eficiente
      </h1>
      <p className="text-lg text-gray-600 max-w-[600px]">
        A Leitzke Certificação Digital oferece soluções seguras e rápidas para certificados digitais A1, A3 Token e A3 Cartão, atendendo às necessidades de empresas e profissionais.
      </p>
      <div className="flex items-center gap-4">
        <Button className="bg-[#ffc200] text-[#2d2d2d] hover:bg-[#ffc200]/90">
          Solicitar Certificado <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        <Button variant="link" className="text-[#2d2d2d] hover:text-[#ffc200]">
          Saiba Mais
        </Button>
      </div>
    </div>
  )
}

