"use client"

import { CertificationCard } from "./certification-card"
import { certifications } from "@/data/certifications"
import { Button } from "@/components/ui/button"
import { handleWhatsapp } from "@/lib/utils"
import { ArrowUpRight } from 'lucide-react'
import Link from "next/link"

export function CertificationsSection(){ 
  return (
    <section className="bg-white text-[#2d2d2d]" id="produtos">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Nossos Certificados</h2>
          <div className="flex items-center justify-between">
            <p className="text-gray-600">
              Caso precise de ajuda para instalar os drivers, clique no botão ao lado.
            </p>
            <Link href={'https://www.soluti.com.br/duvidas-e-suporte/suporte-certificado-a3/?srsltid=AfmBOorB6lFGLbQb6QHnVvwwWZDwVKP6zXY1jWyScC2PC54mpnz4W8B3'} className="text-[#ffc200] hidden lg:flex items-center gap-2 hover:text-[#ffc200]/90">
              Drivers de instalação <ArrowUpRight className="h-8 w-8" />
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {certifications.map((certification) => (
            <CertificationCard
              key={certification.title}
              title={certification.title}
              description={certification.description}
              imageSrc={certification.imageSrc}
              certificationDetails={certification.certificationDetails}
            />
          ))}
        </div>

        <div className="flex justify-center">
          <Button className="bg-[#ffc200] text-[#2d2d2d] hover:bg-[#ffc200]/90 text-2xl p-8 rounded-xl transition-all ease-in-out duration-300 hover:text-white hover:shadow-xl hover:shadow-yellow-300" onClick={() => handleWhatsapp()}>
            Realizar agendamento
          </Button>
        </div>
      </div>
    </section>
  )
}

