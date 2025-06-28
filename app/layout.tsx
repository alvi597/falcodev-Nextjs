import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Falco Dev | Home | Website development, Software development, Mobile app development',
  description: 'Developed By Hasnain',
  generator: 'Falco Dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
