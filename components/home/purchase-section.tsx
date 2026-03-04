"use client"

import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animated-section"
import { CreditCard, Landmark, Banknote } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const options = [
  {
    icon: CreditCard,
    title: "Рассрочка",
    description: "Рассрочка от застройщика без участия банка. Удобный график платежей на весь период строительства.",
    step: "01",
  },
  {
    icon: Landmark,
    title: "Ипотека",
    description: "Работаем с программами Баспана Хит, 7-20-25, Наурыз. Помогаем с оформлением документов.",
    step: "02",
  },
  {
    icon: Banknote,
    title: "100% оплата",
    description: "При полной оплате — специальные условия и скидки. Гарантия прозрачной сделки.",
    step: "03",
  },
]

export function PurchaseSection() {
  return (
    <section className="relative bg-background py-20 lg:py-28 overflow-hidden">
      {/* Decorative line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2">
        <div className="h-px w-16 bg-gradient-to-r from-transparent via-accent to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <AnimatedSection>
          <div className="mb-12 flex flex-col items-center gap-4 text-center lg:mb-16">
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent">
              <span className="h-px w-8 bg-accent" />
              Способы покупки
              <span className="h-px w-8 bg-accent" />
            </span>
            <h2 className="max-w-lg text-balance text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              Условия покупки
            </h2>
            <p className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              Подберём оптимальный вариант приобретения квартиры под ваши возможности
            </p>
          </div>
        </AnimatedSection>

        <StaggerContainer className="grid gap-6 md:grid-cols-3 items-stretch" staggerDelay={0.15}>
          {options.map((option, i) => (
            <StaggerItem key={i} variant="fadeUp" className="h-full">
              <div className="group flex h-full flex-col items-center gap-5 rounded-2xl border border-border bg-card p-8 text-center gradient-border card-hover">
                {/* Step number */}
                <span className="text-5xl font-black text-accent/10 transition-colors duration-500 group-hover:text-accent/20">
                  {option.step}
                </span>

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent shadow-lg shadow-accent/20 transition-all duration-500 group-hover:shadow-accent/40 group-hover:scale-110">
                  <option.icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-card-foreground">
                  {option.title}
                </h3>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  {option.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedSection delay={450}>
          <div className="mt-12 flex justify-center">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-[0_0_20px_rgba(245,124,0,0.3)] hover:shadow-[0_0_40px_rgba(245,124,0,0.5)] transition-all duration-500 hover:scale-105"
            >
              <Link href="/mortgage">Подробнее об ипотеке</Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
