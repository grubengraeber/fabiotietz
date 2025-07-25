'use client'

import { useIsMobile } from '@/app/utils/detection/is-mobile'
import { useIsMac } from '@/app/utils/detection/is-mac-device-client'
import { ReactNode } from 'react'

interface DeviceDetectionProps {
  children: ReactNode
  isMobile: boolean
  isMac: boolean
}

export default function DeviceDetection({ children, isMobile, isMac }: DeviceDetectionProps) {
  return <>{children}</>
} 