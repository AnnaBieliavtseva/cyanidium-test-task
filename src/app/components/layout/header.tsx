import Link from 'next/link'
import { Container } from './container'
import { LanguageSwitcher } from '../nav/language-switcher'
import { MobileMenu } from '../nav/mobile-menu'
import { BuyCtaHeader } from '../cta/buy-cta-header'
import { cn } from '@/lib/utils'
import { NAV_ITEMS } from '../nav/items'

const baseLinkClass = 'hover:underline'

export function Header() {
  return (
    <header className="z-70 mt-12.5 pt-[env(safe-area-inset-top)] md:mt-10">
      <Container className="flex w-full items-center justify-between">
        <Link href="/" aria-label="Go to home page">
          <p className="font-logo py-[9px] text-base leading-none font-bold uppercase lg:py-[10px] lg:text-lg">
            Aleko <span className="gradient-logo">Sokurashvili</span>
          </p>
        </Link>

        <div className="flex items-center justify-between gap-3">
          <nav className="hidden gap-4 text-xs leading-none font-medium md:flex md:gap-1.5 xl:mr-[60px] lg:gap-7 lg:py-[10px] md:text-base">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(baseLinkClass, item.className)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <LanguageSwitcher className="block" />
          <MobileMenu />
        </div>
        <BuyCtaHeader />
      </Container>
    </header>
  )
}
