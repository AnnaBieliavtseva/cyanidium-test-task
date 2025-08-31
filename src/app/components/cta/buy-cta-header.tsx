'use client'
import { BuyCta } from './buy-cta'

export function BuyCtaHeader() {
  return (
    <BuyCta
      source="header"
      className="hidden md:inline-flex md:px-2 lg:px-10" // моб: скрыта
    />
  )
}
