"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MapPin } from "lucide-react"
import { projects } from "@/lib/data"
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animated-section"

export function ProjectsSection() {
  return (
    <section id="projects" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <AnimatedSection>
          <div className="mb-12 flex flex-col gap-4 lg:mb-16">
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent">
              <span className="h-px w-8 bg-accent" />
              Наши объекты
            </span>
            <h2 className="max-w-lg text-balance text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              Наши жилые комплексы
            </h2>
            <p className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              Каждый проект — это продуманное пространство для комфортной жизни, созданное с заботой о деталях
            </p>
          </div>
        </AnimatedSection>

        <StaggerContainer className="grid gap-8 md:grid-cols-2" staggerDelay={0.15}>
          {projects.map((project) => (
            <StaggerItem key={project.id} variant="fadeUp">
              <Link href={`/projects/${project.slug}`} className="group block">
                <div className="overflow-hidden rounded-2xl bg-card shadow-sm transition-all duration-500 hover:shadow-2xl card-hover">
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover img-zoom"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent transition-opacity duration-500" />

                    {/* Status Badge */}
                    <div className="absolute top-4 left-4">
                      <span
                        className={`inline-flex items-center rounded-full px-4 py-1.5 text-xs font-semibold backdrop-blur-md ${project.status === "Сдан"
                          ? "bg-green-500/20 text-green-200 border border-green-400/30"
                          : "bg-amber-500/20 text-amber-200 border border-amber-400/30"
                          }`}
                      >
                        {project.status}
                      </span>
                    </div>

                    {/* Location Badge */}
                    <div className="absolute bottom-4 right-4">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-4 py-1.5 text-xs font-medium text-white backdrop-blur-md border border-white/20">
                        <MapPin className="h-3 w-3" />
                        Кокшетау
                      </span>
                    </div>

                    {/* Name overlay on image */}
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-2xl font-bold text-white drop-shadow-lg md:text-3xl">
                        {project.nameShort || project.name}
                      </h3>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex flex-col gap-3 p-6">
                    <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1">
                        {project.class} класс
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1">
                        {project.floors} этажей
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1">
                        {project.area || project.apartments}
                      </span>
                    </div>
                    <div className="mt-1 flex items-center gap-2 text-sm font-semibold text-accent transition-all duration-300 group-hover:gap-3">
                      Подробнее
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
