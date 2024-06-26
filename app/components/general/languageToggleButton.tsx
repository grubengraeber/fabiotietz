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
import getUnicodeFlagIcon from 'country-flag-icons/unicode'


export default function LanguageToggleButton() {

  const germanFlag = getUnicodeFlagIcon('DE');
    const englishFlag = getUnicodeFlagIcon('GB');
    const frenchFlag = getUnicodeFlagIcon('FR');
    const spanishFlag = getUnicodeFlagIcon('ES');
    const croatianFlag = getUnicodeFlagIcon('HR');
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <GlobeAltIcon className="h-6 w-6" />
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => console.log("German selected")}>
          {germanFlag} Deustch
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => console.log("English selected")}>
          {englishFlag} English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => console.log("French selected")}>
          {frenchFlag} Français
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => console.log("Spanish selected")}>
          {spanishFlag} Español
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => console.log("Croatian selected")}>
          {croatianFlag} Hrvatski
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
