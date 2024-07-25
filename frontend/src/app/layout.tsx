import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { MainDashboardSidebar } from './_components/main-sidebar'

import { ThemeProvider } from 'next-themes'
import { Toaster } from '@/components/ui/toaster'
import { FooterLayout } from './_components/footer-layout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fibbo frontend solution',
  description: 'Created by @Flaviojcf',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="/fibbo.ico" />
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="grid grid-cols-[16rem_1fr] max-lg:flex max-lg:flex-col">
            <MainDashboardSidebar />
            {children}
            <FooterLayout />
          </div>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  )
}
