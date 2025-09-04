'use client'
import * as React from 'react'
import { cn } from '@/lib/utils'

type Preset = 'blue' | 'violet'| 'gradient'
type Size = 'sm' | 'lg' | 'md'

type BlobItem = {
  preset: Preset
  size?: Size
  className?: string 
  opacity?: number 
}

const COLOR: Record<Preset, string> = {
  blue: 'rgba(19,184,255,1)',
  violet: 'rgba(167,93,243,1)',
  gradient:'linear-gradient(89.75deg, #5BDBFD 0.26%, #7375FF 51.07%, #DF93FF 100.96%, #E56F8C 126.34%)'

}

const SIZE: Record<Size, string> = {
  sm: 'h-[174px] w-[184px] blur-[289px]',
  lg: 'h-[346px] w-[368px] blur-[579px]',
  md: 'h-[282px] w-[315px] blur-[148px]',
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
        'pointer-events-none absolute inset-0 overflow-visible',
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
            background: COLOR[b.preset],
            opacity: b.opacity ?? 1,
            willChange: 'filter, transform',
            transform: 'translateZ(0)',
          }}
        />
      ))}
    </div>
  )
}
