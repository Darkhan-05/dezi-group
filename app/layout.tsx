import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import './globals.css'

const manrope = Manrope({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  title: 'KomfortStroy2020 — Современные жилые комплексы и кирпичные дома в Кокшетау',
  description: 'ТОО «КомфортСтрой2020» — надежный застройщик в Кокшетау. Строительство ЖК CHICAGO, TURKESTAN III, BOSTON и качественных кирпичных домов.',
  keywords: ['КомфортСтрой2020', 'KomfortStroy2020', 'недвижимость Кокшетау', 'купить квартиру Кокшетау', 'строительство кирпичных домов', 'ЖК CHICAGO', 'ЖК TURKESTAN III', 'ЖК BOSTON'],
  openGraph: {
    title: 'KomfortStroy2020 — Современные жилые комплексы и кирпичные дома в Кокшетау',
    description: 'Строительная компания KomfortStroy2020 — качественные ЖК и кирпичные дома в Кокшетау',
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
