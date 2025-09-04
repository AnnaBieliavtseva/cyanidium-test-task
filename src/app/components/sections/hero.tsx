'use client'

import Image from 'next/image'
import { Container } from '../layout/container'
import { BuyCta } from '../cta/buy-cta'
import { ColorBlobs } from '../ui/color-blobs'

export function Hero() {
  return (
    <section className="relative">
      <Container>
        <div className="flex flex-col md:flex-row md:items-start">
          <ColorBlobs
            items={[
              {
                preset: 'violet',
                size: 'sm',
                className: 'md:hidden top-[75px] -right-[9px]',
              },

              {
                preset: 'blue',
                size: 'sm',
                className: 'md:hidden bottom-[148px] -right-[55px]',
              },
            ]}
          />

          <div className="relative md:w-[460px] md:min-w-[460px] xl:w-[644px] xl:min-w-[644px]">
            <div className="relative inline-block w-full">
              <div className="relative mb-0 rounded-[18px]">
                <picture>
                  <source
                    srcSet="/hero-mob.webp"
                    media="(max-width: 767px)"
                    type="image/webp"
                    height={354}
                  />

                  <Image
                    src="/hero.webp"
                    alt="Aleko Sokurashvili"
                    width={644}
                    height={466}
                    priority
                    className="h-fit w-full rounded-[38px] object-cover"
                    sizes="(min-width:1280px) 644px, (min-width:768px) 460px, 100vw"
                  />
                </picture>

                <div className="absolute inset-x-0 bottom-[-5px] space-y-[19.3px] text-center md:hidden">
                  <p className="gradient-hero mb-1 space-y-[16.3px] text-center text-[21px] leading-none font-bold">
                    От 0 до 100,000 за 90 дней
                  </p>
                  <h1 className="space-y-[19.57px] text-center text-[54px] leading-none font-extrabold">
                    <div>СЕКРЕТЫ</div>
                  </h1>
                </div>
              </div>

              <div className="absolute top-[200px] left-[410px] hidden md:block lg:top-[213px] xl:left-[570px]">
                <p className="gradient-hero mb-[15px] space-y-[24.92px] text-2xl font-bold xl:text-[32px]">
                  От 0 до 100,000 за 90 дней
                </p>
                <h1 className="space-y-[17.38px] text-5xl leading-none font-extrabold xl:text-8xl">
                  <div>СЕКРЕТЫ</div>
                  <div>ВИРУСНЫХ</div>
                  <div>ВИДЕО</div>
                </h1>
              </div>
            </div>

            <div className="mt-10.5 hidden md:block">
              <div className="w-full md:max-w-[390px] xl:max-w-[534px]">
                <BuyCta
                  source="hero"
                  variant="light"
                  size="xl"
                  className="w-full md:max-w-[390px] xl:max-w-[534px]"
                  rightBadge="-50%"
                >
                  Купить со скидкой
                </BuyCta>

                <div className="flex items-baseline justify-center gap-4">
                  <span className="text-2xl font-semibold text-[var(--color-accent-500)]">
                    1000 грн
                  </span>
                  <span className="text-sm font-semibold text-[var(--color-muted-500)] line-through">
                    2000 грн
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="ml-5 hidden flex-1 md:block lg:mt-5 lg:ml-10 xl:mt-[84px]">
            <p className="text-lg leading-none lg:max-w-[396px]">
              Станьте известным всего за 3&nbsp;месяца без затрат на рекламу!
              Узнайте ключ к созданию вирусного контента и превратите свои идеи
              в миллионные просмотры.
            </p>
          </div>
        </div>

        <div className="md:hidden">
          <p className="mt-4 mb-8 space-y-[19.57px] text-center text-[50px] leading-none font-extrabold">
            <span className="block">ВИРУСНЫХ</span>
            <span className="block">ВИДЕО</span>
          </p>
          <p className="mb-11 text-center text-sm leading-none">
            Станьте известным всего за 3&nbsp;месяца без затрат на рекламу!
            Узнайте ключ к созданию вирусного контента и превратите свои идеи в
            миллионные просмотры.
          </p>

          <div className="mx-auto w-full max-w-[520px]">
            <BuyCta
              source="hero"
              variant="light"
              size="xl"
              className="mb-[11px] w-full"
              rightBadge="-50%"
            >
              Купить со скидкой
            </BuyCta>

            <div className="flex items-baseline justify-center gap-3">
              <span className="text-xl leading-5.5 font-semibold text-[var(--color-accent-500)]">
                1000 грн
              </span>
              <span className="text-sm leading-5.5 font-semibold text-[var(--color-muted-500)] line-through">
                2000грн
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
