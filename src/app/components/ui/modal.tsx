'use client'
import * as React from 'react'
import { createPortal } from 'react-dom'
import { cn } from '@/lib/utils'

type ModalProps = {
  open: boolean
  onClose: () => void
  title?: string
  className?: string
  children: React.ReactNode
}

export function Modal({
  open,
  onClose,
  title,
  className,
  children,
}: ModalProps) {
  const ref = React.useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = React.useState(false)

  
  React.useEffect(() => setMounted(true), [])


  React.useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

 
  React.useEffect(() => {
    if (!open) return
    const prev = document.documentElement.style.overflow
    document.documentElement.style.overflow = 'hidden'
    return () => {
      document.documentElement.style.overflow = prev
    }
  }, [open])

  if (!mounted) return null
  return createPortal(
    open ? (
      <div
        className="fixed inset-0 z-[70] flex items-center justify-center p-4"
        role="dialog"
        aria-modal="true"
        aria-label={title}
      >
  
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
          aria-hidden="true"
        />

 
        <div
          ref={ref}
          className={cn(
            'relative w-full max-w-[520px] rounded-[24px] border border-white/10 p-6 text-white',
            'shadow-[0_0_40px_rgba(255,255,255,.06)_inset] [background:radial-gradient(120%_120%_at_50%_0%,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.02)_60%,rgba(0,0,0,0.5)_100%)]',
            className,
          )}
        >
          {/* close */}
          <button
            onClick={onClose}
            aria-label="Закрыть"
            className="absolute top-4 right-4 inline-flex h-8 w-8 items-center justify-center rounded-md hover:bg-white/10"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M6 6l12 12M18 6l-12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>

          {title && (
            <h2 className="mb-4 text-center text-xl font-extrabold uppercase">
              {title}
            </h2>
          )}
          {children}
        </div>
      </div>
    ) : null,
    document.body,
  )
}
