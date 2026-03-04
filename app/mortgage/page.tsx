import type { Metadata } from "next"
import { MortgageCalculator } from "@/components/mortgage-calculator"

export const metadata: Metadata = {
  title: "Ипотека — KomfortStroy2020",
  description: "Ипотечный калькулятор KomfortStroy2020. Рассчитайте ежемесячный платёж по программам доступного жилья.",
}

export default function MortgagePage() {
  return <MortgageCalculator />
}
