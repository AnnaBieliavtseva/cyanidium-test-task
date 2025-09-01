import Link from 'next/link'
import { Container } from './container'
import { LanguageSwitcher } from '../nav/language-switcher'
import { MobileMenu } from '../nav/mobile-menu'
import { BuyCtaHeader } from '../cta/buy-cta-header'

export function Header() {
  return (
    <header className="z-70 mt-12.5 pt-[env(safe-area-inset-top)] md:mt-10">
      <Container className="flex w-full items-center justify-between text-sm">
        <Link href="/" aria-label="Go to home page">
          <p className="font-logo text-base leading-none font-bold uppercase lg:text-lg">
            Aleko{' '}
            <span className="md:text-gradient text-[var(--color-logo-dark)]">
              Sokurashvili
            </span>
          </p>
        </Link>

        <div className="flex items-center justify-between gap-3">
          <nav className="hidden gap-4 text-xs md:flex md:gap-1.5 lg:mr-15.25 lg:gap-3 lg:text-base">
            <Link
              href="/structure"
              className="rounded-[var(--radius-xl)] px-2 py-1 hover:bg-white/10"
            >
              Структура
            </Link>
            <Link
              href="/about"
              className="rounded-[var(--radius-xl)] px-2 py-1 hover:bg-white/10"
            >
              Обо мне
            </Link>
            <Link
              href="/benefits"
              className="rounded-[var(--radius-xl)] px-2 py-1 hover:bg-white/10"
            >
              Плюсы
            </Link>
            <Link
              href="/reviews"
              className="rounded-[var(--radius-xl)] px-2 py-1 hover:bg-white/10"
            >
              Отзывы
            </Link>
            <Link
              href="/faq"
              className="rounded-[var(--radius-xl)] px-2 py-1 hover:bg-white/10"
            >
              FAQ
            </Link>
          </nav>
          <LanguageSwitcher className="block" />

          <MobileMenu />
        </div>
        <BuyCtaHeader />
      </Container>
    </header>
  )
}
