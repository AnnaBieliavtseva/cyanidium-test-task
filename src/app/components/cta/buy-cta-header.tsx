'use client'
import { BuyCta } from './buy-cta'

export function BuyCtaHeader() {
  return (
    <BuyCta
      size='lg'
      source="header"
      className="hidden md:inline-flex" 
    />
  )
}
