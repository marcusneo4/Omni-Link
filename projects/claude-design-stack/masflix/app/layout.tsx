import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import { Bebas_Neue } from 'next/font/google'
import './globals.css'

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
  display: 'swap',
})

const bebasNeue = Bebas_Neue({
  variable: '--font-bebas',
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'MASFLIX',
  description: 'Our story. Our moments. Our channel.',
  robots: { index: false, follow: false },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${bebasNeue.variable} h-full`}
    >
      <body className="min-h-full bg-[#141414] text-white antialiased">
        {children}
      </body>
    </html>
  )
}
