import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import { fetchServiceData, fetchNavigationData } from '@/api/api'
import CookieConsent from '@/components/cookie-consent/CookieConsent'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RCI Construction AB',
  description: 'RCI Construction AB is a next-gen application offering comprehensive solutions for construction management.',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
  }) {

  const servicesData = await fetchServiceData()
  const navigationData = await fetchNavigationData()

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
