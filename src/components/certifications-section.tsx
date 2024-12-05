"use client"

import { CertificationCard } from "./certification-card"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from 'lucide-react'
import Link from "next/link"
import { redirect } from "next/navigation"

export function CertificationsSection() {
  return (
    <section className="py-10 bg-white text-[#2d2d2d]" id="produtos">
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
          <CertificationCard
            title="Certificado A1"
            description="Certificado digital armazenado no computador, ideal para empresas e profissionais que precisam de praticidade."
            imageSrc="/CERTIFICADO A1.png"
          />
          <CertificationCard
            title="Certificado A3 Token"
            description="Certificado digital armazenado em dispositivo criptográfico portátil, oferecendo maior segurança e mobilidade."
            imageSrc="/CERTIFICADO A3 TOKEN.png"
          />
          <CertificationCard
            title="Certificado A3 Cartão"
            description="Certificado digital armazenado em cartão inteligente, combinando alta segurança e praticidade."
            imageSrc="/CERTIFICADO A3 CARTÃO.png"
          />
        </div>

        <div className="flex justify-center">
          <Button className="bg-[#ffc200] text-[#2d2d2d] hover:bg-[#ffc200]/90 text-2xl p-8 rounded-xl transition-all ease-in-out duration-300 hover:text-white hover:shadow-xl hover:shadow-yellow-300" onClick={() => redirect('https://api.whatsapp.com/send?phone=555399551783')}>
            Realizar agendamento
          </Button>
        </div>
      </div>
    </section>
  )
}

