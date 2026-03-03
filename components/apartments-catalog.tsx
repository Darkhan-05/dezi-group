"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import { Search, SlidersHorizontal, Building2, ArrowRight } from "lucide-react"
import { projects, floorPlans, formatPrice } from "@/lib/data"
import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function ApartmentsCatalog() {
  const searchParams = useSearchParams()
  const initialProject = searchParams.get("project") || "all"

  const [selectedProject, setSelectedProject] = useState(initialProject)
  const [selectedRooms, setSelectedRooms] = useState("all")
  const [sortBy, setSortBy] = useState("price-asc")

  const filtered = useMemo(() => {
    let result = [...floorPlans]

    if (selectedProject !== "all") {
      result = result.filter((p) => p.projectSlug === selectedProject)
    }

    if (selectedRooms !== "all") {
      result = result.filter((p) => p.rooms === Number(selectedRooms))
    }

    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price)
        break
      case "price-desc":
        result.sort((a, b) => b.price - a.price)
        break
      case "area-asc":
        result.sort((a, b) => a.area - b.area)
        break
      case "area-desc":
        result.sort((a, b) => b.area - a.area)
        break
    }

    return result
  }, [selectedProject, selectedRooms, sortBy])

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden bg-primary pt-20">
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/interior.jpg" alt="" fill className="object-cover" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 text-center lg:px-8">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-accent">
            Каталог
          </span>
          <h1 className="text-balance text-4xl font-bold text-primary-foreground md:text-5xl lg:text-6xl">
            Планировки квартир
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-primary-foreground/70">
            Выберите подходящую планировку в жилых комплексах Кокшетау
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-[60px] z-30 border-b border-border bg-background/95 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 py-4 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <SlidersHorizontal className="h-4 w-4" />
                <span>Фильтры:</span>
              </div>
              <div className="flex flex-wrap gap-3">
                <Select value={selectedProject} onValueChange={setSelectedProject}>
                  <SelectTrigger className="w-[180px] border-border bg-background text-foreground">
                    <SelectValue placeholder="Все ЖК" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Все ЖК</SelectItem>
                    {projects.map((p) => (
                      <SelectItem key={p.id} value={p.slug}>{p.nameShort}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={selectedRooms} onValueChange={setSelectedRooms}>
                  <SelectTrigger className="w-[160px] border-border bg-background text-foreground">
                    <SelectValue placeholder="Комнаты" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Все комнаты</SelectItem>
                    <SelectItem value="1">1-комнатные</SelectItem>
                    <SelectItem value="2">2-комнатные</SelectItem>
                    <SelectItem value="3">3-комнатные</SelectItem>
                    <SelectItem value="4">4-комнатные</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-sm text-muted-foreground">Сортировка:</span>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[200px] border-border bg-background text-foreground">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="price-asc">Цена: по возрастанию</SelectItem>
                  <SelectItem value="price-desc">Цена: по убыванию</SelectItem>
                  <SelectItem value="area-asc">Площадь: по возрастанию</SelectItem>
                  <SelectItem value="area-desc">Площадь: по убыванию</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="bg-background py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              {"Найдено: "}{filtered.length}{" "}
              {filtered.length === 1 ? "планировка" : filtered.length < 5 ? "планировки" : "планировок"}
            </p>
          </div>

          {filtered.length === 0 ? (
            <div className="flex flex-col items-center gap-4 rounded-xl bg-secondary py-16 text-center">
              <Search className="h-12 w-12 text-muted-foreground/40" />
              <h3 className="text-xl font-bold text-foreground">Планировки не найдены</h3>
              <p className="text-base text-muted-foreground">
                Попробуйте изменить параметры фильтрации
              </p>
              <Button
                variant="outline"
                className="border-border text-foreground hover:bg-secondary"
                onClick={() => {
                  setSelectedProject("all")
                  setSelectedRooms("all")
                }}
              >
                Сбросить фильтры
              </Button>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filtered.map((plan) => {
                const project = projects.find((p) => p.slug === plan.projectSlug)
                return (
                  <AnimatedSection key={plan.id}>
                    <div className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-lg">
                      <div className="relative aspect-square overflow-hidden bg-white p-4">
                        <Image
                          src={plan.image}
                          alt={`${plan.rooms}-комнатная, ${plan.area} м²`}
                          fill
                          className="object-contain transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="flex flex-col gap-3 p-5">
                        <div className="flex items-start justify-between">
                          <div className="flex flex-col gap-1">
                            <span className="text-lg font-bold text-card-foreground">
                              {plan.rooms}-комн.
                            </span>
                            <span className="text-sm text-muted-foreground">{plan.projectName}</span>
                          </div>
                          <span className="text-sm font-medium text-muted-foreground">
                            {plan.area} м²
                          </span>
                        </div>

                        <div className="flex items-center justify-between border-t border-border pt-3">
                          <div className="flex flex-col gap-0.5">
                            <span className="text-xs text-muted-foreground">от</span>
                            <span className="text-lg font-bold text-primary">{formatPrice(plan.price)}</span>
                          </div>
                          <Button
                            asChild
                            size="sm"
                            className="bg-accent text-accent-foreground hover:bg-accent/90"
                          >
                            <Link href={`/projects/${plan.projectSlug}`}>
                              Подробнее
                              <ArrowRight className="ml-1 h-3 w-3" />
                            </Link>
                          </Button>
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {formatPrice(plan.pricePerSqm)} за м²
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                )
              })}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
