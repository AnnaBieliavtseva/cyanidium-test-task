'use client'
import { cn } from '@/lib/utils'
import { BuyCta } from '../cta/buy-cta';

type Badge = { text: string; right?: boolean }
type Feature = { text: string }

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
}) {

  const base =
    'relative flex h-full flex-col justify-between rounded-[22px] p-5 shadow-xl border'

  
  const styles: Record<Variant, string> = {
    basic:
      'border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,.06),rgba(255,255,255,.02))] text-white',
    pro: 'border-black/10 bg-white text-neutral-900 shadow-[0_20px_60px_rgba(0,0,0,.25)]',
    expert:
      'border-white/15 [background:linear-gradient(180deg,#88d6ff,40%,#9ba5ff_70%,#b2a7ff_100%)] text-white',
  }

  const ctaVariant = variant === 'pro' ? 'accent' : 'light' 
  const ctaExtra =
    variant === 'expert' ? 'bg-white/90 text-neutral-900 hover:bg-white' : ''

  return (
    <div className={cn(base, styles[variant], className)}>
     
      {(badge || subBadge) && (
        <div className="absolute top-[-14px] right-5 left-5 flex items-center justify-between">
          {badge && (
            <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
              {badge.text}
            </span>
          )}
          {subBadge && (
            <span className="ml-auto rounded-full bg-black/70 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
              {subBadge.text}
            </span>
          )}
        </div>
      )}


      <div className="space-y-4">
        <h3 className="text-xs uppercase opacity-75">{title}</h3>

        <div className="flex items-end gap-3">
          <div className="text-5xl leading-none font-extrabold">{price}</div>
          {oldPrice && (
            <div className="pb-1 text-sm line-through opacity-70">
              {oldPrice}
            </div>
          )}
        </div>

        <ul className="space-y-2 text-sm">
          {features.map((f, i) => (
            <li key={i} className="flex items-start gap-2">
              <span
                className={cn(
                  'mt-[7px] inline-block h-2 w-2 rounded-full',
                  variant === 'pro' ? 'bg-neutral-900' : 'bg-white',
                )}
              />
              <span
                className={
                  variant === 'pro' ? 'text-neutral-800' : 'text-white/90'
                }
              >
                {f.text}
              </span>
            </li>
          ))}
        </ul>
      </div>

   
      <div className="mt-5">
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
