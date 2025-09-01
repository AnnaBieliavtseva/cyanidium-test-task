'use client'
import * as React from 'react'
import { cn } from '@/lib/utils'

type Sizes = 'sm' | 'md' | 'lg'

export type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'size'
> & {
  size?: Sizes
  error?: string
  left?: React.ReactNode
  right?: React.ReactNode
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type = 'text',
      size = 'md',
      error,
      left,
      right,
      id,
      required,
      ...props
    },
    ref,
  ) => {
    const sizes: Record<Sizes, string> = {
      sm: 'h-[40px] text-[13px] px-3',
      md: 'h-[46px] text-sm px-4',
      lg: 'h-[52px] text-base px-5',
    }

    const withLeftPad = left ? 'pl-10' : ''
    const needsStar = required && !right
    const withRightPad = right || needsStar ? 'pr-10' : ''

    return (
      <div className={cn('relative', className)}>
        {left && (
          <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-black/50">
            {left}
          </span>
        )}

        <input
          ref={ref}
          id={id}
          type={type}
          required={required}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${id}-error` : undefined}
          className={cn(
            'peer w-full rounded-[14px] bg-white text-[#0C0117] placeholder:text-[#0C0117]/60',
            'border border-transparent shadow-[0_10px_78px_1px_rgba(121,121,121,0.12)]',
            'focus:ring-2 focus:ring-white/30 focus:outline-none',
            sizes[size],
            withLeftPad,
            withRightPad,
            error &&
              'ring-2 ring-[var(--color-accent-500)] focus:ring-[var(--color-accent-500)]',
          )}
          {...props}
        />

        {needsStar && (
          <span
            aria-hidden
            className="pointer-events-none absolute top-5 left-15 z-10 -translate-y-1/2 text-[var(--color-accent-500)] opacity-0 select-none peer-[&:placeholder-shown]:opacity-100"
          >
            *
          </span>
        )}

        {right && (
          <span className="absolute inset-y-0 right-3 flex items-center">
            {right}
          </span>
        )}

        {error && (
          <p
            id={`${id}-error`}
            className="mt-1 text-xs text-[var(--color-accent-500)]"
          >
            {error}
          </p>
        )}
      </div>
    )
  },
)
Input.displayName = 'Input'
