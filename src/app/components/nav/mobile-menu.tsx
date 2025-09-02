'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { MenuIcon } from '../icons/Menu'
import { CrossIcon } from '../icons/Cross'
import { BuyCta } from '../cta/buy-cta'
import { ColorBlobs } from '../ui/color-blobs'
import { NAV_ITEMS } from './items'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

export function MobileMenu() {
  const [open, setOpen] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : ''
  }, [open])

  const linkBase = 'rounded-md px-2 py-2 hover:bg-white/10 transition-colors'

  return (
    <>
      <button
        aria-label={open ? 'Close menu' : 'Open menu'}
        onClick={() => setOpen((v) => !v)}
        className="relative z-[60] inline-flex h-8 w-8 items-center justify-center text-white hover:bg-white/10 md:hidden"
      >
        {open ? (
          <CrossIcon className="h-5 w-5" />
        ) : (
          <MenuIcon className="h-9 w-9" />
        )}
      </button>
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      <div
        ref={panelRef}
        className={`fixed top-0 right-0 z-50 h-full w-full transform-gpu bg-[var(--color-bg)] p-6 text-white shadow-xl transition-transform duration-300 ease-out md:hidden ${open ? 'translate-x-0' : 'translate-x-full'} `}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <ColorBlobs
          items={[
            {
              preset: 'blue',
              size: 'sm',
              className: 'md:hidden top-40 -left-6',
            },
            {
              preset: 'violet',
              size: 'sm',
              className: 'md:hidden bottom-24 -right-8',
            },
          ]}
        />

        <nav className="mt-10 flex flex-col gap-3 text-base">
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(linkBase, active && 'bg-white/15')}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            )
          })}

          <BuyCta
            source="mobile-menu"
            variant="gradient"
            full
            className="mt-4 max-w-[220px] md:hidden"
          />
        </nav>
      </div>
    </>
  )
}
