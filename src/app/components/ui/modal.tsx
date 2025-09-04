'use client'
import * as React from 'react'
import { createPortal } from 'react-dom'
import { cn } from '@/lib/utils'
import { CrossIcon } from '../icons/Cross'
import { ColorBlobs } from './color-blobs'

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
        className="fixed inset-0 z-[70] flex items-center justify-center"
        role="dialog"
        aria-modal="true"
        aria-label={title}
      >
        <div
          className="absolute inset-0 [background:var(--color-bg)]"
          onClick={onClose}
          aria-hidden="true"
        />

        <div
          className={cn(
            'relative z-[71] mx-auto h-full w-full md:mt-20 md:max-w-[410px]',
            'overflow-hidden rounded-[28px]',
            '[background:var(--color-bg)]',
            'p-0',
            className,
          )}
        >
          <ColorBlobs
            items={[
              {
                preset: 'blue',
                size: 'sm',
                className: 'md:hidden top-[213px] -left-[85px]',
              },
              {
                preset: 'violet',
                size: 'sm',
                className: 'md:hidden bottom-[40px] -right-[97px]',
              },
            ]}
          />
          <button
            onClick={onClose}
            aria-label="Закрыть"
            className="absolute top-8 right-8 z-20 inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-md hover:bg-white/10"
          >
            <CrossIcon />
          </button>

          {title && (
            <h2 className="mb-4 text-center text-2xl font-bold uppercase">
              {title}
            </h2>
          )}
          <div className="relative z-10 h-max md:h-[491px]">{children}</div>
        </div>
      </div>
    ) : null,
    document.body,
  )
}
