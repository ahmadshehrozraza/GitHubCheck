"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Button } from "./button"
import { Moon, Sun } from "lucide-react"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <Button variant="outline" size="icon" /> // Placeholder to avoid layout shift
  }

  return (
    <Button variant="outline" size="icon-sm" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {theme === "dark" ? <Sun className="h-10 w-10" /> : <Moon className="h-10 w-10" />}
    </Button>
  )
}