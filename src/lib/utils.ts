import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function handleWhatsapp() {
  window.open("https://api.whatsapp.com/send?phone=555399551783")
}