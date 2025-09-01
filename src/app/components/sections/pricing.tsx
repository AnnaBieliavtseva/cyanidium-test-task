'use client'

import { Container } from '../layout/container'
import { ColorBlobs } from '../ui/color-blobs'
import { PricingCard } from '../ui/pricing-card'

export function PricingSection() {
  return (
    <section className="relative pt-33 pb-[76px] md:py-50">
      <ColorBlobs
        items={[
          {
            preset: 'violet',
            size: 'lg',
            className: 'hidden md:block -top-50 -right-3',
          },
          {
            preset: 'blue',
            size: 'sm',
            className: 'md:hidden -top-25 -right-3',
          },
        ]}
      />
   
      <Container className="px-10 xl:px-20">
        <h2 className="text-bold mb-7 text-center text-2xl uppercase md:mb-20 md:text-5xl">
          ТАРИФЫ
        </h2>

        <div className="grid gap-4 md:grid-cols-3 md:gap-5">
          <PricingCard
            variant="basic"
            title="Базовый"
            price="99 $"
            oldPrice="139$"
            features={[{ text: 'Базовый курс' }, { text: '38 уроков' }]}
            className="md:translate-y-2"
          />

          <PricingCard
            variant="pro"
            title="Продвинутый"
            price="149 $"
            oldPrice="199$"
            badge={{ text: 'BEST SELLER' }}
            subBadge={{ text: 'PRO' }}
            features={[
              { text: 'База' },
              { text: 'Дополнительные уроки' },
              { text: '48 уроков' },
              { text: 'Чат-комьюнити для создателей контента' },
            ]}
            className="md:scale-[1.02]"
          />

          <PricingCard
            variant="expert"
            title="Эксперт"
            price="299 $"
            oldPrice="509$"
            badge={{ text: 'ЭКСПЕРТ' }}
            subBadge={{ text: 'EXPERT' }}
            features={[
              { text: 'Дополнительные уроки' },
              { text: '48 уроков' },
              { text: 'Чат-комьюнити для создателей контента' },
              { text: 'Разбор вашей страницы в формате видеозвонка' },
            ]}
          />
        </div>
      </Container>
    </section>
  )
}
