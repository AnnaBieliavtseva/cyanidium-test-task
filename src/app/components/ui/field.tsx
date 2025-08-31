// src/components/ui/field.tsx
import * as React from 'react'
import { cn } from '@/lib/utils'

export function Label(props: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      {...props}
      className={cn('mb-1 block text-xs text-white/70', props.className)}
    />
  )
}

export function Field({ className, ...props }: React.ComponentProps<'div'>) {
  return <div {...props} className={cn('space-y-1', className)} />
}
