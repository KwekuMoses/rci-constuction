import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import { fetchServiceData } from '@/utils/fetchData'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
  }) {


  const servicesData = await fetchServiceData()


  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer servicesData={servicesData} />
      </body>
    </html>
  )
}
