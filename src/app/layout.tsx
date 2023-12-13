import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <meta name="format-detection" content="telephone=no, date=no, email=no, address=no" />
      <body className={`${inter.className} bg-[#F4F4F4]`}>{children}</body>
    </html>
  )
}
