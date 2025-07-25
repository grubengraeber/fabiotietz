'use client'

import { useIsMobile } from '@/app/utils/detection/is-mobile'
import { useIsMac } from '@/app/utils/detection/is-mac-device-client'
import Footer from './footer'

export default function FooterWrapper() {
  const isMobile = useIsMobile()
  const isMac = useIsMac()

  return <Footer isMobile={isMobile} isMac={isMac} />
} 