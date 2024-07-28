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
import { useAppContext } from "@/context/app-context"


export default function LanguageToggleButton() {

  const { setLanguage } = useAppContext();

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
          <span className="sr-only">Toggle language</span> {/* TODO: language */}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem disabled onClick={() => setLanguage('german')}>
          {germanFlag} Deustch
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage('english')}>
          {englishFlag} English
        </DropdownMenuItem>
        {/* <DropdownMenuItem disabled onClick={() => setLanguage('french')}>
          {frenchFlag} Français
        </DropdownMenuItem>
        <DropdownMenuItem disabled onClick={() => setLanguage('spanish')}>
          {spanishFlag} Español
        </DropdownMenuItem>
        <DropdownMenuItem disabled onClick={() => setLanguage('croatian')}>
          {croatianFlag} Hrvatski
        </DropdownMenuItem> */}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
