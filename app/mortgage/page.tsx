import type { Metadata } from "next"
import { MortgageCalculator } from "@/components/mortgage-calculator"

export const metadata: Metadata = {
  title: "Ипотека — DEZI GROUP",
  description: "Ипотечный калькулятор DEZI GROUP. Рассчитайте ежемесячный платёж по программам доступного жилья.",
}

export default function MortgagePage() {
  return <MortgageCalculator />
}
