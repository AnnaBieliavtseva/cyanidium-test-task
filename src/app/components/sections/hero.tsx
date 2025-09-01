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
                preset: 'blue',
                size: 'sm',
                className: 'md:hidden bottom-35 -left-3',
              },
              {
                preset: 'violet',
                size: 'sm',
                className: 'md:hidden top-25 -right-8',
              },
              {
                preset: 'violet',
                size: 'lg',
                className: 'hidden md:block -bottom-50 -right-3',
              },
              {
                preset: 'blue',
                size: 'sm',
                className: 'md:hidden -bottom-25 -right-3',
              },
            ]}
          />

          <div className="relative md:w-[460px] md:min-w-[460px] xl:w-[644px] xl:min-w-[644px]">
            <div className="relative inline-block w-full">
              <div className="relative mb-0 rounded-[38px]">
                <picture>
                  <source
                    srcSet="/hero-mob.webp"
                    media="(max-width: 767px)"
                    type="image/webp"
                  />

                  <Image
                    src="/hero.webp"
                    alt="Aleko Sokurashvili"
                    width={644}
                    height={466}
                    priority
                    className="h-auto w-full rounded-[38px] object-cover"
                    sizes="(min-width:1280px) 644px, (min-width:768px) 460px, 100vw"
                  />
                </picture>

                <div className="absolute inset-x-0 bottom-[-18px] text-center md:hidden">
                  <p className="text-gradient text-center text-xl font-bold">
                    От 0 до 100,000 за 90 дней
                  </p>
                  <h1 className="text-center text-[52px] font-extrabold">
                    СЕКРЕТЫ
                  </h1>
                </div>
              </div>

              <div className="absolute top-[210px] left-[410px] hidden space-y-6 md:block lg:top-[212px] lg:left-[430px] xl:top-[223px] xl:left-[570px]">
                <p className="text-gradient text-2xl font-bold xl:text-[32px]">
                  От 0 до 100,000 за 90 дней
                </p>
                <h1 className="font-logo text-5xl font-extrabold xl:text-8xl">
                  СЕКРЕТЫ
                  <br />
                  ВИРУСНЫХ
                  <br />
                  ВИДЕО
                </h1>
              </div>
            </div>

            <div className="mt-10.5 hidden md:block">
              <div className="w-full space-y-2 md:max-w-[390px] xl:max-w-[534px]">
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
            <p className="text-lg lg:max-w-[396px]">
              Станьте известным всего за 3&nbsp;месяца без затрат на рекламу!
              Узнайте ключ к созданию вирусного контента и превратите свои идеи
              в миллионные просмотры.
            </p>
          </div>
        </div>

        <div className="md:hidden">
          <p className="mb-8 text-center text-[50px] font-extrabold">
            ВИРУСНЫХ ВИДЕО
          </p>
          <p className="mb-11 text-center text-sm">
            Станьте известным всего за 3&nbsp;месяца без затрат на рекламу!
            Узнайте ключ к созданию вирусного контента и превратите свои идеи в
            миллионные просмотры.
          </p>

          <div className="mx-auto w-full max-w-[520px] space-y-2">
            <BuyCta
              source="hero"
              variant="light"
              size="xl"
              className="w-full"
              rightBadge="-50%"
            >
              Купить со скидкой
            </BuyCta>

            <div className="flex items-baseline justify-center gap-3">
              <span className="text-xl font-semibold text-[var(--color-accent-500)]">
                1000 грн
              </span>
              <span className="text-sm font-semibold text-[var(--color-muted-500)] line-through">
                2000 грн
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
