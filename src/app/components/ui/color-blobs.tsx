'use client'
import * as React from 'react'
import { cn } from '@/lib/utils'

type Preset = 'blue' | 'violet'
type Size = 'sm' | 'lg'

type BlobItem = {
  preset: Preset
  size?: Size
  className?: string
  opacity?: number
}

const COLOR: Record<Preset, { from: string; to: string }> = {
  blue: { from: 'rgba(19,184,255,0.9)', to: 'rgba(19,184,255,0.6)' },
  violet: { from: 'rgba(167,93,243,0.9)', to: 'rgba(167,93,243,0.6)' },
}

const SIZE: Record<Size, string> = {
  sm: 'h-[174px] w-[184px] blur-[80px]',
  lg: 'h-[346px] w-[368px] blur-[120px]',
}

export function ColorBlobs({
  items,
  className,
}: {
  items: BlobItem[]
  className?: string
}) {
  return (
    <div
      aria-hidden
      className={cn(
        'pointer-events-none absolute inset-0 z-10 overflow-hidden',
        className,
      )}
    >
      {items.map((b, i) => {
        const c = COLOR[b.preset]
        const s = SIZE[b.size ?? 'sm']
        return (
          <div
            key={i}
            className={cn(
              'absolute rounded-full',
              'opacity-80',
              s,
              b.className,
            )}
            style={{
              opacity: b.opacity ?? 0.8,
              background: `radial-gradient(closest-side, ${c.from}, ${c.to} 80%, transparent 70%)`,
            }}
          />
        )
      })}
    </div>
  )
}
