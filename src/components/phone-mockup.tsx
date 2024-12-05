import Image from "next/image"

export function PhoneMockup() {
  return (
    <div className="relative w-full max-w-[800px]">
      <Image
        src="/hero-img.jpg"
        alt="Mulher asiática segurando um laptop"
        width={800}
        height={400}
        className="rounded-3xl shadow-2xl"
      />
    </div>
  )
}

