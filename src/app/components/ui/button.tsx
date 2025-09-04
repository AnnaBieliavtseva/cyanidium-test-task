'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'
import * as React from 'react'

type Variants =
  | 'primary'
  | 'dark'
  | 'light'
  | 'modal'
  | 'gradientSecondary'
  | 'gradientHeader'
type Sizes = 'sm' | 'md' | 'lg' | 'xl' | 'xxl'

type BaseProps = {
  variant?: Variants
  size?: Sizes
  full?: boolean
  rightBadge?: string
  leftIcon?: React.ReactNode
  loading?: boolean
  className?: string
  children?: React.ReactNode
  badgeClassName?: string
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
    badgeClassName,
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
    xxl: 'pr-[29px]',
  }

  const base =
    'relative inline-flex items-center justify-center cursor-pointer gap-2 rounded-[40px] font-semibold transition-colors ' +
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ' +
    'focus-visible:ring-[var(--color-brand-500)] disabled:opacity-50 disabled:cursor-not-allowed'

  const sizes: Record<Sizes, string> = {
    sm: 'h-9 px-4 text-xs',
    md: 'h-[47px] md:h-[42px] text-sm lg:text-base md:w-[230px] xl:w-[287px] leading-none',
    lg: 'h-10 text-xs leading-5 w-[190px] ',
    xl: 'h-[60px] md:h-[74px] w-[313px]  text-base',
    xxl: 'h-[68px] w-[268px] text-sm rounded-[40px] md:h-[74px] md:text-[22px]',
  }

  const variants: Record<Variants, string> = {
    primary: 'bg-[var(--color-brand-500)] text-white hover:brightness-110',
    dark: 'bg-[var(--color-bg)] text-white hover:brightness-110',
    light:
      'bg-[var(--color-fg)] text-[var(--color-bg)] hover:bg-white/90  box-shadow: 4px 6px 10px 4px rgba(167, 93, 243, 0.2);',
    modal:
      'bg-[var(--color-fg)] text-[var(--color-bg)] md:text-sm rounded-[10px] border-[2px] border border-transparent [background:linear-gradient(var(--color-fg),var(--color-fg))_padding-box,var(--gradient-secondary)_border-box] hover:bg-white/90',
    gradientSecondary:
      '[background:var(--gradient-secondary)] text-white hover:brightness-110',
    gradientHeader:
      '[background:var(--gradient-secondary)] text-white hover:brightness-110',
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
    <span
      className={cn(
        'bg-[var(--color-accent-500)] text - white pointer-events-none absolute top-1/2 right-0 inline-grid h-full w-15 -translate-y-1/2 place-items-center rounded-[30px] text-xl leading-none font-semibold md:h-18.5 md:w-18.5 md:rounded-[38px]',

        badgeClassName,
      )}
    >
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
