"use client"

import * as React from "react"
import { Command, Moon, Option, Sun } from "lucide-react"
import { useTheme } from "next-themes"


import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useEffect, useState } from "react"
import { toggleTheme } from "@/app/utils/toggle-theme"

export function ModeToggle() {
  const [mounted, setMounted] = useState(false)
  const theme = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>

      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => theme.setTheme("light")}>
          <span>
          Light
          </span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => theme.setTheme("dark")}>
          <span>
          Dark
          </span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => theme.setTheme("system")}>
          <span>
          System
          </span>
        </DropdownMenuItem>
<DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => toggleTheme(theme)}>
<p className="grid grid-cols-3 items-center"><Command size={14} /> <Option size={14} /> T </p>
          <DropdownMenuShortcut>

          </DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
