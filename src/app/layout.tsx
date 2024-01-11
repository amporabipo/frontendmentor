import type { Metadata } from 'next'
import { Barlow } from 'next/font/google'
import './globals.css'

const inter = Barlow({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

export const metadata: Metadata = {
  title: 'Frontend Mentor Andrés R.W.',
  description: 'Challenges frontendmentor',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
