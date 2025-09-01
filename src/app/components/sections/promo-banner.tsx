'use client'

import Image from 'next/image'
import { Container } from '../layout/container'
import { BuyCta } from '../cta/buy-cta'
import { ColorBlobs } from '../ui/color-blobs'

export function PromoBanner() {
  return (
    <section>
      <Container bleed>
        <div className="relative overflow-hidden border border-[#36285D] bg-[var(--color-bg)] pb-[114px] md:min-h-[488px]">
          <div className="absolute inset-y-0 left-0 z-0 hidden w-[38%] md:block">
            <Image
              src="/promo-banner.webp"
              alt=""
              fill
              priority
              sizes="(min-width:1024px) 38vw, 40vw"
              className="object-cover"
            />
          </div>

          <div
            className="absolute inset-y-0 right-0 z-0 hidden w-[62%] md:block"
            style={{
              background:
                'linear-gradient(115deg, #2a1b3f 0%, #DF93FF 25%, #7375FF 65%, #60C7FD 100%)',
            }}
            aria-hidden
          />

          <div
            className="absolute inset-0 z-[5] hidden md:block"
            style={{
              background:
                'radial-gradient(60% 200% at 45% 50%, rgba(12,1,23,.92) 0%, rgba(12,1,23,.75) 45%, rgba(12,1,23,.35) 70%, rgba(12,1,23,0) 100%)',
            }}
            aria-hidden
          />

          <div className="block h-[478px] w-full md:hidden" />
          <ColorBlobs
            items={[
              {
                preset: 'violet',
                size: 'sm',
                className: 'md:hidden -top-35 -left-25',
              },
              {
                preset: 'violet',
                size: 'sm',
                className: 'md:hidden -bottom-35 -right-25',
              },
            ]}
          />
          <div className="pointer-events-none absolute -right-[25%] -bottom-[75%] z-10 hidden -rotate-[35deg] md:block xl:-rotate-[45deg]">
            <div className="marquee-mask rounded-full bg-gradient-to-r from-[#DF93FF] via-[#7375FF] to-[#5BDBFD] px-6 py-5 opacity-90 backdrop-blur">
              <div
                className="marquee-anim font-logo flex min-w-[150%] text-[15px] font-semibold tracking-[.18em] whitespace-nowrap text-white will-change-transform"
                aria-hidden="true"
              >
                <span className="flex pr-4">
                  СЕКРЕТЫ ВИРУСНЫХ ВИДЕО • СЕКРЕТЫ ВИРУСНЫХ ВИДЕО • СЕКРЕТЫ
                  ВИРУСНЫХ ВИДЕО •
                </span>
                <span className="flex pr-4">
                  СЕКРЕТЫ ВИРУСНЫХ ВИДЕО • СЕКРЕТЫ ВИРУСНЫХ ВИДЕО • СЕКРЕТЫ
                  ВИРУСНЫХ ВИДЕО •
                </span>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 z-20 grid place-items-center">
            <div className="text-center mt-[113px] md:mt-[60px] mb-[110px] max-w-[281px] grid w-full md:max-w-[534px]">
              <h3 className="mb-5 text-xl font-bold uppercase md:text-[36px]">
                УЗНАЙ, КАК СОЗДАВАТЬ
                <br />
                КОНТЕНТ, КОТОРЫЙ
                <br />
                <span className="md:text-gradient text-[var(--color-logo-dark)]">
                  ПОКОРЯЕТ АУДИТОРИИ
                </span>
              </h3>

              <p className="mx-auto mb-[62px] text-sm font-medium text-white md:mb-[44px] md:text-2xl">
                Материалы, способные стать вирусными и охватить тысячи людей!
              </p>

              <div className="mx-auto w-full">
                <BuyCta
                  source="promo-banner"
                  variant="gradientSecondary"
                  size="xl"
                  rightBadge="-50%"
                  className="w-full"
                >
                  Купить со скидкой
                </BuyCta>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
