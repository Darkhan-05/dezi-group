"use client"

import { motion, type Variants } from "framer-motion"
import { type ReactNode } from "react"

type AnimationVariant = "fadeUp" | "fadeDown" | "fadeLeft" | "fadeRight" | "scaleIn" | "blurIn" | "none"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  variant?: AnimationVariant
  duration?: number
  once?: boolean
}

const variants: Record<AnimationVariant, Variants> = {
  fadeUp: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  },
  fadeDown: {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 },
  },
  fadeRight: {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { opacity: 1, scale: 1 },
  },
  blurIn: {
    hidden: { opacity: 0, filter: "blur(12px)", scale: 0.95 },
    visible: { opacity: 1, filter: "blur(0px)", scale: 1 },
  },
  none: {
    hidden: {},
    visible: {},
  },
}

export function AnimatedSection({
  children,
  className = "",
  delay = 0,
  variant = "fadeUp",
  duration = 0.7,
  once = true,
}: AnimatedSectionProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.15 }}
      variants={variants[variant]}
      transition={{
        duration,
        delay: delay / 1000,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* Stagger container for child animations */
interface StaggerContainerProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
  once?: boolean
}

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.12,
  once = true,
}: StaggerContainerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.1 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* Stagger item — to be used inside StaggerContainer */
interface StaggerItemProps {
  children: ReactNode
  className?: string
  variant?: AnimationVariant
  duration?: number
}

export function StaggerItem({
  children,
  className = "",
  variant = "fadeUp",
  duration = 0.6,
}: StaggerItemProps) {
  return (
    <motion.div
      variants={variants[variant]}
      transition={{
        duration,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
