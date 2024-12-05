import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Leitzke Certificação Digital",
  description: "A Leitzke Certificação Digital oferece soluções seguras e rápidas para certificados digitais A1, A3 Token e A3 Cartão, atendendo às necessidades de empresas e profissionais.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
