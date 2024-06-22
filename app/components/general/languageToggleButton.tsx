"use client"

import * as React from "react"
import { GlobeAltIcon } from "@heroicons/react/20/solid"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function LanguageToggleButton() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <GlobeAltIcon className="h-6 w-6" />
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => console.log("English selected")}>
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => console.log("German selected")}>
          German
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => console.log("French selected")}>
          French
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
