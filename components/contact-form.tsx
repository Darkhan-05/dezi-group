"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle2 } from "lucide-react"
import { projects } from "@/lib/data"

interface ContactFormProps {
  selectedProject?: string
  variant?: "light" | "dark"
}

export function ContactForm({ selectedProject, variant = "dark" }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [project, setProject] = useState(selectedProject || "")

  const formatPhoneNumber = (value: string) => {
    let digits = value.replace(/\D/g, "")

    // Если начинается с 7 или 8 — убираем код страны
    if (digits.startsWith("7") || digits.startsWith("8")) {
      digits = digits.slice(1)
    }

    // Берём максимум 10 цифр
    digits = digits.slice(0, 10)

    let result = "+7"

    if (digits.length > 0) {
      result += " (" + digits.slice(0, 3)
    }

    if (digits.length >= 4) {
      result += ") " + digits.slice(3, 6)
    }

    if (digits.length >= 7) {
      result += " " + digits.slice(6, 8)
    }

    if (digits.length >= 9) {
      result += " " + digits.slice(8, 10)
    }

    return result
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value)
    setPhone(formatted)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setName("")
      setPhone("")
      setProject(selectedProject || "")
    }, 3000)
  }

  const isDark = variant === "dark"

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 py-8 text-center">
        <CheckCircle2 className={`h-16 w-16 ${isDark ? "text-accent" : "text-accent"}`} />
        <h3 className={`text-2xl font-bold ${isDark ? "text-primary-foreground" : "text-foreground"}`}>
          Заявка отправлена!
        </h3>
        <p className={`text-base ${isDark ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
          Наш менеджер свяжется с вами в ближайшее время
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Label htmlFor="name" className={isDark ? "text-primary-foreground/80" : "text-foreground"}>
          Ваше имя
        </Label>
        <Input
          id="name"
          type="text"
          placeholder="Введите ваше имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className={isDark
            ? "border-primary-foreground/20 bg-primary-foreground/10 text-white placeholder:text-white/40 focus:border-accent"
            : "border-border bg-background text-foreground"
          }
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="phone" className={isDark ? "text-primary-foreground/80" : "text-foreground"}>
          Номер телефона
        </Label>
        <Input
          id="phone"
          type="tel"
          placeholder="+7 (___) ___ __ __"
          value={phone}
          onChange={handlePhoneChange}
          required
          className={isDark
            ? "border-primary-foreground/20 bg-primary-foreground/10 text-white placeholder:text-white/40 focus:border-accent"
            : "border-border bg-background text-foreground"
          }
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="project" className={isDark ? "text-primary-foreground/80 font-medium" : "text-foreground font-medium"}>
          Жилой комплекс
        </Label>
        <Select value={project} onValueChange={setProject}>
          <SelectTrigger
            className={isDark
              ? "border-primary-foreground/20 bg-primary-foreground/10 text-white [&>span]:text-white focus:ring-accent"
              : "border-border bg-background text-foreground"
            }
          >
            <SelectValue placeholder="Выберите ЖК" />
          </SelectTrigger>
          <SelectContent>
            {projects.map((p) => (
              <SelectItem key={p.id} value={p.id}>{p.name}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <Button
        type="submit"
        size="lg"
        className="mt-2 bg-accent text-accent-foreground hover:bg-accent/90"
      >
        Получить консультацию
      </Button>
    </form>
  )
}
