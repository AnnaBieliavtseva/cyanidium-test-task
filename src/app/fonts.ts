import { Raleway, Manrope, Sansation } from 'next/font/google'

export const raleway = Raleway({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '600', '700', '800'],
  display: 'swap',
  variable: '--font-sans',
})

export const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  weight: ['700'], 
  display: 'swap',
  variable: '--font-alt', 
})

export const logo = Sansation({
  subsets: ['latin', 'cyrillic'],
  weight: ['700'], 
  variable: '--font-logo',
  display: 'swap',
})
