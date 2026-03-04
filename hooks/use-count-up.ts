"use client"

import { useEffect, useRef, useState } from "react"

interface UseCountUpOptions {
    end: number
    duration?: number
    suffix?: string
}

function easeOutExpo(t: number): number {
    return t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
}

export function useCountUp({
    end,
    duration = 2500,
    suffix = "",
}: UseCountUpOptions) {
    const ref = useRef<HTMLSpanElement>(null)
    const [displayValue, setDisplayValue] = useState("0")
    const hasStartedRef = useRef(false)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasStartedRef.current) {
                    hasStartedRef.current = true

                    const startTime = performance.now()

                    const animate = (currentTime: number) => {
                        const elapsed = currentTime - startTime
                        const progress = Math.min(elapsed / duration, 1)
                        const easedProgress = easeOutExpo(progress)
                        const currentValue = Math.round(easedProgress * end)

                        setDisplayValue(currentValue.toLocaleString("ru-RU") + suffix)

                        if (progress < 1) {
                            requestAnimationFrame(animate)
                        }
                    }

                    requestAnimationFrame(animate)
                }
            },
            { threshold: 0.3 }
        )

        observer.observe(el)

        return () => {
            observer.unobserve(el)
        }
    }, [end, duration, suffix])

    return { ref, displayValue }
}
