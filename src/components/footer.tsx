import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-[#2d2d2d] text-white py-12 w-full flex justify-center">
      <div className="container px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Leitzke Certificação Digital</h3>
            <p className="text-sm text-gray-300">
              Oferecemos soluções confiáveis em certificação digital para empresas e profissionais.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm hover:text-[#ffc200]">Home</Link></li>
              <li><Link href="#produtos" className="text-sm hover:text-[#ffc200]">Produtos</Link></li>
              <li><Link href="/drivers" className="text-sm hover:text-[#ffc200]">Drivers</Link></li>
              <li><Link href="/contato" className="text-sm hover:text-[#ffc200]">Contato</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-[#ffc200]" />
                <span className="text-sm">Rua Exemplo, 123 - Cidade, Estado</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-[#ffc200]" />
                <span className="text-sm">(00) 1234-5678</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-[#ffc200]" />
                <span className="text-sm">contato@leitzkecert.com</span>
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <Link href="#" className="text-white hover:text-[#ffc200]">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white hover:text-[#ffc200]">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white hover:text-[#ffc200]">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Leitzke Certificação Digital. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

