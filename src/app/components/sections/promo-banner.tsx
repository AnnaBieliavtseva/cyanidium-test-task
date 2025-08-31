'use client'

import Image from 'next/image'
import { Container } from '../layout/container'
import { BuyCta } from '../cta/buy-cta'

export function PromoBanner() {
  return (
    <section className="py-8 md:py-12">
      <Container className="px-6 lg:px-20">
        <div className="relative overflow-hidden rounded-[24px] border border-[#36285D] bg-[var(--color-bg)] md:min-h-[420px]">
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
                'linear-gradient(115deg, #2a1b3f 0%, #9C9EFF 45%, #E3A1FF 72%, #E56F8C 100%)',
            }}
            aria-hidden
          />

          <div
            className="absolute inset-0 z-[5] hidden md:block"
            style={{
              background:
                'radial-gradient(120% 90% at 45% 50%, rgba(12,1,23,.92) 0%, rgba(12,1,23,.75) 45%, rgba(12,1,23,.35) 70%, rgba(12,1,23,0) 100%)',
            }}
            aria-hidden
          />

          <div className="block h-[360px] w-full md:hidden" />

          <div className="pointer-events-none absolute -right-[10%] bottom-[12%] z-10 hidden -rotate-[18deg] md:block">
            <div className="marquee-mask rounded-full bg-gradient-to-r from-[#90E8FF] via-[#9C9EFF] to-[#E56F8C] px-6 py-2 opacity-90 backdrop-blur">
              <div
                className="flex min-w-[200%] [animation:marquee_18s_linear_infinite] gap-10 text-[13px] font-semibold tracking-[.18em] whitespace-nowrap text-white"
                aria-hidden="true"
              >
                <span className="flex gap-10">
                  СЕКРЕТЫ ВИРУСНЫХ ВИДЕО • СЕКРЕТЫ ВИРУСНЫХ ВИДЕО • СЕКРЕТЫ
                  ВИРУСНЫХ ВИДЕО •
                </span>
                <span className="flex gap-10">
                  СЕКРЕТЫ ВИРУСНЫХ ВИДЕО • СЕКРЕТЫ ВИРУСНЫХ ВИДЕО • СЕКРЕТЫ
                  ВИРУСНЫХ ВИДЕО •
                </span>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 z-20 grid place-items-center">
            <div className="grid w-full max-w-2xl gap-4 p-6 text-center md:mr-10 md:ml-[40%] md:max-w-none md:p-10 md:text-left">
              <h3 className="font-logo text-2xl leading-tight uppercase sm:text-3xl md:text-[32px]">
                УЗНАЙ, КАК СОЗДАВАТЬ
                <br />
                КОНТЕНТ, КОТОРЫЙ
                <br />
                <span className="bg-clip-text text-transparent [-webkit-text-fill-color:transparent] [background:var(--gradient-logo)]">
                  ПОКОРЯЕТ АУДИТОРИИ
                </span>
              </h3>

              <p className="mx-auto max-w-[56ch] text-sm text-white/80 md:mx-0 md:text-base">
                Материалы, способные стать вирусными и охватить тысячи людей!
              </p>

              <div className="mx-auto mt-2 w-full max-w-[560px] md:mx-0">
                <BuyCta
                  source="promo-banner"
                  variant="gradient"
                  size="xl"
                  //   rightBadge="-50%"
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
