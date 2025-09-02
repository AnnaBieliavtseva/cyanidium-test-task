import type { Metadata, Viewport } from 'next'
import './globals.css'
import { site } from '@/lib/site'
import { cn } from '@/lib/utils'
import { logo, manrope, raleway } from './fonts'
import { Header } from './components/layout/header'
import Providers from './components/providers'
import { Suspense } from 'react'
import Loading from './loading'

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.name, template: `%s — ${site.name}` },
  description: site.description,
  openGraph: {
    type: 'website',
    url: site.url,
    siteName: site.name,
  },
  alternates: {
    canonical: site.url,
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
    { color: '#ffffff' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body
        className={cn(
          raleway.variable,
          manrope.variable,
          logo.variable,
          'flex min-h-dvh flex-col font-sans',
        )}
      >
        <Providers>
          <Header />
          <Suspense fallback={<Loading />}></Suspense>
          {children}
        </Providers>
      </body>
    </html>
  )
}
