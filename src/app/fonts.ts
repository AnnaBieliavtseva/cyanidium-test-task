import { Raleway, Manrope } from 'next/font/google'
import localFont from 'next/font/local'

export const raleway = Raleway({
  subsets: ['latin','cyrillic',],
  weight: ['400', '600', '700', '800'],
  display: 'swap',
  variable: '--font-sans-next',
})

export const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  weight: ['700'],
  display: 'swap',
  variable: '--font-alt-next',
})

export const logo = localFont({
  src: [
    {
      path: './fonts/sansation/Sansation-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/sansation/Sansation-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-logo-next',
})
