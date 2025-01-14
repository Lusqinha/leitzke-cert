"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { handleWhatsapp } from "@/lib/utils"

export function NavBar() {
  return (
    <nav className="flex w-full items-center justify-between p-6">
      <div className="flex items-center gap-2">
        <Image 
          src="/logo.jpeg" 
          alt="Leitzke Certificação Digital Logo" 
          width={32} 
          height={32} 
          className="rounded-full"
        />
        <span className="text-xl font-semibold text-[#2d2d2d] hidden sm:block ">Leitzke Certificação Digital</span>
      </div>
      
      <div className="hidden md:flex items-center gap-8">
        <Link href="/" className="text-sm font-medium text-[#2d2d2d] hover:text-[#ffc200]">
          Home
        </Link>
        <Link href="#produtos" className="text-sm font-medium text-[#2d2d2d] hover:text-[#ffc200]">
          Produtos
        </Link>
        <Link href="https://www.soluti.com.br/duvidas-e-suporte/suporte-certificado-a3/?srsltid=AfmBOorB6lFGLbQb6QHnVvwwWZDwVKP6zXY1jWyScC2PC54mpnz4W8B3" className="text-sm font-medium text-[#2d2d2d] hover:text-[#ffc200]">
          Drivers
        </Link>
        <Link href="https://linktr.ee/leitzkecert" className="text-sm font-medium text-[#2d2d2d] hover:text-[#ffc200]">
          Contato
        </Link>
      </div>
      
      <Button variant="default" className="bg-[#ffc200] text-[#2d2d2d] hover:bg-[#ffc200]/80 hover:text-white" onClick={() => handleWhatsapp()} >
        Agendar horário
      </Button>
    </nav>
  )
}

