export type NavItem = {
  href: string
  label: string
  className?: string
}

export const NAV_ITEMS: NavItem[] = [
  { href: '/structure', label: 'Структура' },
  { href: '/about', label: 'Обо мне' },
  { href: '/benefits', label: 'Плюсы' },
  { href: '/reviews', label: 'Отзывы' },
  { href: '/faq', label: 'FAQ' },
]


export const LANGS = [
  { code: 'ru', label: 'RU' },
  { code: 'uk', label: 'UA' },
  { code: 'en', label: 'EN' },
] as const