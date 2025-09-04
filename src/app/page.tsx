import { Hero } from "./components/sections/hero";
import { PricingSection } from "./components/sections/pricing";
import { PromoBanner } from "./components/sections/promo-banner";

export default function Home() {
  return (
    <main className="grow pt-[24px] pb-[48px] md:py-17">
      <Hero />
      <PricingSection />
      <PromoBanner />
    </main>
  )
}
