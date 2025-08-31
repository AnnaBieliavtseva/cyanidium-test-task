'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'
import * as React from 'react'

type Variants =
  | 'primary'
  | 'accent'
  | 'light'
  | 'ghost'
  | 'outline'
  | 'gradient'
type Sizes = 'sm' | 'md' | 'lg' | 'xl'

type BaseProps = {
  variant?: Variants
  size?: Sizes
  full?: boolean
  rightBadge?: string
  leftIcon?: React.ReactNode
  loading?: boolean
  className?: string
  children?: React.ReactNode
}

type AsButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>
type AsLinkProps = Omit<React.ComponentProps<typeof Link>, 'href'> & {
  href: string
}

type ButtonProps = BaseProps & (AsButtonProps | AsLinkProps)

export function Button(props: ButtonProps) {
  const {
    variant = 'primary',
    size = 'md',
    full,
    rightBadge,
    leftIcon,
    loading,
    className,
    children,
    ...rest
  } = props as BaseProps & (AsButtonProps | AsLinkProps)

  const base =
    'inline-flex items-center justify-center cursor-pointer gap-2 rounded-[999px] font-semibold transition-colors ' +
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ' +
    'focus-visible:ring-[var(--color-brand-500)] disabled:opacity-50 disabled:cursor-not-allowed'

  const sizes: Record<Sizes, string> = {
    sm: 'h-9 px-4 text-xs',
    md: 'h-10 px-4 text-sm',
    lg: 'h-12 px-6 text-base',
    xl: 'h-14 px-7 text-base',
  }

  const variants: Record<Variants, string> = {
    primary: 'bg-[var(--color-brand-500)] text-white hover:brightness-110',
    accent: 'bg-[var(--color-accent-500)] text-white hover:brightness-110',
    light:
      'bg-white text-neutral-900 hover:bg-white/90 shadow-[0_1px_0_rgba(255,255,255,.3),0_-1px_0_rgba(0,0,0,.15)_inset]',
    ghost: 'bg-transparent text-white hover:bg-white/10',
    outline: 'border border-white/20 text-white hover:bg-white/5',
    gradient:
      '[background:var(--gradient-primary)] text-white hover:brightness-110',
  }

  const classes = cn(
    base,
    sizes[size],
    variants[variant],
    full && 'w-full',
    className,
  )

  if ('href' in rest && typeof rest.href === 'string') {
    const linkProps = rest as AsLinkProps
    return (
      <Link {...linkProps} className={classes} aria-busy={loading || undefined}>
        {leftIcon && <span className="shrink-0">{leftIcon}</span>}
        <span className="whitespace-nowrap">{children}</span>
        {rightBadge && (
          <span className="ml-3 inline-flex h-[2.2em] min-w-[2.2em] items-center justify-center rounded-full bg-[var(--color-accent-500)] px-2 text-[0.85em] leading-none text-white">
            {rightBadge}
          </span>
        )}
      </Link>
    )
  }

  const buttonProps = rest as AsButtonProps
  return (
    <button
      {...buttonProps}
      className={classes}
      aria-busy={loading || undefined}
    >
      {leftIcon && <span className="shrink-0">{leftIcon}</span>}
      <span className="whitespace-nowrap">{children}</span>
      {rightBadge && (
        <span className="ml-3 inline-flex h-[2.2em] min-w-[2.2em] items-center justify-center rounded-full bg-[var(--color-accent-500)] px-2 text-[0.85em] leading-none text-white">
          {rightBadge}
        </span>
      )}
    </button>
  )
}
