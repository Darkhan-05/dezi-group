"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "/", label: "Главная" },
  { href: "/about", label: "О нас" },
  { href: "/projects", label: "Проекты" },
  { href: "/apartments", label: "Планировки" },
  { href: "/mortgage", label: "Ипотека" },
  { href: "/contacts", label: "Контакты" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-background/95 shadow-lg py-3 backdrop-blur-md"
          : "bg-transparent py-4 lg:py-5"
          }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 lg:px-8">
          <Link href="/" className="flex items-center gap-3" aria-label="KomfortStroy2020 - На главную">
            <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-primary/30 bg-primary shadow-[0_0_15px_rgba(27,67,50,0.2)]">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#1B4332]/20 via-[#2D6A4F]/20 to-[#52B788]/20" />
              <span className="text-lg font-bold text-white">КС</span>
            </div>
            <div className={`flex flex-col ${!isScrolled ? "text-white" : "text-foreground"}`}>
              <span className="text-xl font-bold tracking-tight lg:text-2xl">
                KOMFORTSTROY
              </span>
              <span className={`text-[10px] font-medium tracking-[0.25em] uppercase lg:text-xs ${!isScrolled ? "text-white/80" : "text-primary"}`}>
                Строительная компания
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Основная навигация">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-white/10 ${!isScrolled ? "text-white/90 hover:text-white" : "text-foreground/80 hover:text-primary"
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-6 lg:flex">
            <a
              href="https://wa.me/77714940000"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${!isScrolled ? "text-white/90 hover:text-white" : "text-foreground/90 hover:text-primary"
                }`}
            >
              <Phone className="h-4 w-4" />
              +7 771 494 00 00
            </a>
            <Button
              asChild
              className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-[0_0_10px_rgba(45,106,79,0.3)]"
            >
              <Link href="/contacts">Связаться</Link>
            </Button>
          </div>

          <button
            className={`flex items-center justify-center rounded-lg p-2 transition-colors hover:bg-white/10 ${!isScrolled ? "text-white" : "text-foreground"
              } lg:hidden`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/98 backdrop-blur-xl animate-fade-in lg:hidden">
          <div className="flex h-full flex-col items-center justify-center gap-6 px-6">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-semibold text-foreground transition-colors hover:text-accent"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-6 flex flex-col items-center gap-4">
              <a
                href="https://wa.me/77714940000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-lg font-medium text-foreground/80"
              >
                <Phone className="h-5 w-5" />
                +7 771 494 00 00
              </a>
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Link href="/contacts">Связаться с нами</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
