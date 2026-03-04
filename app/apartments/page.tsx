import type { Metadata } from "next"
import { Suspense } from "react"
import { ApartmentsCatalog } from "@/components/apartments-catalog"

export const metadata: Metadata = {
  title: "Планировки — DEZI GROUP",
  description: "Каталог планировок квартир в ЖК DEZI PARK от DEZI GROUP в Кокшетау. Фильтрация по количеству комнат, площади и цене.",
}

export default function ApartmentsPage() {
  return (
    <Suspense>
      <ApartmentsCatalog />
    </Suspense>
  )
}
