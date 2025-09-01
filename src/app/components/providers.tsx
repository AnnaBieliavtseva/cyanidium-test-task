'use client'

import { ThemeProvider } from './theme-provider'
import { ModalProvider } from './ui/modal-provider'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <ModalProvider>{children}</ModalProvider>
    </ThemeProvider>
  )
}
