import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import './globals.css'

const manrope = Manrope({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  title: 'DEZI GROUP — Строительная компания | ЖК DEZI PARK в Кокшетау',
  description: 'DEZI GROUP — строительная компания в Кокшетау и Астане. ЖК DEZI PARK — комфорт класса с видом на озеро и эргономичными планировками.',
  keywords: ['Dezi Group', 'DEZI PARK', 'недвижимость Кокшетау', 'купить квартиру Кокшетау', 'строительная компания', 'ЖК Кокшетау', 'квартиры Кокшетау'],
  openGraph: {
    title: 'DEZI GROUP — Строительная компания | ЖК DEZI PARK в Кокшетау',
    description: 'Строительная компания DEZI GROUP — ЖК DEZI PARK комфорт класса в Кокшетау',
    type: 'website',
    locale: 'ru_KZ',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  )
}
