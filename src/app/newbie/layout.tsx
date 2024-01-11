import { Barlow } from "next/font/google";

const barlow = Barlow({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={barlow.className}>{children}</body>
    </html>
  )
}
