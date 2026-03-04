"use client"

import { AnimatedSection } from "@/components/animated-section"
import { ContactForm } from "@/components/contact-form"
import { motion } from "framer-motion"

export function ConsultationSection() {
  return (
    <section className="relative bg-primary py-20 lg:py-28 overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
      </div>

      {/* Decorative glowing orbs */}
      <div className="absolute -left-32 top-1/3 h-80 w-80 rounded-full bg-accent/10 blur-[120px]" />
      <div className="absolute -right-32 bottom-1/4 h-80 w-80 rounded-full bg-emerald-400/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <AnimatedSection variant="fadeLeft">
            <div className="flex flex-col gap-6">
              <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-emerald-400">
                <span className="h-px w-8 bg-emerald-400" />
                Бесплатная консультация
              </span>
              <h2 className="max-w-lg text-balance text-3xl font-bold text-primary-foreground md:text-4xl lg:text-5xl">
                Подберём квартиру{" "}
                <span className="bg-gradient-to-r from-emerald-300 to-green-200 bg-clip-text text-transparent">
                  вашей мечты
                </span>
              </h2>
              <p className="max-w-md text-pretty text-base leading-relaxed text-primary-foreground/70 md:text-lg">
                Оставьте заявку и наш менеджер свяжется с вами в течение 15 минут. Поможем подобрать квартиру, рассчитать ипотеку и организовать просмотр.
              </p>

              {/* Trust indicators */}
              <div className="mt-2 flex flex-wrap gap-4">
                {["15 мин ответ", "Бесплатно", "Без обязательств"].map((item, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
                    className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    {item}
                  </motion.span>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200} variant="fadeRight">
            <div className="rounded-2xl glass p-6 lg:p-8">
              <ContactForm variant="dark" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
