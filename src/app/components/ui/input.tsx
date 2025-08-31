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
    { className, type = 'text', size = 'md', error, left, right, id, ...props },
    ref,
  ) => {
    const sizes: Record<Sizes, string> = {
      sm: 'h-9 text-xs px-3',
      md: 'h-11 text-sm px-3.5',
      lg: 'h-12 text-base px-4',
    }

    const withLeftPad = left ? 'pl-10' : ''
    const withRightPad = right ? 'pr-10' : ''

    return (
      <div className={cn('relative', className)}>
        {left && (
          <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-white/60">
            {left}
          </span>
        )}

        <input
          ref={ref}
          id={id}
          type={type}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${id}-error` : undefined}
          className={cn(
                    'w-full rounded-[999px] border border-white/15 bg-white/90 text-neutral-900 placeholder:text-neutral-500',
            'shadow-[0_1px_0_rgba(255,255,255,.3),0_-1px_0_rgba(0,0,0,.12)_inset]',
            'focus-visible:ring-2 focus-visible:ring-[var(--color-brand-500)] focus-visible:outline-none',
            sizes[size],
            withLeftPad,
            withRightPad,
            'dark:bg-white dark:text-neutral-900',
            error &&
              'border-[var(--color-accent-500)] ring-1 ring-[var(--color-accent-500)]',
          )}
          {...props}
        />

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
