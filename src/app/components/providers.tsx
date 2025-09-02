'use client'

import { Toaster } from 'sonner'
import { ThemeProvider } from './theme-provider'
import { ModalProvider } from './ui/modal-provider'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Toaster
        position="bottom-center"
        richColors
        closeButton
        theme="system"
        toastOptions={{ duration: 3000, className: 'rounded-2xl' }}
      />
      <ModalProvider>{children}</ModalProvider>
    </ThemeProvider>
  )
}
