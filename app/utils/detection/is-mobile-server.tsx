'use server'

import { headers } from 'next/headers'
import { UAParser } from 'ua-parser-js'

export const isMobileDevice = () => {
  if (typeof process === 'undefined') {
    throw new Error('[Server method] you are importing a server-only module outside of server')
  }

  const { get } = headers()
  const ua = get('user-agent')

  const os = new UAParser(ua || '').getOS()

  return os.name && ['Android[-x86]', 'iOS'].includes(os.name) ? true : false;
  }
 

  /* export const isMobileDevice = (userAgent: string): boolean => {
    return /android.+mobile|ip(hone|[oa]d)/i.test(userAgent);
  }; */


  /* import {useEffect, useState} from "react"

export const isMobileDevice = (px_width: number) => {
    const [width, setWidth] = useState<number>(0)
    const [isMobile, setIsMobile] = useState(false)
    function handleWindowSizeChange() {
        setWidth(window.innerWidth)
    }

    useEffect(() => {
        setWidth(window.innerWidth)
        setIsMobile(width <= 768)
        window.addEventListener('resize', handleWindowSizeChange)
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange)
        }
    }, [width]);

    useEffect(() => {
        setIsMobile(width <= px_width)
    }, [px_width, width])

    if(isMobile === null) {
        return false
    }

    return isMobile
}
 */