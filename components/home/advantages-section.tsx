"use client"

import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animated-section"
import { Shield, Award, Users, Building2, TreePine, Ruler } from "lucide-react"

const advantages = [
  {
    icon: Shield,
    title: "Надёжность",
    description: "Все объекты сдаются в срок. 100% выполнение обязательств перед покупателями.",
  },
  {
    icon: Award,
    title: "Качество",
    description: "Используем только проверенные материалы и технологии строительства.",
  },
  {
    icon: Users,
    title: "Малоквартирность",
    description: "Камерные дома с небольшим количеством квартир — тишина и уют для каждого жильца.",
  },
  {
    icon: Building2,
    title: "Комфорт-класс",
    description: "Высокие потолки, просторные планировки, современная архитектура.",
  },
  {
    icon: TreePine,
    title: "Инфраструктура",
    description: "Все объекты расположены в районах с развитой инфраструктурой и транспортной доступностью.",
  },
  {
    icon: Ruler,
    title: "Индивидуальные проекты",
    description: "Каждый ЖК строится по уникальному архитектурному проекту.",
  },
]

export function AdvantagesSection() {
  return (
    <section className="relative overflow-hidden bg-secondary py-20 lg:py-28">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2">
        <div className="h-px w-16 bg-gradient-to-r from-transparent via-accent to-transparent" />
      </div>
      <div className="absolute -right-32 top-20 h-64 w-64 rounded-full bg-accent/5 blur-[80px]" />
      <div className="absolute -left-32 bottom-20 h-64 w-64 rounded-full bg-primary/5 blur-[80px]" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <AnimatedSection>
          <div className="mb-12 flex flex-col items-center gap-4 text-center lg:mb-16">
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent">
              <span className="h-px w-8 bg-accent" />
              Наши преимущества
              <span className="h-px w-8 bg-accent" />
            </span>
            <h2 className="max-w-lg text-balance text-3xl font-bold text-secondary-foreground md:text-4xl lg:text-5xl">
              Почему КомфортСтрой2020
            </h2>
          </div>
        </AnimatedSection>

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.1}>
          {advantages.map((item, i) => (
            <StaggerItem key={i} variant={i % 2 === 0 ? "fadeLeft" : "fadeRight"}>
              <div className="group flex h-full flex-col gap-4 rounded-2xl glass-light p-6 card-hover hover-glow lg:p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-primary/10 transition-all duration-500 group-hover:from-accent/30 group-hover:to-primary/20">
                  <item.icon className="h-7 w-7 text-accent icon-hover" />
                </div>
                <h3 className="text-lg font-bold text-card-foreground">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
