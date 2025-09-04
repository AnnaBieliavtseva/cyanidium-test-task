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
    'relative flex min-h-[430px] xl:w-[360px] lg:h-[465px] flex-col  justify-between rounded-[28px] p-8 md:p-6 lg:px-[36px] shadow-[inset_4px_6px_10px_4px_rgba(167,93,243,0.2)]'

  const styles: Record<Variant, string> = {
    basic: 'bg-[var(--color-bg)] md:[px-36px] md:pt-[36px] md:pb-[26px] overflow-hidden',

    pro: 'bg-white text-[var(--color-bg)] px-[28px] min-h-[467px] md:min-h-[466px]',
    expert:
      'border-white gradient-pricing-badge px-[24px] xl:py-[27px] text-white min-h-[466px]',
  }

  const isBasic = variant === 'basic'
  const isPro = variant === 'pro'
  const isExpert = variant ==='expert'
  const ctaVariant = isBasic ? 'light' : 'dark'
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
        <div className="pointer-events-none absolute -top-[21px] lg:-top-[30px] left-1/2 z-10 w-max -translate-x-1/2">
          {badge && (
            <span
              className={cn(
                'gradient-pricing-badge',
                'h-[42px] rounded-[18px] px-[33.5px] text-[16px] leading-none font-bold text-white md:text-base',
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
          <div
            className={cn(
              'flex items-center justify-between lg:mb-[18px]',
              isBasic ? 'mb-8' : 'mb-[18px]',
            )}
          >
            <h3
              className={cn(
                'text-[16px] leading-none font-semibold uppercase md:text-sm xl:text-[20px]',
                isPro ? 'color-dark' : 'text-white',
              )}
            >
              {title}
            </h3>
            {subBadge && (
              <div
                className={cn(
                  'rounded-[30px] border border-transparent px-[33px] py-[8px] md:h-[42px] md:px-[18px] xl:px-[43px]',

                  isPro ? 'bg-dark' : 'bg-white px-[29px] xl:px-[29px]',
                )}
              >
                <span
                  className={cn(
                    'gradient-pricing-badge-text text-[16px] leading-none font-bold',

                    isPro ? 'bg-dark' : 'bg-white',
                  )}
                >
                  {subBadge.text}
                </span>
              </div>
            )}
          </div>
          <div className="mb-7 flex items-baseline justify-between">
            <div
              className={cn(
                'font-alt text-[64px] leading-none font-bold md:text-3xl xl:text-[74px]',
                isPro ? 'color-dark' : 'text-white',
              )}
            >
              {price}
            </div>

            {oldPrice && (
              <div
                className={cn(
                  'font-alt text-xl leading-none font-bold line-through md:text-sm lg:text-xl',
                  isPro ? 'color-dark' : 'text-white',
                )}
              >
                {oldPrice}
              </div>
            )}
          </div>

          <ul className="flex flex-col gap-y-[14px]">
            {features.map((f, i) => (
              <li key={i} className="flex items-center gap-[8px]">
                <span
                  className={cn(
                    'inline-block h-5 w-5 shrink-0 rounded-full',
                    isPro ? 'bg-dark' : 'bg-white',
                  )}
                />
                <span
                  className={
                    isPro
                      ? 'color-dark text-[16px] font-semibold uppercase md:text-xs xl:text-[16px]'
                      : 'text-[16px] font-semibold uppercase md:text-xs xl:text-[16px]'
                  }
                >
                  {f.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='flex flex-col items-center'>
        {isExpert ? (
          <>
           
            <BuyCta
              source={`pricing:${title.toLowerCase()}`}
              variant="dark"
              className="z-10 md:hidden" 
              size="md"
              full
            >
              {ctaText}
            </BuyCta>

           
            <BuyCta
              source={`pricing:${title.toLowerCase()}`}
              variant="light"
              className="z-10 hidden md:block" 
              size="md"
              full
            >
              {ctaText}
            </BuyCta>
          </>
        ) : (
          <BuyCta
            source={`pricing:${title.toLowerCase()}`}
            variant={ctaVariant} 
            className="z-10"
            size="md"
            full
          >
            {ctaText}
          </BuyCta>
        )}
      </div>
    </div>
  )
}
