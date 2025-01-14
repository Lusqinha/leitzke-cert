import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { CheckCircle } from 'lucide-react'

interface CertificationModalProps {
    isOpen: boolean
    onClose: () => void
    certification: {
        title: string
        fullDescription: string
        benefits: string[]
    }
}

export function CertificationModal({ isOpen, onClose, certification }: CertificationModalProps) {
    const handleWhatsAppClick = () => {
        window.open('https://api.whatsapp.com/send?phone=555399551783', '_blank')
    }

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-2xl">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-[#2d2d2d]">
                        {certification.title}
                    </DialogTitle>
                    <DialogDescription className="text-gray-600 mt-4">
                        {certification.fullDescription}
                    </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                    <h4 className="font-semibold text-[#2d2d2d]">Principais benefícios:</h4>
                    <ul className="space-y-2">
                        {certification.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start gap-2">
                                <CheckCircle className="h-5 w-5 text-[#ffc200] flex-shrink-0 mt-0.5" />
                                <span className="text-gray-600">{benefit}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="flex justify-end mt-6">
                        <Button
                            className="bg-[#ffc200] text-[#2d2d2d] hover:bg-[#ffc200]/90"
                            onClick={handleWhatsAppClick}
                        >
                            Entrar em Contato
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}

