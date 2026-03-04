"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

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
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? "bg-background/80 shadow-lg py-3 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent py-4 lg:py-5"
          }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="DEZI GROUP - На главную">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 3 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-primary/30 bg-primary shadow-[0_0_20px_rgba(196,73,0,0.3)]"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-[#C44900] via-[#F57C00] to-[#FFB74D] opacity-90" />
              <span className="relative text-lg font-bold text-white">DG</span>
            </motion.div>
            <div className={`flex flex-col ${!isScrolled ? "text-white" : "text-foreground"}`}>
              <span className="text-xl font-bold tracking-tight lg:text-2xl transition-colors duration-300">
                DEZI GROUP
              </span>
              <span className={`text-[10px] font-medium tracking-[0.25em] uppercase lg:text-xs transition-colors duration-300 ${!isScrolled ? "text-white/80" : "text-primary"}`}>
                Строительная компания
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Основная навигация">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link-underline rounded-lg px-3 py-2 text-sm font-medium transition-all duration-300 hover:bg-white/10 ${!isScrolled ? "text-white/90 hover:text-white" : "text-foreground/80 hover:text-primary"
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-6 lg:flex">
            <a
              href="https://wa.me/77714940000"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 text-sm font-medium transition-all duration-300 hover:scale-105 ${!isScrolled ? "text-white/90 hover:text-white" : "text-foreground/90 hover:text-primary"
                }`}
            >
              <Phone className="h-4 w-4" />
              +7 771 494 00 00
            </a>
            <Button
              asChild
              className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-[0_0_20px_rgba(245,124,0,0.3)] hover:shadow-[0_0_30px_rgba(245,124,0,0.5)] transition-all duration-300 hover:scale-105"
            >
              <Link href="/contacts">Связаться</Link>
            </Button>
          </div>

          {/* Mobile toggle */}
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
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-xl lg:hidden"
          >
            <div className="flex h-full flex-col items-center justify-center gap-6 px-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-semibold text-foreground transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="mt-6 flex flex-col items-center gap-4"
              >
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
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
