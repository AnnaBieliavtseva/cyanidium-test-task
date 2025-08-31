import type { Metadata, Viewport } from 'next'
import './globals.css'
import { site } from '@/lib/site'
import { cn } from '@/lib/utils'
import { logo, manrope, raleway } from './fonts'
import { ThemeProvider } from './components/theme-provider'
import { Header } from './components/layout/header'
import { ModalProvider } from './components/ui/modal-provider'

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.name, template: `%s — ${site.name}` },
  description: site.description,
  openGraph: {
    type: 'website',
    url: site.url,
    siteName: site.name,
    images: [{ url: site.ogImage, width: 1200, height: 630 }],
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
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ModalProvider>
            <Header />
            <main className="container grow">{children}</main>
          </ModalProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
