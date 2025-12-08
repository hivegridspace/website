"use client"

import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function ThemeToggle() {
    const [isDark, setIsDark] = useState(false)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        const isDarkMode = document.documentElement.classList.contains("dark")
        setIsDark(isDarkMode)
    }, [])

    const toggleTheme = () => {
        const newIsDark = !isDark
        setIsDark(newIsDark)
        document.documentElement.classList.toggle("dark", newIsDark)
        localStorage.setItem("theme", newIsDark ? "dark" : "light")
    }

    if (!mounted) {
        return (
            <Button variant="ghost" size="icon" className="h-9 w-9" aria-label="Toggle theme">
                <Sun className="h-4 w-4" />
            </Button>
        )
    }

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="h-9 w-9"
            aria-label="Toggle theme"
        >
            {isDark ? (
                <Sun className="h-4 w-4 text-foreground" />
            ) : (
                <Moon className="h-4 w-4 text-foreground" />
            )}
        </Button>
    )
}
