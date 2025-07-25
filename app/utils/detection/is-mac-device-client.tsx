'use client'

import { useEffect, useState } from 'react'

export const useIsMac = () => {
  const [isMac, setIsMac] = useState(false)

  useEffect(() => {
    const checkIsMac = () => {
      const platform = navigator.platform.toLowerCase()
      setIsMac(platform.includes('mac'))
    }

    checkIsMac()
  }, [])

  return isMac
} 