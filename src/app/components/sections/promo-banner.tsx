'use client'

import Image from 'next/image'
import { Container } from '../layout/container'
import { BuyCta } from '../cta/buy-cta'
import { ColorBlobs } from '../ui/color-blobs'

export function PromoBanner() {
  return (
    <section>
      <Container bleed>
        <div className="relative overflow-hidden border border-transparent bg-[var(--color-bg)] px-[56px] py-[113px] [background:linear-gradient(var(--color-bg),var(--color-bg))_padding-box,var(--gradient-secondary)_border-box] md:min-h-[488px]">
          <div className="absolute inset-y-0 left-0 z-10 hidden w-[513px] md:block">
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
            className="absolute inset-y-0 right-0 z-10 hidden w-[62%] md:block"
            style={{
              background:
                'linear-gradient(115deg, #2a1b3f 0%, #DF93FF 25%, #7375FF 65%, #60C7FD 100%)',
            }}
            aria-hidden
          />

          <div
            className="pointer-events-none absolute z-20 hidden rounded-full bg-[rgba(12,1,23,1)] blur-[335px] md:block"
            style={{
              width: '712px',
              height: '1486px',
              left: '290px',
              top: '-122px',
            }}
            aria-hidden
          />

          <div className="block h-[478px] w-full md:hidden" />
          <ColorBlobs
            items={[
              {
                preset: 'gradient',
                size: 'md',
                className: 'md:hidden -top-[203px] -left-[221px]',
              },
              {
                preset: 'gradient',
                size: 'md',
                className: 'md:hidden -bottom-[203px] -right-[221px]',
              },
            ]}
          />
          <div className="pointer-events-none absolute top-[330px] left-[375px] z-20 hidden h-[97px] w-[1537px] -rotate-[35.5deg] md:block">
            <div className="marquee-mask text-sm gradient-pricing-badge blur-[3px] rounded-full px-6 py-5 ">
              <div
                className=" font-logo flex justify-center items-center text-[35px] text-center font-bold leading-none  text-white "
                aria-hidden="true"
              >
                <span className="flex text-center items-center justify-center"> СЕКРЕТЫ ВИРУСНЫХ ВИДЕО </span>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 z-20 grid place-items-center">
            <div className="grid w-full max-w-[281px] text-center md:mt-[60px] md:max-w-[534px]">
              <h3 className="mb-5 text-xl leading-none font-bold uppercase md:text-[36px]">
                УЗНАЙ, КАК СОЗДАВАТЬ
                <br />
                КОНТЕНТ, КОТОРЫЙ
                <br />
                <span className="md:text-gradient gradient-logo">
                  ПОКОРЯЕТ АУДИТОРИИ
                </span>
              </h3>

              <p className="mx-auto mb-[62px] text-sm leading-none font-medium text-white md:mb-[44px] md:text-2xl">
                Материалы, способные стать вирусными и охватить тысячи людей!
              </p>

              <div className="mx-auto w-full">
                <BuyCta
                  source="promo-banner"
                  variant="gradientSecondary"
                  size="xxl"
                  rightBadge="-50%"
                  badgeClassName="rounded-[32px] w-[63px] h-[68px]"
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
