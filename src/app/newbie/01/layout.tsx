import { Figtree } from "next/font/google";

const figtree = Figtree({ subsets: ['latin'], weight: ['600', '800'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={figtree.className}>{children}</body>
    </html>
  )
}
