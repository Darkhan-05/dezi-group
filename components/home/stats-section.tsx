"use client"

import { useCountUp } from "@/hooks/use-count-up"
import { StaggerContainer, StaggerItem } from "@/components/animated-section"

const stats = [
  { value: 5, suffix: "+", label: "Лет на рынке" },
  { value: 15, suffix: "к+", label: "Квадратных метров" },
  { value: 8, suffix: "к+", label: "Подписчиков" },
]

function StatCard({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { ref, displayValue } = useCountUp({
    end: value,
    duration: 2500,
    suffix: "",
  })

  return (
    <div className="glass-light rounded-2xl p-8 text-center card-hover hover-glow lg:p-10">
      <div className="text-5xl font-bold text-primary md:text-6xl lg:text-7xl">
        <span ref={ref}>{displayValue}</span>
        <span className="text-accent">{suffix}</span>
      </div>
      <span className="mt-3 block text-sm font-medium uppercase tracking-wider text-muted-foreground md:text-base">
        {label}
      </span>
    </div>
  )
}

export function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-secondary py-20 lg:py-28">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-accent/20 blur-[100px]" />
        <div className="absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-primary/20 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <StaggerContainer className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {stats.map((stat, i) => (
            <StaggerItem key={i} variant="scaleIn">
              <StatCard value={stat.value} suffix={stat.suffix} label={stat.label} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
