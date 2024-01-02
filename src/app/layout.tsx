import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import { fetchServiceData, fetchNavigationData } from '@/api/wordpress/api'
import CookieConsent from '@/components/cookie-consent/CookieConsent'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RCI Bygg AB',
  description: 'RCI BYGG AB - Vi utför professionella och effektiva lösningar inom håltagning, sågning och rivning.',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
  }) {

  const servicesData = await fetchServiceData()

  const navigationData_ = await fetchNavigationData()
  const navigationData = navigationData_.data.pages.nodes

  return (
    <html lang="en">
      <body className={inter.className}>
        <Header servicesData={servicesData} navigationData={navigationData} />
        {children}
        <Footer servicesData={servicesData} />
        <CookieConsent />
      </body>
    </html>
  )
}
