'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'
import * as React from 'react'

type Variants =
  | 'primary'
  | 'accent'
  | 'light'
  | 'ghost'
  | 'gradientSecondary'
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

  const padWithBadge: Record<Sizes, string> = {
    sm: 'pr-10',
    md: 'pr-12',
    lg: 'pr-12',
    xl: 'pr-14',
  }

  const base =
    'relative inline-flex items-center justify-center cursor-pointer gap-2 rounded-[999px] font-semibold transition-colors ' +
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ' +
    'focus-visible:ring-[var(--color-brand-500)] disabled:opacity-50 disabled:cursor-not-allowed'

  const sizes: Record<Sizes, string> = {
    sm: 'h-9 px-4 text-xs',
    md: 'h-10 px-4 text-sm',
    lg: 'h-12.5 px-6 text-sm font-semibold',
    xl: 'h-15 px-7 text-base',
  }

  const variants: Record<Variants, string> = {
    primary: 'bg-[var(--color-brand-500)] text-white hover:brightness-110',
    accent: 'bg-[var(--color-accent-500)] text-white hover:brightness-110',
    light:
      'bg-[var(--color-fg)] text-[var(--color-bg)] hover:bg-white/90 shadow-[0_1px_0_rgba(255,255,255,.3),0_-1px_0_rgba(0,0,0,.15)_inset]',
    ghost: 'bg-transparent text-white hover:bg-white/10',
    gradientSecondary:
      '[background:var(--gradient-secondary)] text-white hover:brightness-110',
    gradient:
      '[background:var(--gradient-primary)] text-white hover:brightness-110',
  }

  const classes = cn(
    base,
    sizes[size],
    variants[variant],
    full && 'w-full',
    rightBadge && padWithBadge[size], 
    className,
  )

  const Badge = rightBadge ? (
    <span className="pointer-events-none absolute top-1/2 right-0 inline-grid w-15 -translate-y-1/2 place-items-center rounded-full bg-[var(--color-accent-500)] h-full  font-semibold text-xl leading-none text-white shadow-[0_4px_14px_rgba(0,0,0,.25)] ">
      {rightBadge}
    </span>
  ) : null

  if ('href' in rest && typeof rest.href === 'string') {
    const linkProps = rest as AsLinkProps
    return (
      <Link {...linkProps} className={classes} aria-busy={loading || undefined}>
        {leftIcon && <span className="shrink-0">{leftIcon}</span>}
        <span className="whitespace-nowrap">{children}</span>
        {Badge}
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
      {Badge}
    </button>
  )
}
