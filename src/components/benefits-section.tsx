import { CheckCircle } from 'lucide-react'

export function BenefitsSection() {
  const benefits = [
    "Segurança nas transações eletrônicas",
    "Validade jurídica em documentos digitais",
    "Redução de custos e burocracia",
    "Agilidade em processos empresariais",
    "Conformidade com regulamentações",
    "Acesso a serviços governamentais online"
  ]

  return (
    <section className="py-20">
      <div className="container px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#2d2d2d]">
          Benefícios da Certificação Digital
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-[#ffc200] flex-shrink-0" />
              <p className="text-[#2d2d2d]">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

