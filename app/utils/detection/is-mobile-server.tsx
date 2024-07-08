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
  