"use client"

import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animated-section"
import { Phone, MapPin, Clock, Mail } from "lucide-react"

const contacts = [
  {
    icon: MapPin,
    title: "Адрес",
    lines: ["г. Кокшетау, ул. Магзи Абулкасымова, 164, офис 2"],
  },
  {
    icon: Phone,
    title: "Телефон",
    lines: ["+7 707 141 04 41"],
    href: "tel:+77071410441",
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["info@sbinvestgroup.kz"],
    href: "mailto:info@sbinvestgroup.kz",
  },
  {
    icon: Clock,
    title: "Режим работы",
    lines: ["Пн–Сб: 09:00 – 19:00", "Вс: Выходной"],
  },
]

export function ContactInfoSection() {
  return (
    <section className="relative overflow-hidden bg-background py-20 lg:py-28">
      {/* Decorative */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2">
        <div className="h-px w-16 bg-gradient-to-r from-transparent via-accent to-transparent" />
      </div>
      <div className="absolute -right-20 top-1/3 h-60 w-60 rounded-full bg-accent/5 blur-[80px]" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <AnimatedSection>
          <div className="mb-12 flex flex-col items-center gap-4 text-center">
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent">
              <span className="h-px w-8 bg-accent" />
              Свяжитесь с нами
              <span className="h-px w-8 bg-accent" />
            </span>
            <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              Контакты
            </h2>
          </div>
        </AnimatedSection>

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 items-stretch" staggerDelay={0.1}>
          {contacts.map((contact, i) => (
            <StaggerItem key={i} variant="scaleIn">
              <div className="group flex flex-col h-full items-center gap-4 rounded-2xl glass-light p-6 text-center card-hover hover-glow">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent shadow-lg shadow-accent/20 transition-all duration-500 group-hover:shadow-accent/40 group-hover:scale-110">
                  <contact.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  {contact.title}
                </h3>
                <div className="flex flex-col gap-1">
                  {contact.lines.map((line, j) =>
                    contact.href ? (
                      <a
                        key={j}
                        href={contact.href}
                        className="text-sm font-medium text-card-foreground transition-colors hover:text-accent"
                      >
                        {line}
                      </a>
                    ) : (
                      <span key={j} className="text-sm font-medium text-card-foreground">
                        {line}
                      </span>
                    )
                  )}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
