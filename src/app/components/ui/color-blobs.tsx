'use client'
import * as React from 'react'
import { cn } from '@/lib/utils'

type Preset = 'blue' | 'violet'
type Size = 'sm' | 'lg'

type BlobItem = {
  preset: Preset
  size?: Size
  className?: string // сюда кидаешь top/left/right/bottom и т.п.
  opacity?: number // по умолчанию 1
}

const COLOR: Record<Preset, string> = {
  blue: 'rgba(19,184,255,1)',
  violet: 'rgba(167,93,243,1)',
}

const SIZE: Record<Size, string> = {
  sm: 'h-[174px] w-[184px] blur-[289px]',
  lg: 'h-[346px] w-[368px] blur-[579px]',
}

export function ColorBlobs({
  items,
  className,
  zIndex = 0,
}: {
  items: BlobItem[]
  className?: string
  zIndex?: number
}) {
  return (
    <div
      aria-hidden
      className={cn(
        'pointer-events-none absolute inset-0',
        className,
      )}
      style={{ zIndex }}
    >
      {items.map((b, i) => (
        <div
          key={i}
          className={cn(
            'absolute rounded-full',
            SIZE[b.size ?? 'sm'],
            b.className,
          )}
          style={{
            backgroundColor: COLOR[b.preset],
            opacity: b.opacity ?? 1,
            willChange: 'filter, transform',
            transform: 'translateZ(0)',
          }}
        />
      ))}
    </div>
  )
}
