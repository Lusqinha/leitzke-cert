"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { redirect } from "next/navigation"

export function NavBar() {
  return (
    <nav className="flex items-center justify-between p-6">
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
        <Link href="/drivers" className="text-sm font-medium text-[#2d2d2d] hover:text-[#ffc200]">
          Drivers
        </Link>
        <Link href="/contato" className="text-sm font-medium text-[#2d2d2d] hover:text-[#ffc200]">
          Contato
        </Link>
      </div>

      <Button variant="outline" className="bg-[#ffc200] text-[#2d2d2d] hover:bg-[#ffc200]/90" onClick={() => redirect('https://api.whatsapp.com/send?phone=555399551783')} >
        Agendar horário
      </Button>
    </nav>
  )
}

