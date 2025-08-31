import { Hero } from "./components/sections/hero";
import { PricingSection } from "./components/sections/pricing";
import { PromoBanner } from "./components/sections/promo-banner";

export default function Home() {
  return (
    <main className="container grow flex-col items-center justify-center py-6 md:py-17">
      <Hero />
      <PricingSection />
      <PromoBanner/>
    </main>
  )
}
