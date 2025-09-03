'use client'
import { cn } from '@/lib/utils'
import { BuyCta } from '../cta/buy-cta'
import { ColorBlobs } from './color-blobs'

type Badge = { text: string; right?: boolean }
type Feature = { text: string }
type ColorBlobItem = React.ComponentProps<typeof ColorBlobs>['items'][number]

type Variant = 'basic' | 'pro' | 'expert'

export function PricingCard({
  variant,
  title,
  price,
  oldPrice,
  badge,
  subBadge,
  features,
  ctaText = 'Купить',
  className,
  blobs,
  blobsClassName,
}: {
  variant: Variant
  title: string
  price: string
  oldPrice?: string
  badge?: Badge
  subBadge?: Badge
  features: Feature[]
  ctaText?: string
  className?: string
  blobs?: ColorBlobItem[]
  blobsClassName?: string
}) {
  const base =
    'relative flex h-[460px] md:h-[340px] lg:h-[465px] flex-col justify-between rounded-[28px] p-7 md:p-5 xl:p-8.5 shadow-xl border'

  const styles: Record<Variant, string> = {
    basic:
      'border-[var(--color-logo-dark)] bg-[var(--color-bg)] overflow-hidden',
    pro: 'border-white bg-white text-[var(--color-bg)]',
    expert:
      'border-white [background:linear-gradient(-51deg,#88d6ff,40%,#5BDBFD_70%,#7375FF_100%)] text-white',
  }

  const ctaVariant = variant === 'pro' ? 'dark' : 'light'
  const ctaExtra =
    variant === 'expert' ? 'bg-white/90 text-neutral-900 hover:bg-white' : ''

  const isPro = variant === 'pro'

  return (
    <div className={cn(base, styles[variant], className)}>
      {blobs?.length ? (
        <div
          aria-hidden
          className={cn('pointer-events-none absolute inset-0', blobsClassName)}
        >
          <ColorBlobs items={blobs} />
        </div>
      ) : null}
      {badge && (
        <div className="pointer-events-none absolute -top-6 left-1/2 z-10 w-max -translate-x-1/2">
          {badge && (
            <span
              className={cn(
                'gradient-pricing-badge',
                'rounded-[18px] px-[33px] py-[11px] text-[16px] font-bold text-white md:text-sm',
                'inline-flex items-center justify-center',
              )}
            >
              {badge.text}
            </span>
          )}
        </div>
      )}

      <div className="flex flex-col justify-between">
        <div className="flex flex-col">
          <div className="flex items-center justify-between lg:mb-[10px]">
            <h3
              className={cn(
                'text-[16px] font-semibold uppercase md:text-sm xl:text-[20px]',
                isPro ? 'color-dark' : 'text-white',
              )}
            >
              {title}
            </h3>
            {subBadge && (
              <div
                className={cn(
                  'rounded-[30px] border border-transparent px-[32px] py-[8px] md:px-[18px] xl:px-[43px] xl:py-[11px]',

                  variant === 'pro' ? 'bg-dark' : 'bg-white',
                )}
              >
                <span
                  className={cn(
                    'text-gradient text-[16px] font-bold',

                    variant === 'pro'
                      ? 'bg-dark text-gradient-secondary'
                      : 'text-gradient bg-white',
                  )}
                >
                  {subBadge.text}
                </span>
              </div>
            )}
          </div>
          <div className="flex items-baseline justify-between">
            <div
              className={cn(
                'font-alt text-[64px] font-bold md:text-3xl lg:mb-[24px] xl:text-[74px]',
                isPro ? 'color-dark' : 'text-white',
              )}
            >
              {price}
            </div>

            {oldPrice && (
              <div
                className={cn(
                  'font-alt text-xl font-bold line-through md:text-sm lg:text-xl',
                  isPro ? 'color-dark' : 'text-white',
                )}
              >
                {oldPrice}
              </div>
            )}
          </div>

          <ul className="flex flex-col gap-x-[8px] gap-y-[14px]">
            {features.map((f, i) => (
              <li key={i} className="flex items-center gap-[8px]">
                <span
                  className={cn(
                    'inline-block h-5 w-5 shrink-0 rounded-full',
                    variant === 'pro' ? 'bg-dark' : 'bg-white',
                  )}
                />
                <span
                  className={
                    variant === 'pro'
                      ? 'color-dark lg:text-[16px] uppercase text-[16px] font-semibold md:text-xs'
                      : 'lg:text-[16px] text-[16px] font-semibold uppercase md:text-xs'
                  }
                >
                  {f.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <BuyCta
          source={`pricing:${title.toLowerCase()}`}
          variant={ctaVariant}
          size="lg"
          full
          className={ctaExtra}
        >
          {ctaText}
        </BuyCta>
      </div>
    </div>
  )
}
