import Link from 'next/link'
import { Container } from './container'
import { LanguageSwitcher } from '../nav/language-switcher'
import { MobileMenu } from '../nav/mobile-menu'
import { Button } from '../ui/button'

export function Header() {
  return (
    <header className="sticky top-[50px] z-50 pt-[env(safe-area-inset-top)] md:top-[40px]">
      <Container className="flex items-center justify-between text-sm md:py-[10px]">
        <Link href="/" aria-label="Go to home page">
          <p className="font-logo text-base leading-none uppercase lg:text-lg">
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
        <Button
          variant="gradient"
          size="md"
          className="md:inline-block md:px:2 hidden lg:px-10"
        >
          Купить со скидкой
        </Button>
      </Container>
    </header>
  )
}
